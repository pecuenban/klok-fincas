import { Component, OnInit } from '@angular/core';
import { ConexionesService } from '../conexiones.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-espacio',
  templateUrl: './espacio.component.html',
  styleUrls: ['./espacio.component.css']
})
export class EspacioComponent implements OnInit {
sala = {
  "Nombre":"",
"Capacidad":"",
"Tiempo":0,
"HoraIni":"",
"HoraFin":"",
"HoraIni2":"",
"HoraFin2":"",
};
editar = false;
finca;
  constructor(protected conexionesService: ConexionesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
        
        
            if (params.get("id") != null) {
this.editar = true;
 this.conexionesService.getFinca(localStorage.getItem("Finca"))
    .subscribe(
      (data) => { // Success
        this.finca = data
        this.sala = this.finca.Salas[params.get("id")];
        this.sala.Tiempo = this.sala.Tiempo/2;
      },
      (error) => {
        console.error(error);
      }
    );

            }

        
    });
    

  }

}