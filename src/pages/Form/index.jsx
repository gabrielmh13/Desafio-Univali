import { useEffect, useState } from "react";
import { Container, Select, Input, FormContainer, CheckBoxContainer, InputContainer, ButtonContainer, Button } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { GetLocalStorage, SetLocalStorage } from '../../utils/localStorage'

export function Form(){
    const [measurement, setMeasurement] = useState('lt')
    const patternThreeDigisAfterComma = /^\d+(\.\d{0,3})?$/
    const navigate = useNavigate()
    const location = useLocation()

    const currentItem = location.state?.item

    // Schema para validação de formulario
    const schema = yup.object({
        name: yup.string().required('Nome do item é obrigatório').max(50, "Máximo 50 caracteres").matches(/^[aA-zZ\s]+$/, "Permitido apenas caracteres"),

        measurementField: yup.string().required("Unidade de medida obrigatória"),

        quantity: (() => {
            if (measurement === "lt" || measurement === "kg"){
                return yup.number().typeError("Deve ser um número").test(
                    "is-decimal",
                    "Número deve conter até 3 casas decimais",
                    (val) => {
                        if (val !== undefined) {
                            return patternThreeDigisAfterComma.test(val);
                        }
                        return true;
                    }
                ).transform((_, val) => (val !== "" ? Number(val) : 0))
            }

            return yup.number("Deve ser um número").typeError("Deve ser um número").integer("Deve ser um número inteiro").transform((_, val) => (val !== "" ? Number(val) : 0))
        })(),

        price: yup.number().typeError("Deve ser um número").test(
            "is-decimal",
            "Número deve conter até 3 casas decimais",
            (val) => {
                if (val !== undefined) {
                    return patternThreeDigisAfterComma.test(val);
                }
                return true;
            }
        ),

        perishable: yup.boolean(),

        validity: yup.date().nullable().transform(v => (v instanceof Date && !isNaN(v) ? v : null)).when('perishable', {
            is: true,
            then: rule => rule.required("Data de vencimento obrigatória").when('validity', (validity, rule) => {
                if(validity[0] instanceof Date && !isNaN(validity[0])){
                    return rule.min(new Date(), "Produto vencido")
                }
            }),
            otherwise: rule => rule.notRequired().when('validity', (validity, rule) => {
                if(validity[0] instanceof Date && !isNaN(validity[0])){
                    return rule.min(new Date(), "Produto vencido")
                }
            })
        }),

        fabrication: yup.date().typeError("Data inválida").required("Data de fabricação obrigatória").when('validity', (validity, rule) => {
            if(validity[0] instanceof Date && !isNaN(validity[0])){
                return rule.max(validity, "Data de fabricação maior que de validade")
            }
        })

    })
    // Fim do schema de validação de formulario

    const { register, handleSubmit, formState: { errors }} = useForm({
        defaultValues: {
            name: currentItem?.name,
            measurementField: currentItem?.measurementField,
            quantity: currentItem?.quantity,
            price: parseFloat(currentItem?.price).toFixed(2),
            perishable: currentItem?.perishable,
            validity: currentItem?.validity && new Date(currentItem?.validity).toISOString().split('T')[0],
            fabrication: currentItem?.fabrication && new Date(currentItem?.fabrication).toISOString().split('T')[0]
        },
        resolver: yupResolver(schema)
    });

    function onSubmitHandler(data){
        data.id = currentItem?.id
        let items = GetLocalStorage('@univali')

        if(items){
            let index = items.findIndex(item => item.id === data.id)

            if(index >= 0){
                items[index] = data
            }
            else {
                data.id = uuid()
                items.push(data)
            }

            SetLocalStorage('@univali', items)
            navigate("/")
            return

        }

        let newItem = []
        data.id = uuid()
        newItem.push(data)
        
        SetLocalStorage('@univali', newItem)
        navigate("/")
        return
    }

    function handleCancelItem(event){
        event.preventDefault();
        navigate("/")
    }

    useEffect(() => {
        currentItem?.measurementField && setMeasurement(currentItem?.measurementField)
    }, [currentItem?.measurementField])


    return (
        <Container>

            <FormContainer onSubmit={handleSubmit(onSubmitHandler)}>

                <label htmlFor="name">Nome do item</label>
                <p style={{color: 'red'}}>{errors.name?.message}</p>
                <Input type="text" placeholder="Nome do Item" name="name" {...register("name")} />

                <label htmlFor="measurementField">Unidade de medida</label>
                <p style={{color: 'red'}}>{errors.measurementField?.message}</p>
                <Select name="measurementField" {...register("measurementField")} onChange={(e) => setMeasurement(e.target.value)}>
                    <option value="lt">Litro</option>
                    <option value="kg">Quilograma</option>
                    <option value="un">Unidade</option>
                </Select>

                <label htmlFor="quantity">Quantidade</label>
                <p style={{color: 'red'}}>{errors.quantity?.message}</p>
                <InputContainer>
                    <Input type="text" placeholder="Quantidade" name="quantity" {...register("quantity")}/>
                    <span>{measurement}</span>
                </InputContainer>

                <label htmlFor="price">Preço</label>
                <p style={{color: 'red'}}>{errors.price?.message}</p>
                <InputContainer>
                    <span>R$</span>
                    <Input type="number" step={0.01} name="price" placeholder="0.00" {...register("price")} />
                </InputContainer>

                <CheckBoxContainer>
                    <label htmlFor="perishable">Item perecível?</label>
                    <Input type="checkbox" name="perishable" {...register("perishable")}/>
                </CheckBoxContainer>


                <label htmlFor="validity">Data de validade</label>
                <p style={{color: 'red'}}>{errors.validity?.message}</p>
                <Input type="date" name="validity" {...register("validity")}/>
                

                <label htmlFor="fabrication">Data de fabricação</label>
                <p style={{color: 'red'}}>{errors.fabrication?.message}</p>
                <Input type="date" name="fabrication" placeholder="Data de Fabricação" {...register("fabrication")}/>

                
                <ButtonContainer>
                    <Button type="submit">Salvar</Button>

                    <Button onClick={(e) => handleCancelItem(e)}>Cancelar</Button>
                </ButtonContainer>
            </FormContainer>

        </Container>
    )
}