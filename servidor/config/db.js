const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env'});

const conectarDB = async ()=>{

    try {
        await mongoose.connect(process.env.DB_MONGO,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB conectada");
    } catch (error) {
        console.log(error);
        process.exit(1); // detenemos la app
    }
}

// esto es para exportar la funcion y que se pueda utilizar en otros lugares
module.exports = conectarDB;