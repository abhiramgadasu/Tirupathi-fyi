import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

// export const authInterceptor: HttpInterceptorFn = (req, next) => {
//   const token = sessionStorage.getItem('authToken');

//   if (token) {
//     const clonedRequest = req.clone({
//       setHeaders: {
//         Authorization: `Bearer ${token}`
//       }
//     });
//     return next(clonedRequest);
//   } else {
//     return next(req);
//   }
// };
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      const authRequest = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
      return next.handle(authRequest);
    }
    return next.handle(request);
  }
}


