import { Injectable } from '@angular/core';

/*
  When we create a service Angular decorates the class with the @Injectable decorator: this makes
  the class a valid target for constructor injection and for injection via the inject function. If
  your class has this decorator it is a service
*/
@Injectable({
  providedIn: 'root',
})
export class Auth {

  private hasAccess = false;

  giveAccess(){
    this.hasAccess = true;
  }

  checkAccess(){
    return this.hasAccess;
  }
  
}
