import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';


import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ConexionesService } from './conexiones.service';
import { FincasComponent } from './fincas/fincas.component';
import { EspaciosComponent } from './espacios/espacios.component';
import { EspacioComponent } from './espacio/espacio.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { AutenticarComponent } from './autenticar/autenticar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,ReactiveFormsModule,MatIconModule,
    RouterModule.forRoot([
      { path: '', component: AutenticarComponent },
      { path: 'inicio', component: FincasComponent },
      { path: 'espacios', component: EspaciosComponent },
      { path: 'new_espacio', component: EspacioComponent },
      { path: 'edit_espacio/:id', component: EspacioComponent },
      
    ])],
  declarations: [ AppComponent, FincasComponent, EspaciosComponent, EspacioComponent, CabeceraComponent, AutenticarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ConexionesService]
})
export class AppModule { }
