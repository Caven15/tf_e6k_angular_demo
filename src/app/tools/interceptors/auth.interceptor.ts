import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const token = localStorage.getItem('access_token')

    console.log("Ja passe dans l'intercepteur !");

    const authReq = token ? req.clone({
        setHeaders : {Authorization : `Bearer ${token}`}
    }) : req

    return next(authReq)
};