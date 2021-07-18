//import logo from './logo.svg';
//import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function App(props) {
  const history = useHistory();
  // ESTADO --> const [usuario, setUsuario] = useState('Hyago')
  const [usuario,setUsuario] = useState('');
  const [ erro, setErro ] = useState(false);
  
  // funcao que lida com a pesquisa 
  function handlePesquisa(){
    // so pegamos o array mas usarmos storage __ armazenamento interno do navegador 
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    
        .then(response => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((repositories)=>{
          repositoriesName.push(repositories.name);
        })

        localStorage.setItem('repositoriesName',JSON.stringify(repositoriesName));
        setErro(false);
        history.push('/repositories');
        }).catch( err =>{
          setErro(true);
        });

  }
 
  
  return (
    <S.HomeContainer>
      <S.Content>
        <string><strong>{'Busque aqui pelo NOME de usuário DO GIT e veja os repositórios do mesmo  '}</strong></string>
        <S.Input className="usuarioInput" placeholder="Usuário" value={ usuario} onChange={ e => setUsuario(e.target.value)}/>
        <S.button type="button" onClick = { handlePesquisa }>PESQUISAR</S.button>
      </S.Content>
      { erro ? <S.ErrorMSG><strong>Pesquisa não encontrou o usuário no GITHUB, pesquise novamente :)</strong></S.ErrorMSG>: ''}
    </S.HomeContainer>
  );
}

export default App;
