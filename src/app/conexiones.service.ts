import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ConexionesService {

  constructor(protected http: HttpClient) { }
 private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
   //   Authorization: "my-auth-token"
    })
  };

  getFinca(id){
    return this.http.get('https://us-central1-klok-reservas.cloudfunctions.net/api/finca/'+id, this.httpOptions);
  }
   postSala(finca){
    return this.http.post('https://us-central1-klok-reservas.cloudfunctions.net/api/test',finca, this.httpOptions);
  }
   putSala(finca){
    return this.http.put('https://us-central1-klok-reservas.cloudfunctions.net/api/test',finca, this.httpOptions);
  }
}