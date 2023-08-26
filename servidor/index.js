const express = require('express');
const conectarDB = require('./config/db');

//creamos el servidor
const app = express();

// conectamos a la base de datos
conectarDB();

app.use('/api/productos', require('./routes/producto'));

app.listen(4000,()=>{
    console.log('El servidor esta corriendo perfectamente');
})