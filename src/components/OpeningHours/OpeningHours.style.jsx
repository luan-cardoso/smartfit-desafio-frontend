import styled from "styled-components";

export const Main = styled.div`

    border: 1px solid green;
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