import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-routing',
  imports: [RouterOutlet],
  templateUrl: './routing.html',
  styleUrl: './routing.css',
})
export class Routing {

  /*
    One way to utilize routing is to inject the Router service into your component. A quick and
    easy way to do this with a component is to do constructor injection. Set the field to private,
    give the field a name, and type hint it as the Router. Angular will inject the service when
    the component is created.

    In order to actually perform routing (think changing the components that are rendered) we need
    to set some routing configurations in the app.routes.ts file
  */
  constructor(private router: Router){}

  async displayOutletOne(){
    await this.router.navigate(["outletOne"]);
  }

  async displayOutletTwo(){
    await this.router.navigate(["outletTwo"])
  }

  async displayOutletThree(){
    await this.router.navigate(["outletThree"])
  }

}
