import styled from "styled-components";

export const Main  = styled.div`

    width: 100%;
    height: fit-content;
    margin-bottom: 40px;
    background-color: #dadada;
`

export const Title  = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & p {
    font-family: 'Gotham Bold';
    font-size: 12px;
    margin: 20px 0px 20px 0px;
    }
`

export const Items  = styled.div`
    
    display: flex;
    flex-direction: row;
    padding: 0px 20px 0px 20px;
`

export const ItemsIcons  = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 12px;

    & img {
        width: 60px;
        height: 60px;
    }

    & p {
        font-size: 12px;
        font-family: 'Gotham Book';
    }
`