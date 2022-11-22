import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

      let authRequest = request.clone();
      authRequest = request.clone({
        headers: request.headers.set("apikey", "xDr1b7J4CtStzpMjMkvJ8SYMWuqbEZGZ"),
        // headers: request.headers.set("apikey", "LTdkSuU7tVpS3KLVHEP4nPNQMNfHzUGE")        
      });
      /////////////////////////////////////
    return next.handle(authRequest);
  }

}
