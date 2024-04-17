import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { COUNT } from '../context-token';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let count = req.context.get(COUNT)
    console.log(count)
    req.context.set(COUNT, count + 1)

    return next.handle(req)
  }
}
