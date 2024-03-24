import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { httpInterceptorInterceptor } from './http-interceptor.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    // provideHttpClient(withInterceptors([httpInterceptorInterceptor])),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: httpInterceptorInterceptor,
      multi: true,
    },
  ],
};
