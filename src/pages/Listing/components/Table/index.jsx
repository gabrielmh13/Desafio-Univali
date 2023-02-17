import { Container, StyledTable } from "./styles";

export function Table({ data }){

    function handleEditItem(){
        console.log("Editando item")
    }

    function handleDeleteItem(){
        console.log("Deleting item")
    }

    return (
        <Container>
            <StyledTable>
                <thead>
                    <tr>
                        <th>
                            Nome
                        </th>
                        <th>
                            Unidade de Medida
                        </th>
                        <th>
                            Quantidade
                        </th>
                        <th>
                            Preço
                        </th>
                        <th>
                            Produto Perecível
                        </th>
                        <th>
                            Data de Validade
                        </th>
                        <th>
                            Data de Fabricação
                        </th>
                        <th>
                            Ações
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    {item.id}
                                </td>
                                <td>
                                    {item.id}
                                </td>
                                <td>
                                    {item.id}
                                </td>
                                <td>
                                    {item.id}
                                </td>
                                <td>
                                    {item.id}
                                </td>
                                <td>
                                    {item.id}
                                </td>
                                <td>
                                    {item.id}
                                </td>
                                <td>
                                    <button onClick={handleEditItem}>Editar</button>
                                    <button onClick={handleDeleteItem}>Remover</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </StyledTable>
        </Container>
    )
}