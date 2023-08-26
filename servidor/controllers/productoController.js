const Producto = require("../models/Producto");

exports.crearProducto = async (req, res) => {
    try {
        producto = new Producto(req.body);
        await producto.save();
        res.send(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductos = async (req, res) => {
    try {
Producto
        productos = await Producto.find();
        res.json(productos);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarProducto = async (req, res) => {
    try {
    
        const { nombre, categoria, ubicacion, precio } = req.body
    
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({ msg: 'No existe el producto'})
        }

        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        //metodo utilizado para actualizar en la base 1° id de la base(key), 2° objeto (value)
        producto = await Producto.findOneAndUpdate(
                                    { _id: req.params.id },
                                    producto, 
                                    { new : true } );

        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProducto = async (req, res) => {
    try {
       
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({ msg: 'No existe el producto'})
        }

        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.borrarProducto = async (req, res) => {
    try {
       
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({ msg: 'No existe el producto'})
        }

        //metodo utilizado para actualizar en la base 1° id de la base(key), 2° objeto (value)
        producto = await Producto.findOneAndRemove({ _id: req.params.id });
        
        res.json({msg:'Producto eliminado con exito'});
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}