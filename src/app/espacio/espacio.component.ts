import { Component, OnInit } from '@angular/core';
import { ConexionesService } from '../conexiones.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-espacio',
  templateUrl: './espacio.component.html',
  styleUrls: ['./espacio.component.css']
})
export class EspacioComponent implements OnInit {
sala;
  constructor(protected conexionesService: ConexionesService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {


 this.conexionesService.getFinca('RYz6AHItbzMHLLJA3id7')
    .subscribe(
      (data) => { // Success
        this.sala = data
        this.sala = this.sala.Salas[params.get("id")];
      },
      (error) => {
        console.error(error);
      }
    );

        

        
    });
    

  }

}