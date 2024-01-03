import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { producto } from 'src/app/models/producto/producto';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent {

  listaProductos : producto[] = []
  // inyectamos el producto service para poder llamar al backend
  constructor(private _productoService : ProductoService){}

  ngOnInit(): void{
    this.obtenerProductos();
  }

  obtenerProductos(){
    this._productoService.getProductos().subscribe(data => {
      console.log(data);
      this.listaProductos = data;
    },error => {
      console.log(error)
    })
  }
}
