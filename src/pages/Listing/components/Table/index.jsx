import { useNavigate } from "react-router-dom";
import { Container, StyledTable } from "./styles";

export function Table({ data }){
    const navigate = useNavigate()

    function handleEditItem(name){
        navigate("/formulario", {
            state: {
                name
            }
        })
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
                            <tr key={item.name}>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.measurementField.toUpperCase()}
                                </td>
                                <td>
                                    {item.quantity}
                                </td>
                                <td>
                                    R$ {item.price}
                                </td>
                                <td>
                                    {item.perishable ? 'SIM' : 'NÃO'}
                                </td>
                                <td>
                                    {(item.validity && new Date(item.validity).toLocaleDateString("pt-BR")) || 'N/A'}
                                </td>
                                <td>
                                    {new Date(item.fabrication).toLocaleDateString("pt-BR")}
                                </td>
                                <td>
                                    <button onClick={() => handleEditItem(item.name)}>Editar</button>
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