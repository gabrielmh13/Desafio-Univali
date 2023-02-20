import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetLocalStorage, SetLocalStorage } from "../../../../utils/localStorage";
import { Container, StyledTable } from "./styles";

export function Table({ data }){
    const [itemsList, setItemsList] = useState([])

    const navigate = useNavigate()

    function handleEditItem(item){
        navigate("/formulario", {
            state: {
                item
            }
        })
    }

    function handleDeleteItem(id){
        if (window.confirm('Você tem certeza que deseja excluir este item?')){

           let items = GetLocalStorage('@univali')

           const index = items.findIndex(item => item.id === id)
           
           items.splice(index, 1)
           setItemsList(items)

           SetLocalStorage('@univali', items)

           window.alert('Item excluído com sucesso!')
        }
    }

    useEffect(() => {
        setItemsList(data)
    }, [data])

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
                        itemsList.map((item) => (
                            <tr key={item.id}>
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
                                    R$ {parseFloat(item.price).toFixed(2)}
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
                                    <button onClick={() => handleEditItem(item)}>Editar</button>
                                    <button onClick={() => handleDeleteItem(item.id)}>Remover</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </StyledTable>
        </Container>
    )
}