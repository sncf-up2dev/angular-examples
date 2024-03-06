import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  readonly baseUrl = "http://localhost:3000/articles"

  http = inject(HttpClient)

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.baseUrl)
  }

  getArticlesSorted(order: 'asc' | 'desc'): Observable<Article[]> {

    const httpParams = new HttpParams()
      .append('_sort', 'id')
      .append('_order', order)

    return this.http.get<Article[]>(this.baseUrl, {
      params: httpParams
    })



  }

}
