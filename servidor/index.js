const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

//creamos el servidor
const app = express();

// conectamos a la base de datos
conectarDB();

// agregamos CORS para poder llamarlo desde front
app.use(cors());

// esta linea se agrega para que la aplicacion permita recibir request mediante json
app.use(express.json());

//ruteamos apis
app.use('/api/productos', require('./routes/producto'));

// levantamos servidor que escucha en puerto 4000
app.listen(4000,()=>{
    console.log('El servidor esta corriendo perfectamente');
})