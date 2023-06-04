import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: white;
    margin-bottom: 10px;
    box-shadow: 0 0 5px #ddd;
`;

export const Header = styled.header`
    font-size: 20px;
    padding: 20px;
    margin: 0px;
    border-bottom: 1px solid #ddd;
    display: grid;
    grid-template-columns: 1fr 350px;

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
}
`;

export const Title = styled.h3`
     margin: 0px;
`;

export const StyledBody = styled.div`
    padding: 20px;
`;