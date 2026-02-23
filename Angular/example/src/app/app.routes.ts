import { Routes } from '@angular/router';
import { OutletOne } from './components/outlet-one/outlet-one';
import { OutletTwo } from './components/outlet-two/outlet-two';

export const routes: Routes = [
    /*
        The quickest and easiest way to set up your routing is to specify the "path" and
        "component" for your routes. Path relates to the actual url used for your page and
        component references the actual component you want rendered when the path is used
    */
    {path:"outletOne", component:OutletOne},
    {path:"outletTwo", component:OutletTwo}
];
