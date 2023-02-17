import { useState } from "react";
import { Container, Select, Input, FormContainer, CheckBoxContainer, InputContainer, ButtonContainer, Button } from "./styles";

export function Register(){
    const [measurement, setMeasurement] = useState('lt')

    function handleMeasurementChange(e){
        setMeasurement(e.target.value)
    }

    function handleSaveItem(event){
        event.preventDefault();
        console.log("Saved")
    }

    function handleCancelItem(event){
        event.preventDefault();
        console.log("Cancelled")
    }


    return (
        <Container>

            <FormContainer>

                <label htmlFor="item">Nome do item</label>
                <Input type="text" placeholder="Nome do Item" name="item"/>

                <label htmlFor="measurement">Unidade de medida</label>
                <Select name="measurement" onChange={(e) => handleMeasurementChange(e)}>
                    <option value="lt">Litro</option>
                    <option value="kg">Quilograma</option>
                    <option value="un">Unidade</option>
                </Select>

                <label htmlFor="quantity">Quantidade</label>
                <InputContainer>
                    <Input type="number" placeholder="Quantidade" name="quantity"/>
                    <span>{measurement}</span>
                </InputContainer>

                <label htmlFor="price">Preço</label>
                <InputContainer>
                    <span>R$</span>
                    <Input type="number" step="0.01" placeholder="0.00" name="price"/>
                </InputContainer>

                <CheckBoxContainer>
                    <label htmlFor="perishable">Item perecível?</label>
                    <Input type="checkbox" name="perishable" />
                </CheckBoxContainer>


                <label htmlFor="validity">Data de validade</label>
                <Input type="date" name="validity" />
                

                <label htmlFor="fabrication">Data de fabricação</label>
                <Input type="date" name="fabrication" placeholder="Data de Fabricação"/>

                
                <ButtonContainer>
                    <Button onClick={(e) => handleSaveItem(e)}>Salvar</Button>

                    <Button onClick={(e) => handleCancelItem(e)}>Cancelar</Button>
                </ButtonContainer>
            </FormContainer>

        </Container>
    )
}