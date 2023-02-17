import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    overflow-x: scroll;

`

export const StyledTable = styled.table`
    border-collapse: collapse;
	border: 1px solid black;
	text-align: center;
	vertical-align: middle;
    width: 100%;

    thead {
        width: 25%;
        background-color: #333;
        color: white;
        position: sticky;
        top: 0;
    }

    th {
        position: sticky;
        top: 0;
    }

    th, td {
            border: 1px solid black;
            padding: 8px;
    }

    tbody tr:nth-child(odd) {
        background-color: #fff;
    }

    tbody tr:nth-child(even) {
        background-color: #eee;
    }

    tbody td:last-child {
        button {
            margin: 0.5rem;
            padding: 0.5rem;
            border-radius: 0.5rem;
            width: 5rem;
            background-color: #333;
            color: white;
            cursor: pointer;

            &:hover{
                background-color: #222;
            }
        }
    }
`