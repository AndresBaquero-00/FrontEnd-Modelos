import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Serie } from '../interfaces/serie';

@Injectable({
  providedIn: 'root'
})
export class BackService {

  private link: string = 'http://localhost:3000/serie/';

  constructor( private http: HttpClient ) { }

  consultar( id?: number ): Promise<Serie[]>{
    return new Promise<Serie[]>( resolve => {
      if( id ){
        this.http.get( `${ this.link }consulta?id=${ id }` ).subscribe( ( data: any ) =>  {
          resolve( data.rows );
        });
      }else{
        this.http.get( `${ this.link }consulta` ).subscribe( ( data: any ) =>  {
          resolve( data.rows );
        });
      }
    })
  }

  actualizar( id: number, nombre: string, anio: string, num_temp: number, descripcion: string ){
    this.http.post(`${ this.link }update`, {
      id,
      nombre,
      anio,
      num_temp,
      descripcion
    }).subscribe( ( resp: any ) => {
      alert('Registro actualizado exitosamente.')
    })
  }

  registrar( nombre: string, anio: string, num_temp: number, descripcion: string ){
    this.http.post(`${ this.link }registro`, {
      nombre,
      anio,
      num_temp,
      descripcion
    }).subscribe( ( resp: any ) => {
      if( resp.ok )
        alert('Serie agregada exitosamente.')
      else
        alert('Ocurrió un error. Intente de nuevo.')
    })
  }

  borrar( id: number ){
    this.http.delete(`${ this.link }delete?id=${ id }`).subscribe( ( resp: any ) => {
      if( resp.ok )
        alert('Se eliminó la serie satisfactoriamente.')
      else
        alert('Ocurrió un error. Intente de nuevo.')
    });
  }
}
