import { Routes } from '@angular/router';
import { OutletOne } from './components/outlet-one/outlet-one';
import { OutletTwo } from './components/outlet-two/outlet-two';
import { OutletThree } from './components/outlet-three/outlet-three';
import { OutletFour } from './components/outlet-four/outlet-four';
import { OutletFive } from './components/outlet-five/outlet-five';

export const routes: Routes = [
    /*
        The quickest and easiest way to set up your routing is to specify the "path" and
        "component" for your routes. Path relates to the actual url used for your page and
        component references the actual component you want rendered when the path is used
    */
    {path:"outletOne", component:OutletOne},
    {path:"outletTwo", component:OutletTwo},
    /*
        If you need to perform further routing inside of one of your components you simply
        add the route configuration to the children property
    */
    {path:"outletThree", component:OutletThree, children:[
        {path:"outletFour", component:OutletFour},
        {path:"outletFive", component:OutletFive}
    ]}
];
