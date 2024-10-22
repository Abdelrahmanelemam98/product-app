import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './routes.routes';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { availabilityServerInterceptor } from './interceptor/avabiltyserver.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: HTTP_INTERCEPTORS,
      useValue: availabilityServerInterceptor,
      multi: true,
    },
  ],
};
