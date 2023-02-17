import { Container, StyledLink } from "./styles";

export function SideMenu(){
    return (
        <Container>
            <StyledLink to="/">LISTAGEM</StyledLink>
            <StyledLink to="/formulario">FORMULÁRIO</StyledLink>
        </Container>
    )
}