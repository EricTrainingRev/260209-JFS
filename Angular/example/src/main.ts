import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

/*
  bootstrapApplication is the entrypoint for your Angular application. It takes in two arguments:
  App -> this is the root component of your application
  appConfig -> this provides global configurations for your application
*/

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
