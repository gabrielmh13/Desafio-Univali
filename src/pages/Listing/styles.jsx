import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    padding: 5rem 1rem 5rem 1rem;
    display: flex;
    flex-direction: column;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 1rem;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    background-color: #333;
    color: white;
    padding: 0.5rem;
    border-radius: 0.5rem;

    &:hover {
        background-color: #222;
    }
`