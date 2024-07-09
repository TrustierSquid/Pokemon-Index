import express from 'express'
import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url';
import pokemonTypes from './json/pokemonTypes.json' with {type: 'json'}
import normalPokemon from '../json/normalPokemon.json' with {type: 'json'}

import dataRouter from './routes/dataRouter.js'

const app = express()
const port = 8000;
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// MIDDLEWARES
app.use(express.static("dist"))
app.use(express.static("imgs"))
app.use('/api', dataRouter)



// Important routes
app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
    console.time("getting request")
    console.log("request received at /")
    console.timeEnd("getting request")
})

app.get('/api/pokemonTypes', (req, res)=> {
    res.json(pokemonTypes)
    console.log('Request received at /api/pokemonTypes')
})

app.listen(port, ()=> {
    console.clear()
    console.log(`Server running on ${port}..`)
})

