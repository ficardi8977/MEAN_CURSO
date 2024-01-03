import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { producto } from 'src/app/models/producto/producto';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;
  titulo = "CREAR PRODUCTO";
  id: string | null;

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _productoService: ProductoService,
    private aRouter: ActivatedRoute
  ) {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.esEditar();
  }

  guardarProducto(){
    const PRODUCTO: producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value
    }
    if(this.id !==null){
      //es editar:
      this.modificarProducto(this.id,PRODUCTO);
    }else { 
      this.agregarProducto(PRODUCTO);
    }
  }

  agregarProducto(producto : producto) {

    this._productoService.postProducto(producto).subscribe(data => {
      this.toastr.success("Producto creado exitosamente!", "Producto registrado");
      this.router.navigate(['/']);
    }, error => {
      console.log(error)
    });
  }
  modificarProducto(id :string, producto : producto){

    if(this.id !== null){
      this._productoService.putProducto(this.id, producto).subscribe(data => {
        this.toastr.success("Producto creado exitosamente!", "Producto registrado");
        this.router.navigate(['/']);
      }, error => {
        console.log(error)
      });
    }
  }
  esEditar(){
    if(this.id !== null){
      this.titulo = 'EDITAR PRODUCTO';
      this._productoService.getProducto(this.id).subscribe(data => {
        this.productoForm.setValue({
          producto: data.nombre,
          categoria: data.categoria,
          ubicacion: data.ubicacion,
          precio: data.precio,
        })
      },error => {
        console.log(error)
      })
    }
  }
}
