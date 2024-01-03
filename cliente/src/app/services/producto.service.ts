import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { producto } from '../models/producto/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url='http://localhost:4000/api/productos/'

  constructor(private http: HttpClient ) { }

  getProductos() : Observable<any>{
    return this.http.get(this.url);
  }
  deleteProducto(_idProducto: any) : Observable<any>{
    return this.http.delete(this.url + _idProducto );
  }
  postProducto(producto : producto) : Observable<any>{
    return this.http.post(this.url, producto);
  }
}
