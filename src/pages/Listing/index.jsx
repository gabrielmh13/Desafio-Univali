import { Table } from "./components/Table";
import { Container, Header, StyledLink } from "./styles";

export function Listing(){
    const data = [
        {
            id: 'id item'
        },
        {
            id: 'id item 2'
        },
        {
            id: 'id item 2'
        },
        {
            id: 'id item 2'
        },
        {
            id: 'id item 2'
        },
        {
            id: 'id item 2'
        },
        {
            id: 'id item 2'
        },
        {
            id: 'id item 2'
        },
        {
            id: 'id item 2'
        },
        {
            id: 'id item 2'
        },
        {
            id: 'id item 2'
        },
        {
            id: 'id item 2'
        },
        {
            id: 'id item 2'
        },
        {
            id: 'id item 2'
        },
        {
            id: 'id item 2'
        },
        {
            id: 'id item 2'
        },
        {
            id: 'id item 2'
        },
        {
            id: 'id item 2'
        },
        {
            id: 'id item 2'
        },
        {
            id: 'id item 2'
        },
        {
            id: 'id item 2'
        },
        {
            id: 'id item 2'
        },
        {
            id: 'id item 2'
        },
        {
            id: 'id item 2'
        },
        {
            id: 'id item 2'
        }
    ]

    return (
        <Container>
            <Header>
                <h1>Itens Cadastrados</h1>

                <StyledLink to="/formulario">
                    Novo Item
                </StyledLink>
            </Header>
            <Table data={data} />
        </Container>
    )
}