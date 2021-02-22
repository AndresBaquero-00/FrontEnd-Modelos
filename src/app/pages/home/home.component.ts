import { Component, OnInit } from '@angular/core';
import { BackService } from '../../services/back.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Serie } from 'src/app/interfaces/serie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  encabezado = ['ID', 'Nombre', 'Año', 'Número de Temporadas'];
  series: Serie[] = [];
  serie!: Serie;
  
  constructor( private backService: BackService, private modalService: NgbModal ) { }

  async ngOnInit(){
    this.series = await this.backService.consultar();
  }

  mostrarSerie( content: any, serie: Serie ){
    this.serie = serie;
    this.modalService.open( content, { scrollable: true, size: 'lg' } )
  }
}
