import styled from "styled-components";
import CurrencyInput from "react-currency-masked-input";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    margin-top: 1rem;
    padding: 1rem;
`

export const FormContainer = styled.form`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media (max-width: 1024px) {
        width: 90%;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 3rem;
    padding: 0.8rem;
    border-radius: 0.5rem;
    background-color: #333;
    color: white;
    font-size: 1rem;

    &::placeholder {
        color: white;
    }
`

export const Select = styled.select`
    width: 100%;
    height: 3rem;
    padding: 0.8rem;
    border-radius: 0.5rem;
    background-color: #333;
    color: white;
    font-size: 1rem;
`

export const InputContainer = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    padding: 0.8rem;
    border-radius: 0.5rem;
    color: white;

    label {
        color: white;
    }

    input:focus {
        outline: none;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }
`

export const CheckBoxContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    margin: 1rem 0rem 1rem 0rem;

    input {
        width: auto;
    }
`

export const ButtonContainer = styled.div`
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Button = styled.button`
    padding: 1rem;
    width: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 0.5rem;
    background-color: #333;
    color: white;
    font-weight: bold;
`

export const CurrencyInputField = styled(CurrencyInput)`
    width: 100%;
    height: 3rem;
    padding: 0.8rem;
    border-radius: 0.5rem;
    background-color: #333;
    color: white;
    font-size: 1rem;

    &::placeholder {
        color: white;
    }
`