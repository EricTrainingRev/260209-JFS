import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from "./components/first-component/first-component";
import { SecondComponent } from "./components/second-component/second-component";
import { Explore } from "./components/explore/explore";
import { Routing } from "./components/routing/routing";
import { Parent } from "./components/parent/parent";
import { ObservableExample } from "./components/observable-example/observable-example";
import { SubjectExample } from "./components/subject-example/subject-example";
import { Http } from "./components/http/http";
import { PokeParent } from './combined/parent/parent';

/*
  Components are the the core building blocks of all Angular applications. They contain the view data
  (think html content), styling, and functionality for all parts of your application. So when 
  talking about components you are talking about the following:
  class -> this contains the data for the component (fields and methods)
  html template -> this contains the html content of the element (what the user actually sees)
  css file -> any external styling can be stored here
*/


@Component({
  selector: 'app-root',
  imports: [PokeParent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('example');
}
