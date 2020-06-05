import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { ConexionesService } from './conexiones.service';
import { FincasComponent } from './fincas/fincas.component';
import { EspaciosComponent } from './espacios/espacios.component';
import { EspacioComponent } from './espacio/espacio.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,ReactiveFormsModule,FontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: FincasComponent },
      { path: 'espacios', component: EspaciosComponent },
      { path: 'new_espacio', component: EspacioComponent },
      { path: 'edit_espacio/:id', component: EspacioComponent },
      
    ])],
  declarations: [ AppComponent, FincasComponent, EspaciosComponent, EspacioComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ConexionesService]
})
export class AppModule { }
