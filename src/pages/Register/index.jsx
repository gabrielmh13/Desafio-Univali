import { useState } from "react";
import { Container, Select, Input, FormContainer, CheckBoxContainer, InputContainer, ButtonContainer, Button, CurrencyInputField } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

export function Register(){
    const [measurement, setMeasurement] = useState('lt')
    const patternThreeDigisAfterComma = /^\d+(\.\d{0,3})?$/

    const schema = yup.object({
        item: yup.string().required('Nome do item é obrigatório').max(50, "Máximo 50 caracteres").matches(/^[aA-zZ\s]+$/, "Permitido apenas caracteres"),

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
            })
        }),

        fabrication: yup.date().typeError("Data inválida").required("Data de fabricação obrigatória").when('validity', (validity, rule) => {
            if(validity[0] instanceof Date && !isNaN(validity[0])){
                return rule.max(validity, "Data de fabricação maior que de validade")
            }
        })

    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    function onSubmitHandler(data){
        console.log(data)
    }

    function handleCancelItem(event){
        event.preventDefault();
        console.log("Cancelled")
    }


    return (
        <Container>

            <FormContainer onSubmit={handleSubmit(onSubmitHandler)}>

                <label htmlFor="item">Nome do item</label>
                <p style={{color: 'red'}}>{errors.item?.message}</p>
                <Input type="text" placeholder="Nome do Item" name="item" {...register("item")}/>

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
                    <CurrencyInputField name="price" placeholder="0.00" {...register("price")}/>
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