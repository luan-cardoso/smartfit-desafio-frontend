import styled from "styled-components";

export const Main = styled.div`

    font-family: 'Gotham Light';
    font-size: 14px;
    border: 2px solid #cacaca;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 40px;
`

export const Clock = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 8px;

    & img {

    height: 20px;
    }

    & p {

    font-family: 'Gotham Light';
    font-size: 14px;
    color: #202020;
    }
`

export const Times = styled.div`

    display: flex;
    flex-direction: row;
    
    & label {

    display: flex;
    flex-direction: row;
    align-items: center;
    }
`

export const Closed = styled.div`

    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`


export const Buttons = styled.div`

    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 20px;
`