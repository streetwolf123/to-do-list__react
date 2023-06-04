
import styled, { css } from "styled-components"

export const SectionButtons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    border: 0px;
    transition: 200ms;
    color: rgb(13, 96, 129);
    background-color: white;
    font-family: 'lato', sans-serif;
    font-size: 17px;
    cursor: pointer;

    &:hover {
        color: rgb(15, 162, 198);
    };

    ${({ disabled }) => disabled && css`
    color: grey;
    `}

    @media(max-width: 767px) {
        flex-basis: 100%;
        padding: 10px;
        margin-top: 5px;
    }
`;