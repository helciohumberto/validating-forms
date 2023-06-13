import React, { Component, Fragment } from 'react';
import './App.css';
import FormularioCadastro from '../src/Components/FormularioCadastro/FormularioCadastro';

import { Container, Typography } from '@mui/material';

class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="sm" >
        <Typography variant="h3" component="h1" align='center'>
        Formulário de cadastro
      </Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm}/>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados)
}

export default App;
