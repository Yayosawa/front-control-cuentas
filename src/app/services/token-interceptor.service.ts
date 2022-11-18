import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {
  constructor(
    private authService: AuthService
  ){}

  intercept(req: any, next:any) {
    const tokenizeReq = req.clone({
      setHeaders:{
        Authorization: `Barer ${this.authService.getToken()}`
      }
    })

    return next.handle(tokenizeReq);
  }
}
