import { Component, OnInit } from '@angular/core';
import { ConexionesService } from '../conexiones.service';
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-espacios',
  templateUrl: './espacios.component.html',
  styleUrls: ['./espacios.component.css']
})
export class EspaciosComponent implements OnInit {

  finca:any;
  
  constructor(protected conexionesService: ConexionesService) { }

 faPen = faPen; 
 faTrash = faTrash;
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
  cambioEstado(elemento) {
    console.log(elemento.target);
    /*this.userService.estadoUsuario().subscribe(
      data => {
        if (data.success == -1) {
          elemento.target.checked = false;
        } else {
          elemento.target.checked = true;
        }
      },
      error => {
        console.error(error);
      }
    );*/
  }
}