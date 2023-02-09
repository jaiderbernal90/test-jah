import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  @Output() requestEvent = new EventEmitter<string | any>();

  private serverURL: string = environment.serverUrl;

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };


  /*************************** Servicios CRUD para la BD ***************************/

  // Solicitud GET
  getRequest(path:string): Observable<string> {
    return this.http.get<string>(this.serverURL + path, this.httpOptions);
  }

  // Solicitud POST
  postRequest(path:string, info:any): Observable<string> {
    return this.http.post<string>(this.serverURL + path, info, this.httpOptions);
  }

  // Solicitud PUT
  putRequest(path:string, info:any): Observable<string> {
    return this.http.put<string>(this.serverURL + path, info, this.httpOptions);
  }
  

  // Solicitud DELETE
  deleteRequest(path:string): Observable<string> {
    return this.http.delete<string>(this.serverURL + path, this.httpOptions);
  }

}
