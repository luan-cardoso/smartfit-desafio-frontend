import styled from "styled-components";

export const Main = styled.div`

    width: 870px;
    margin: 0 auto;
`

export const CardStyled = styled.div`
    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
`

export const Card = styled.div`

    padding: 5px 15px 15px 15px;
    border-radius: 5px;
    background-color: #DADADA;
`

export const IsOpened = styled.p`

    font-size: 11px;
    font-family: 'Gotham Bold';
`

export const Title = styled.h3`

    font-size: 17px;
    font-family: 'Gotham Bold';
`

export const Address = styled.div`

    font-size: 12px;
    font-family: 'Gotham Book';
`

export const Icons = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;

    & img {
    height: 50px;
    margin-right: 8px;
    }
`

export const Schedule = styled.div`

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 0px;
    margin-top: 20px;

    line-height: 5px;
    
    & h4 {
        font-size: 14px;
        font-family: 'Gotham Bold'
    }

    & p {
        font-size: 14px;
        font-family: 'Gotham Book'
    }
`