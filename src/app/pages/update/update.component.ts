import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/interfaces/serie';
import { BackService } from '../../services/back.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  id: number = 0;
  serie!: Serie;
  existe = false;
  constructor( private backService: BackService ) { }

  ngOnInit(): void {
  }

  async consultar(){
    const serie = await this.backService.consultar( this.id );
    if( serie.length !== 1 ){
      alert('La serie con el id ' + this.id + ' no existe. Intente de nuevo.');
      return;
    }

    this.serie = serie[0];
    this.existe = true;
  }

  actualizar(){
    this.backService.actualizar( this.id, this.serie.nombre, this.serie.anio, 
      this.serie.num_temp, this.serie.descripcion )
  }

}
