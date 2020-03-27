const express = require('express');
const routes = require('./routes')
const cors = require('cors')
const { errors} = require('celebrate')

/*
    Métodos HTTP

    GET: Buscar/listar uma informação do back-end
    POST: Criar uma informação do back-end
    PUT: Alterar uma informação do back-end
    DELETE : Deletar uma informação do back-end
 */

 /**
  * Tipos de parametros
  * 
  * Query params: Parametros nomeados enviados na rota apos o simbolo de "?",
  *  servem pra filtros, paginaçoes 
  * Route params: Parametros para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  * 
*/

/**
 * SQL: MySQL, SQLite, PostgreSQL, Microsoft SQL server
 * NoSQL: MongoDB, CouchDB
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  * 
  */

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

module.exports = app