const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)

// Métodos HTTP:

// GET: Buscar/listar uma info no back
// POST: Criar uma info no back
// PUT: Alterar uma info no back
// DELETE: Deletar uma info no back

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o simbulo de ? e geralmente servem para filtros, paginação
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos 
 */




app.listen(3333)