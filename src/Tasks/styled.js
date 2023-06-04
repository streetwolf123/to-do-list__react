import styled, { css } from "styled-components";

export const TasksList = styled.ul`
    list-style: none;
    margin: 0px;
    padding: 0px;
`;

export const Task = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    padding: 10px;
    align-items: center;
    border-bottom: 1px solid #ddd;

    ${({ hidden }) => hidden && css`
    display: none;
    `}
`;

export const TaskContent = styled.span`
     ${({ line }) => line && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    color: white;
    cursor: pointer;

    ${({ toggleDone }) => toggleDone && css`
        border: 0px;
        background-color: green;
        transition: 300ms;

        &:hover {
            background-color: rgb(7, 149, 7);
        }
        &:active {
            background-color: rgb(4, 66, 4);
        }
    `}

    ${({ remove }) => remove && css`
    border: 0px;
    background-color: red;
    transition: 300ms;

        &:hover {
            background-color: rgb(249, 98, 98);
        }
        &:active {
            background-color: rgb(159, 4, 4); 
        }
    `}

`;

export const I = styled.i`
    ${({done}) => !done && css`
        display: none;
    `}
`
