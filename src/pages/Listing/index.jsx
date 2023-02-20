import { useEffect, useState } from "react";
import { GetLocalStorage } from "../../utils/localStorage";
import { Table } from "./components/Table";
import { Container, Header, StyledLink } from "./styles";

export function Listing(){
    const [items, setItems] = useState([])

    useEffect(() => {
        const data = GetLocalStorage('@univali')
        setItems(data)
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