import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class JwtInterceptorService implements HttpInterceptor
{

  constructor() { }

  intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>
{

  // reading the current user from the request
  var currentUser = {token:""}
  if (sessionStorage.currentUser != null){

    currentUser = JSON.parse(sessionStorage.currentUser);

  } 

// requests are immutable after creation. Alternate option is to clone requests.

  request = request.clone({
    setHeaders:{
      Authorization : "Bearer " + currentUser.token
    }
  });

  // invokes the HttpInterceptor if ANY otherwise  invokes HTTP XHR Backend
  return next.handle(request);
}

}

