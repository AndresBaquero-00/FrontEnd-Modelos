import { Component, OnInit } from '@angular/core';
import { BackService } from '../../services/back.service';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.scss']
})
export class BorrarComponent implements OnInit {

  id: number = 0;
  constructor( private backService: BackService ) { }

  ngOnInit(): void {
  }

  borrar(){
    this.backService.borrar( this.id );
  }

}
