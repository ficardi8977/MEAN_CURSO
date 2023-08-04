const express = require('express');
const conectarDB = require('./config/db');

//creamos el servidor
const app = express();

// conectamos a la base de datos
conectarDB();

//definimos ruta principal
app.get('/',(req,res)=> {
    res.send('Hola Mundo');
})

app.listen(4000,()=>{
    console.log('El servidor esta corriendo perfectamente');
})