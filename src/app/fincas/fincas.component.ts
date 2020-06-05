import { Component, OnInit } from '@angular/core';
import { ConexionesService } from '../conexiones.service';

@Component({
  selector: 'app-fincas',
  templateUrl: './fincas.component.html',
  styleUrls: ['./fincas.component.css']
})
export class FincasComponent implements OnInit {

  finca:any;
  
  constructor(protected conexionesService: ConexionesService) { }

 
    ngOnInit() {
     this.conexionesService.getFinca('RYz6AHItbzMHLLJA3id7')
    .subscribe(
      (data) => { // Success
        this.finca = data;
        console.log(data)
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

