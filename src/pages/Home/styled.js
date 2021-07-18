import styled from 'styled-components';

export const HomeContainer = styled.div`
    display:flex;
    flex-direction: column;
    aling-items: center;
    justify-content: center;
    heigth: 100vh;
`;

export const Content = styled.div`
    width: 100%;
    heigth: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: gray;
    

`

export const Input = styled.input`
    border: 1px solid #ddd;
    heigth: 1.5rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;
    &:focus,
    &:active {
        outline : none;
        box-shadow: none;
    }
`;
export const button = styled.button`
    heigth: 1.5rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0
    &:focus,
    &:active {
        outline : none;
        box-shadow: none;
    }

`
export const ErrorMSG =  styled.span`
    display: block;
    font-size: 1.5rem;
    color: #f00;
    font-weight: 777;
    margin-top: .2rem;
`
