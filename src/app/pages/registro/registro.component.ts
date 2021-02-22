import { Component, OnInit } from '@angular/core';
import { BackService } from '../../services/back.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  nombre!: string;
  anio!: string;
  num_temp!: number;
  descripcion!: string;
  
  constructor( private backService: BackService ) { }

  ngOnInit(): void {
  }

  registrar(){
    this.backService.registrar( this.nombre, this.anio, this.num_temp, this.descripcion );
    this.nombre = ''; this.anio = ''; this.num_temp = 0; this.descripcion = '';
  }

  validar(){
    if( !this.nombre || !this.anio || !this.num_temp || !this.descripcion )
      return true

    return false
  }
}
