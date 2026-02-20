import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

/*
  This config tells Angular what globally accessible resources need to be provided to all
  components of the application

  Modern Angular does not require as much global configuration as older versions, but there are
  still some settings you can provide here, a major one being the provideRouter(routes) option. This
  makes routing (what allows us to change the view of the page dynamically between components) possible
  in all components.
*/
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
