import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpEvent,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CheckserverService } from '../services/checkserver.service';

export const availabilityServerInterceptor: HttpInterceptorFn = (req, next) => {
  const checkServer = inject(CheckserverService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 404) {
        checkServer.setComponentAvailability(false);
      }

      return throwError(() => error);
    })
  );
};
