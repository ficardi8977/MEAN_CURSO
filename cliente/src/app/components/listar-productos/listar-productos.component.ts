import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { producto } from 'src/app/models/producto/producto';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent {

  listaProductos : producto[] = []
  // inyectamos el producto service para poder llamar al backend
  constructor(private _productoService : ProductoService, private toastr: ToastrService){}

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

  eliminarProducto(id: any){
    this._productoService.deleteProducto(id).subscribe(data => {
      this.toastr.success('el producto fue eliminado con exitoso', 'producto eliminado');
      this.obtenerProductos();
    },error => {
      console.log(error)
    })
  }
}
