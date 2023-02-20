import { useEffect, useState } from "react";
import { Table } from "./components/Table";
import { Container, Header, StyledLink } from "./styles";

export function Listing(){
    const [items, setItems] = useState([])

    useEffect(() => {
        const rawData = localStorage.getItem('@univali')
        setItems(JSON.parse(rawData))
    }, []);

    return (
        <Container>
            <Header>
                <h1>Itens Cadastrados</h1>

                <StyledLink to="/formulario">
                    Novo Item
                </StyledLink>
            </Header>
            <Table data={items || []} />
        </Container>
    )
}