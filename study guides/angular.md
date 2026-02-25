# Angular Quick Reference Notes

## Angular Overview

Angular is a robust, open-source framework designed to streamline the development of single-page web applications (SPAs). Built with TypeScript, Angular offers a modular, component-based architecture that encourages maintainable and scalable code.

Key benefits include:
- **Component-driven design:** Angular organizes applications into reusable, encapsulated components, making development and maintenance more efficient.
- **Powerful data binding:** The framework provides flexible mechanisms for connecting data between your application logic and user interface, reducing boilerplate and improving clarity.
- **Dependency injection:** Angular’s built-in DI system simplifies resource management and promotes loose coupling, making applications easier to test and extend.
- **Rich ecosystem:** Angular is supported by a vibrant community and a suite of official tools, including the Angular CLI, RxJS for reactive programming, and integrations for testing and deployment.
- **Consistent programming model:** Whether you’re building small widgets or large enterprise apps, Angular provides a unified approach to structure, configuration, and best practices.


---

## Angular Setup

Getting started with Angular is straightforward and requires just a few steps:

- **Install Node.js and npm:**  
  Node.js provides the runtime, and npm (Node Package Manager) is used to manage dependencies.
- **Install Angular CLI:**  
  Use `npm install -g @angular/cli` to install the official command-line interface globally. The CLI streamlines project creation, development, and deployment.
- **Create a new project:**  
  Run `ng new my-app` to scaffold a new Angular application with recommended settings and structure.
- **Run the application:**  
  Start the development server with `ng serve`. Your app will be available locally for testing and development.

The Angular CLI handles much of the configuration and setup for you, allowing you to focus on building features rather than managing build tools or dependencies. As your project grows, the CLI provides commands for generating components, services, modules, and more, keeping your workflow efficient and consistent.

---

## Angular CLI

The Angular Command Line Interface (CLI) is the central tool for managing Angular projects. It simplifies common development tasks and enforces best practices, allowing you to focus on building features rather than configuring build tools.

Key features include:
- **Project scaffolding:** Quickly create new applications with `ng new`, including recommended structure and configuration.
- **Development server:** Use `ng serve` to run a local server for rapid development and live reloading.
- **Production builds:** Compile and optimize your app for deployment with `ng build`.
- **Code generation:** Generate components, services, modules, and other building blocks using commands like `ng generate component my-comp`. Short forms (e.g., `ng g c`) are available for convenience.
- **Testing and linting:** Run unit tests (`ng test`), end-to-end tests (`ng e2e`), and code linting (`ng lint`) directly from the CLI.
- **Configuration management:** The CLI manages configuration files and dependencies, streamlining updates and maintenance.

Common commands:
- `ng new app-name` — Create a new project
- `ng serve` — Start the development server
- `ng build` — Build the app for production
- `ng generate component my-comp` — Generate a component
- `ng generate service my-svc` — Generate a service
- `ng generate module my-mod` — Generate a module

---

## Webpack

Webpack is the underlying module bundler that powers Angular’s build process. While most Angular developers interact with Webpack indirectly through the Angular CLI, understanding its role can help when troubleshooting or customizing advanced builds.

Key points:
- **Asset bundling:** Webpack combines JavaScript, CSS, images, and other assets into optimized bundles for efficient loading.
- **Performance features:** Supports code splitting, lazy loading, and tree shaking to reduce bundle size and improve app performance.
- **CLI integration:** The Angular CLI manages Webpack configuration automatically, so manual setup is rarely needed for typical projects.
- **Customization:** Advanced users can extend or replace default build behavior using custom builders defined in `angular.json`. (Note: `ng eject` is deprecated.)

### Builders

- **Definition:** Builders are tools that perform tasks such as building, serving, testing, and linting your application.
- **Configuration:** Set up in `angular.json` (e.g., `@angular-devkit/build-angular:browser`).
- **Extensibility:** You can use or create custom builders to tailor the build process to your project’s needs.

For most use cases, the CLI abstracts away Webpack details, letting you focus on application development while still benefiting from a powerful and flexible build system.

## Components

Components are the fundamental building blocks of Angular applications. Each component encapsulates a specific piece of functionality, combining logic, template, and styles into a cohesive unit.

Key aspects:
- **TypeScript class:** Contains the logic and state for the component.
- **HTML template:** Defines the view, using Angular’s template syntax to bind data and handle user interactions.
- **Optional CSS styles:** Scoped styles can be applied directly to the component for modular design.

**Lifecycle hooks:**  
Angular provides lifecycle hooks that allow you to tap into key moments of a component’s existence:
- `ngOnChanges`: Responds to changes in input properties.
- `ngOnInit`: Runs after the component is initialized.
- `ngDoCheck`: Custom change detection (use with care for performance).
- `ngAfterContentInit`: After external content is projected into the component.
- `ngAfterContentChecked`: After every check of projected content.
- `ngAfterViewInit`: After the component’s view (and child views) is initialized.
- `ngAfterViewChecked`: After every check of the component’s view.
- `ngOnDestroy`: Just before the component is destroyed (cleanup logic).

Components promote reusability, separation of concerns, and a clear structure for building scalable applications. By leveraging Angular’s component model, you can develop complex UIs as a collection of well-defined, maintainable parts.

## Templates

Templates define the visual structure and user interface of Angular components. By combining standard HTML with Angular’s template syntax, you can easily bind data, handle events, and control the DOM.

Key features:
- **Data binding:** Display dynamic values from your component using interpolation (`{{ value }}`).
- **Property binding:** Set element properties with `[prop]="value"` for dynamic updates.
- **Event binding:** Respond to user actions using `(event)="handler()"`.
- **Structural directives:** Control the layout and rendering of elements with directives like `*ngIf` and `*ngFor`.

Angular 17+ introduces a new block syntax for structural directives, making templates more readable and expressive:
```html
@if (isLoggedIn) { ... } @else { ... }
@for (item of items) { ... }
@switch (status) {
    @case ('active') { ... }
    @case ('pending') { ... }
    @default { ... }
}
```

## Component Styling

Angular provides flexible options for styling your components, allowing you to balance modularity and maintainability:

- **Inline styles:** Define styles directly in the component’s metadata using the `styles` property.
- **External styles:** Reference separate CSS or SCSS files with the `styleUrls` property for better organization.
- **Global styles:** Apply styles across the entire application using global stylesheets (e.g., `styles.css` or `styles.scss` in the project root).

### View Encapsulation

Angular supports different encapsulation strategies to control how styles are applied:
- **Emulated (default):** Styles are scoped to the component, preventing leakage to other components.
- **None:** Styles are global and affect all components.
- **ShadowDom:** Uses native Shadow DOM for true encapsulation (browser support required).

### CSS Inheritance

- Styles from parent components do not automatically inherit to child components when encapsulation is enabled.
- Use selectors like `:host` and `:host-context` to target the component host or context.
- Set encapsulation to None if you want styles to cascade globally.
- Global styles always apply, regardless of encapsulation.

By choosing the appropriate styling approach and encapsulation mode, you can ensure your Angular components remain visually consistent, maintainable, and isolated as needed.

## Modules

Modules in Angular help organize your application into cohesive blocks of functionality. Traditionally, NgModules group related components, directives, pipes, and services, making it easier to manage dependencies and enable features like lazy loading.

Key points:
- **NgModule decorator:** Used to declare and configure modules, specifying what components, directives, and pipes belong to the module, and which services are provided.
- **Feature organization:** Modules allow you to break your app into logical features, improving maintainability and scalability.
- **Lazy loading:** Modules can be loaded on demand, optimizing performance for large applications.
- **AppModule:** The root module that bootstraps classic Angular applications.

**Note:**  
With Angular 15 and newer, standalone components and services are now recommended for most new projects, reducing the need for NgModules. This simplifies configuration and streamlines development, but understanding modules remains important for working with legacy code.

## Dependency Injection

Dependency Injection (DI) is a core feature in Angular that promotes loose coupling and testability by providing components and services with their dependencies from an external source, rather than creating them directly.

Key points:
- **Service registration:** Services are registered with Angular’s DI system, either in modules or using the `@Injectable` decorator with `providedIn: 'root'` for global, tree-shakable services.
- **Constructor injection:** Dependencies are injected into classes via constructor parameters, e.g., `constructor(private svc: MyService) {}`.
- **Flexible scope:** Services can be provided at different levels (application-wide, feature module, or component), controlling their lifecycle and visibility.
- **Standalone support:** Standalone components and services (Angular 15+) use DI without requiring NgModules.

Benefits:
- **Decoupling:** Components and services depend on abstractions, not concrete implementations.
- **Testability:** Dependencies can be easily mocked or replaced in tests.
- **Maintainability:** Centralized management of dependencies simplifies configuration and future changes.

## Routing

Routing in Angular enables navigation between different views or components within a single-page application, providing a seamless user experience without full page reloads.

Key points:
- **Route configuration:** Define routes using `RouterModule.forRoot(routes)` for classic apps or `provideRouter(routes)` for standalone setups. Each route maps a URL path to a component, e.g., `{ path: 'home', component: HomeComponent }`.
- **Navigation:** Use the `<a routerLink="/home">` directive for declarative navigation in templates, or the `Router` service for programmatic navigation.
- **View rendering:** The `<router-outlet>` directive acts as a placeholder where routed components are displayed.
- **Standalone router API:** Angular 15+ supports routing without NgModules, simplifying setup for new projects.

Benefits:
- **Modular structure:** Organize your app into feature areas, each with its own routes.
- **Lazy loading:** Load feature modules or components on demand to optimize performance.
- **Route guards:** Protect routes with guard services for authentication, permissions, or unsaved changes.

## Route Guards

Route guards in Angular help protect routes by controlling access based on custom logic, such as authentication, permissions, or unsaved changes.

Key points:
- **Guard types:**  
  - `CanActivate`: Checks if a route can be activated.
  - `CanDeactivate`: Checks if navigation away from a route is allowed.
  - `CanLoad`: Controls whether a module can be loaded (useful for lazy loading).
  - `CanActivateChild`: Checks access to child routes.
  - `CanMatch`: Custom matching logic for routes.
- **Implementation:**  
  Guards are implemented as injectable classes that return a boolean, `UrlTree`, `Observable`, or `Promise`.
- **Usage:**  
  Add guards to route definitions, e.g., `{ path: 'admin', canActivate: [AdminGuard] }`.

Benefits:
- **Security:** Prevent unauthorized access to sensitive routes.
- **User experience:** Warn users about unsaved changes or incomplete actions before navigating away.
- **Flexibility:** Guards can be combined and reused across multiple routes.

## Directives

Directives in Angular extend the behavior of elements in your templates, enabling you to build dynamic and interactive user interfaces.

Key types:
- **Attribute directives:** Change the appearance or behavior of an element, component, or another directive. Examples include `ngClass` (add/remove CSS classes) and `ngStyle` (set styles dynamically).
- **Structural directives:** Alter the DOM layout by adding, removing, or manipulating elements. Common examples are `*ngIf`, `*ngFor`, and the new block syntax (`@if`, `@for`) introduced in Angular 17+.

Creating custom directives:
- Use the `@Directive()` decorator to define your own attribute or structural directives.
- Attribute directives typically implement logic in the directive class to respond to changes in input properties or host events.
- Structural directives manipulate the DOM by adding or removing elements based on custom logic.

Directives are a powerful way to encapsulate reusable behaviors and keep your templates clean and expressive, supporting both simple UI tweaks and complex dynamic layouts.

## Pipes

Pipes in Angular transform data for display in templates, making it easy to format values without cluttering your component logic.

Key points:
- **Built-in pipes:** Angular provides a variety of built-in pipes for common tasks, such as `date`, `uppercase`, `lowercase`, `currency`, and `async`.
- **Usage:** Apply a pipe in a template using the `|` character, e.g., `{{ value | date:'short' }}`.
- **Parameters:** Many pipes accept arguments for customization, e.g., `{{ price | currency:'USD' }}`.
- **Custom pipes:** Create your own pipes with the `@Pipe()` decorator to encapsulate reusable data transformations. 

## Data Binding

Data binding in Angular connects your component’s logic and data to the user interface, enabling dynamic and interactive applications.

Key types:
- **One-way binding:**
  - **Interpolation:** `{{ value }}` — Displays data from the component in the template.
  - **Property binding:** `[prop]="value"` — Sets element properties dynamically.
  - **Event binding:** `(event)="handler()"` — Responds to user actions and events.
- **Two-way binding:**
  - Combines property and event binding for seamless synchronization between the component and the view.
  - **Syntax:** `[(ngModel)]="value"` (requires `FormsModule` for template-driven forms).

Benefits:
- **Clarity:** Keeps templates declarative and easy to read.
- **Reactivity:** Ensures the UI stays in sync with your application state.
- **Flexibility:** Supports both simple and complex data flows, including custom events and advanced form handling.

Angular’s binding syntax makes it straightforward to build responsive, maintainable UIs that react to user input and application changes.

## Signals

Signals are reactive wrappers used for fine-grained state management and reactivity within components.

Key points:
- **Creation:** Define a signal with `signal(initialValue)`. Signals hold a value and notify dependents when updated.
- **Reading:** Access the current value by calling the signal as a function, e.g., `mySignal()`.
- **Updating:** Change the value with `mySignal.set(newValue)`.
- **Reactivity:** Signals automatically track dependencies and trigger updates in the view or other signals when their value changes.
- **Use cases:** Ideal for local component state, computed values, and scenarios where you want lightweight, synchronous reactivity without the overhead of RxJS.

Benefits:
- **Simplicity:** Easy to use and reason about, with minimal boilerplate.
- **Performance:** Enables highly efficient change detection and granular updates.
- **Integration:** Complements or replaces some use cases for RxJS/Observables, especially for local state.

Signals provide a modern, ergonomic approach to managing reactive state in Angular applications, making it easier to build responsive and maintainable UIs.

## Services

Services in Angular are singleton classes used to encapsulate business logic, data access, and shared state across your application.

Key points:
- **Singletons by default:** Services are typically provided at the root level (`providedIn: 'root'`), ensuring a single instance is shared throughout the app.
- **Dependency injection:** Inject services into components or other services via constructor parameters or the `inject` method (modern way) for easy access and testability.
- **Use cases:** Commonly used for API calls, state management, utility functions, and cross-component communication.
- **Configuration:** Create a service with the Angular CLI (`ng generate service my-svc`) and decorate with `@Injectable()`.

Benefits:
- **Separation of concerns:** Keeps components focused on presentation and delegates logic or data access to services.
- **Reusability:** Centralizes logic that can be shared across multiple parts of the application.
- **Testability:** Services are easy to mock and test in isolation.

## Pub Sub Design Pattern

The Publish-Subscribe (Pub/Sub) pattern enables decoupled communication between different parts of an Angular application, making it easier to scale and maintain complex systems.

Key concepts:
- **Publisher:** Emits events or data updates.
- **Subscriber:** Listens for and reacts to those events.
- **Loose coupling:** Publishers and subscribers are unaware of each other, promoting flexibility and modularity.

Common use cases in Angular:
- Communication between sibling or distant components.
- Cross-feature or cross-module messaging.
- Global event handling (e.g., notifications, user actions).

Implementation approaches:
- **RxJS Subjects:** The most common method. A Subject acts as both an Observable (for subscribers) and an Observer (for publishers). Typically, a shared service holds the Subject and is injected where needed.
- **EventEmitter:** Useful for parent-child or tightly coupled communication, but less flexible for broader application events.
- **Signals:** (Angular 16+) Can be used for fine-grained reactivity and state sharing.
- **Third-party libraries:** Such as NgRx, for large-scale state and event management.

Best practices:
- Always unsubscribe from Subjects/Observables to avoid memory leaks.
- Prefer Subjects for multi-cast scenarios, EventEmitter for single-cast.
- Use dedicated services as communication hubs to keep components clean and maintainable.

The Pub/Sub pattern is a powerful tool for building scalable, maintainable Angular applications, especially as your app grows in complexity.

## RxJS

RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using Observables, and is a core part of Angular’s approach to handling asynchronous operations and event streams.

Key points:
- **Observables:** Represent asynchronous data streams (e.g., HTTP requests, user input, timers) that can be subscribed to and composed.
- **Operators:** RxJS provides a rich set of operators (such as `map`, `filter`, `switchMap`, `mergeMap`, `debounceTime`, etc.) for transforming, filtering, and combining streams.
- **Subjects:** Special types of Observables that allow multicasting to multiple subscribers and are commonly used for event buses and pub/sub patterns.
- **Integration:** Angular uses RxJS for HTTP requests, forms, router events, and more.

Best practices:
- **Unsubscribe:** Always unsubscribe from Observables to prevent memory leaks. Use the `async` pipe in templates or operators like `takeUntil` in code.
- **Composition:** Use `pipe()` to chain operators and build complex data flows in a readable, declarative way.
- **Error handling:** Leverage operators like `catchError` to manage errors gracefully in your streams.

## Observables

Observables are a core concept in RxJS and Angular, representing asynchronous data streams that can emit multiple values over time.

Key points:
- **Creation:** Create observables using `new Observable()`, `of()`, `from()`, and other RxJS creation functions.
- **Subscription:** Consume observable data by subscribing with `obs$.subscribe(value => { ... })`.
- **Unsubscription:** Observables can be cancelled to prevent memory leaks; use the `unsubscribe()` method or the `async` pipe in templates for automatic management.
- **Operators:** Use RxJS operators to transform, filter, and combine observable streams.
- **Integration:** Angular’s HTTP client, forms, and router all use observables for handling async operations.

Benefits:
- **Flexibility:** Observables can represent events, HTTP responses, user input, and more.
- **Composability:** Easily combine and manipulate streams using RxJS operators.
- **Declarative:** Write clear, maintainable code for complex async workflows.

Observables are foundational for building reactive, event-driven Angular applications, enabling you to handle asynchronous data and events with ease.

## Subjects

Subjects are a special type of Observable in RxJS that act as both an observer and an observable, making them ideal for multicasting events or data to multiple subscribers.

Key points:
- **Multicasting:** Subjects allow you to emit values to many subscribers at once, unlike regular observables which are unicast.
	- **Unicast vs. Multicast:**  
		- *Unicast* observables deliver data to a single subscriber; each subscription creates an independent execution.  
		- *Multicast* (using Subjects) allows multiple subscribers to share the same data stream, so all receive the same emitted values.
- **Event bus:** Commonly used as an event bus or for shared state between components and services.
- **Types of Subjects:**
  - **Subject:** Basic subject, emits values to current subscribers.
  - **BehaviorSubject:** Holds the latest value and emits it immediately to new subscribers.
  - **ReplaySubject:** Replays a specified number of previous values to new subscribers.
  - **AsyncSubject:** Emits only the last value upon completion.

Usage pattern:
- Create a Subject in a shared service.
- Components or services can subscribe to receive updates or call `next()` to emit new values.

Benefits:
- **Flexible communication:** Enables decoupled, reactive communication across your application.
- **Integration:** Works seamlessly with Angular’s DI and RxJS operators.

Subjects are a powerful tool for implementing pub/sub patterns, shared state, and cross-component messaging in Angular applications.

## HttpClient

`HttpClient` is Angular’s built-in service for making HTTP requests to remote servers, supporting a wide range of operations and features.

Key points:
- **Import:** Add `HttpClientModule` to your app (or use `provideHttpClient()` for standalone projects).
- **Injection:** Inject `HttpClient` into your services or components to access HTTP methods.
- **Methods:** Supports `get<T>()`, `post<T>()`, `put<T>()`, `delete<T>()`, and more, all returning RxJS Observables.
- **Observables:** HTTP methods return Observables, allowing you to subscribe, use the `async` pipe, or compose with RxJS operators.
- **Interceptors:** Easily add cross-cutting concerns like authentication, logging, or error handling by registering HTTP interceptors.
- **Transformation:** Use RxJS operators to transform or filter responses as needed.
- **Unsubscribe:** Always unsubscribe from HTTP Observables or use the `async` pipe to avoid memory leaks.

Benefits:
- **Type safety:** Strongly typed requests and responses with TypeScript generics.
- **Testability:** Easy to mock and test HTTP interactions.
- **Extensibility:** Interceptors and RxJS integration provide powerful customization.

`HttpClient` is the recommended way to handle HTTP communication in Angular, supporting everything from simple REST calls to advanced request pipelines.

## Sharing Data Between Parent & Child Components

Angular provides several patterns for sharing data and events between parent and child components, supporting both simple and advanced communication needs.

### Parent to Child
- Use the `@Input()` decorator in the child component to receive data from the parent.
	```typescript
	// parent template: <child [data]="parentData"></child>
	@Input() data: any;
	```
- This enables the parent to pass values or objects directly to the child.

### Child to Parent
- Use the `@Output()` decorator and an `EventEmitter` in the child to emit events or data back to the parent.
	```typescript
	// child component
	@Output() notify = new EventEmitter<string>();
	// parent template: <child (notify)="onNotify($event)"></child>
	```
- This allows the child to notify the parent of actions or changes.

### Two-way Binding
- Combine `@Input()` and `@Output()` with the same property name to enable two-way binding.
- Use the `[(property)]` syntax in the parent template for seamless synchronization.

### ViewChild/ViewChildren
- Use `@ViewChild()` or `@ViewChildren()` in the parent to get a reference to child component instances, enabling direct method calls or property access.

### Service-Based Sharing
- For communication between distant or unrelated components, use a shared service with an RxJS Subject/BehaviorSubject or Signals.
- This approach decouples components and supports cross-feature or cross-module data sharing.

These patterns make it easy to build interactive, maintainable Angular applications with clear data flow and event handling between components.

## Karma

Karma is the default test runner for Angular unit tests, providing a fast and automated way to execute tests in real browsers.

Key points:
- **Real browser testing:** Runs your tests in actual browsers (Chrome, Firefox, etc.) for accurate results.
- **Integration:** Works seamlessly with Angular CLI and Jasmine for writing and running tests.
- **Configuration:** Controlled via the `karma.conf.js` file, where you can specify browsers, reporters, and other settings.
- **Continuous integration:** Supports running tests automatically on code changes and integrates with CI/CD pipelines.

Benefits:
- **Immediate feedback:** See test results as you develop, helping catch issues early.
- **Flexibility:** Easily switch browsers or customize the test environment.
- **Automation:** Enables reliable, repeatable testing as part of your development workflow.

Karma helps ensure your Angular applications are robust and maintainable by making automated testing simple and effective.

## Jasmine

Jasmine is a behavior-driven development (BDD) testing framework used for writing unit tests in Angular applications.

Key points:
- **Test structure:** Organize tests using `describe` blocks for grouping and `it` blocks for individual test cases.
- **Assertions:** Use `expect` statements to define expected outcomes.
- **Setup/teardown:** Use `beforeEach` and `afterEach` for test setup and cleanup.
- **Integration:** Works seamlessly with Angular CLI and Karma for running tests in real browsers.

Example:
```typescript
describe('MyComponent', () => {
  it('should do something', () => {
    expect(true).toBe(true);
  });
});
```

Benefits:
- **Readable tests:** BDD syntax makes tests easy to read and understand.
- **Mocking:** Built-in support for spies and mocks to isolate units of code.
- **Community:** Widely used and well-documented, with strong Angular integration.

Jasmine helps ensure your Angular code is reliable, maintainable, and well-tested, supporting a robust development workflow.