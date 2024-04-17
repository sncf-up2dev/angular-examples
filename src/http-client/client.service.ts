import { HttpClient, HttpContext, HttpEvent, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable, map, tap } from 'rxjs';
import { PageService } from './page/page.service';
import { IS_LOGGING_ENABLED } from '../interceptors/context-token';

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

  pageService = inject(PageService)

  readonly baseUrl = environment.backUrl + "/clients"

  private _http = inject(HttpClient)

  postClient(client: PostClientBody): Observable<Client> {
    /* /!\ Ici, on suppose que le serveur renvoie un client avec un id de type number
      or si on utilise le json-server, il renvoie un id de type string
    */
    return this._http.post<Client>(this.baseUrl, client)
  }

  getPaginedClients(page: number = 1) {

    return this._http.get<Client[]>(this.baseUrl, {
      observe: 'response',
      params: new HttpParams().append('_page', page).append('_sort', 'firstname'),
      context: new HttpContext().set(IS_LOGGING_ENABLED, true)
    }).pipe(
      map(response => this.pageService.responseToPage(response))
    )
  }

}