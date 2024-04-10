import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export type Client = {
  id: number,
  firstname: string,
  lastname: string,
  age: number
}

export type PostClientBody = {
  firstname: string,
  lastname: string,
  age: number
}

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  readonly baseUrl = environment.backUrl + "/clients"

  private _http = inject(HttpClient)

  postClient(client: PostClientBody): Observable<Client> {
    /* /!\ Ici, on suppose que le serveur renvoie un client avec un id de type number
      or si on utilise le json-server, il renvoie un id de type string
    */
    return this._http.post<Client>(this.baseUrl, client)
  }

  getClients(): Observable<HttpResponse<Client[]>> {
    return this._http.get<Client[]>(this.baseUrl, { observe: 'response' })
  }


}