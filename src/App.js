import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import React from 'react';
import Routes from './src/routes'

//<div> <span> <header> significado na web
//no react native pode voltar usar div pra tudo
//todos elementos tem display flex por padrao
//nao ha herança de estilo, cada componente deve conter sua estilização propria



export default function App() {
  return (
   <Routes />
  )
}

