import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

// export const httpInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
//   console.log('hi');
//   console.log(req);

//   return next(req);

// };

@Injectable()
export class httpInterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Outgoing HTTP request', request);
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        console.log('Incoming HTTP response', event);
        console.log('Incoming HTTP response');
      })
    );
  }
}
