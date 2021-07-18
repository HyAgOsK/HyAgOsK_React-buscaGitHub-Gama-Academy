//import { styles } from 'ansi-colors';
//import { list } from 'postcss';
import styled from 'styled-components';

// PARA ESTILIZA UM COMPONTNETNE
import { Link } from 'react-router-dom';
//constantes e exportarmos elas para serem acessadas

export const Title = styled.h1`
    text-align: center;
    font-size: 2.1rem;
    font-family: sans-serif;
    color: #c71585;
    margin-botton: 4px;
    padding-color: purple;
    
`
export const Container = styled.div`
    width:100%;
    max-width: 991px;
    margin: 0 auto;
    

`
// template stream para colocar CSS tag h1

export const List = styled.ul`
    list-style: none;
    padding: .5rem;
    margin: none;
    font-family:sans-serif;
    


`;

export const ListItem = styled.li`
    margin:  .5rem;
    background: #000;
    color: #0f0;
    padding: .5rem;
    
    
`;
//ACIMA CHAMEI APENAS HTML
//

export const LinkHome = styled(Link)`
    display: block
    width: .9rem;
    text-aling: center;
    margin: none;
    margin-left: none;
    margin-rigth: none;
    background-color: #0f0;
    padding: .10rem 29rem;
    color: #000;
    text-decoration: none;
`;