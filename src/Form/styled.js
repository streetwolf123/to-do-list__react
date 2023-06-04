import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 2px solid rgba(78, 76, 76, 0.213);
`

export const Button = styled.button`
    padding: 10px;
    background-color: teal;
    color: white;
    border: none;
    transition: 180ms;
    cursor: pointer;

    &:hover {
        background-color: rgb(8, 175, 175);
        transform: scale(1.10);
    }
    &:active {
        background-color: rgb(5, 87, 87);
        transform: scale(1.05);
    }
`