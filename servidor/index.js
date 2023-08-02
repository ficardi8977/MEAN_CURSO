const express = require('express');

//creamos el servidor
const app = express();

//definimos ruta principal
app.get('/',(req,res)=> {
    res.send('Hola Mundo');
})

app.listen(4000,()=>{
    console.log('El servidor esta corriendo perfectamente');
})