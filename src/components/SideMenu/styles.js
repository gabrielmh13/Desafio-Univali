import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    background-color: gray;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    @media (min-width: 1024px) {
        width: 20%;
        height: 100vh;
        flex-direction: column;
    }

    width: 100%;
    height: 4rem;
`

export const StyledLink = styled(Link)`
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    color: #333;

    &:hover {
        color: white;
    }
`