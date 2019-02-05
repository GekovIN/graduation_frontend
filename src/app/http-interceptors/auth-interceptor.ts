import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

// Interceptor to add auth header to each request
//https://angular.io/guide/http#intercepting-requests-and-responses
//https://stackoverflow.com/questions/34464108/angular-set-headers-for-every-request/39866166
@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token');

    if (token == '' || token == undefined) {
      return next.handle(req);
    }

    const authReq = req.clone({ setHeaders: { Authorization: 'Basic ' +  token } });

    return next.handle(authReq);
  }

}
