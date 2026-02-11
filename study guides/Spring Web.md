# Spring Boot Web Reference Guide

## Spring MVC Overview

Spring MVC (Model-View-Controller) is a powerful web framework built on the core principles of Spring. It provides a clean separation of concerns by dividing web applications into three interconnected components:

- **Model:** Represents the application’s data and business logic.
- **View:** Handles the presentation layer, rendering the model data (e.g., as HTML, JSON).
- **Controller:** Processes incoming HTTP requests, interacts with the model, and selects the appropriate view for response.

Spring MVC streamlines web development by handling request routing, data binding, validation, and response rendering. It integrates seamlessly with other Spring modules and supports both traditional server-side rendering and RESTful APIs.

Key benefits include:
- **Flexible architecture:** Easily adapt to different web application styles (monolithic, REST, microservices).
- **Annotation-driven configuration:** Reduces boilerplate and keeps configuration close to the code.
- **Extensibility:** Customize request handling, data binding, and view resolution as needed.

Spring MVC is the foundation for building robust, maintainable web applications in the Spring ecosystem.

## Controllers

Controllers are the core components in Spring MVC responsible for handling HTTP requests and returning responses. Spring simplifies controller development through a set of powerful annotations:

- **@Controller:** Marks a class as a web controller, allowing Spring to detect and register it for request handling.
- **@RestController:** A specialized version of `@Controller` that combines `@Controller` and `@ResponseBody`, making it ideal for RESTful APIs by automatically serializing return values to JSON or XML.

Within controllers, you define handler methods that process specific requests. These methods are annotated to map URLs, extract parameters, and define response behavior. Controllers promote clean separation between request processing and business logic, making your codebase easier to test and maintain.

Best practices:
- Keep controllers focused on request handling and delegate business logic to service classes.
- Use clear, descriptive method names and annotations to improve readability.

## Exposing Endpoints

Spring MVC makes it straightforward to expose HTTP endpoints and handle various aspects of web requests and responses:

- **@RequestMapping:** The foundational annotation for mapping HTTP requests to handler methods. You can specify the URL path, HTTP method (GET, POST, etc.), and other attributes.
- **@GetMapping, @PostMapping, etc.:** Shortcut annotations for common HTTP methods, improving clarity and reducing boilerplate.
- **@ResponseBody:** Indicates that the return value of a method should be written directly to the HTTP response body (commonly used for REST APIs).
- **@RequestParam:** Binds HTTP request parameters (e.g., query parameters) to method arguments.
- **@PathVariable:** Extracts values from URI path segments and binds them to method parameters.
- **ResponseEntity:** A flexible way to build HTTP responses, allowing you to set status codes, headers, and body content explicitly.
- **Status Codes:** You can control HTTP status codes using `ResponseEntity`, the `@ResponseStatus` annotation, or by returning appropriate values from controller methods.

These features enable you to build expressive, well-structured APIs and web endpoints with minimal configuration.

## Exception Handling

Robust exception handling is essential for building reliable web applications. Spring MVC provides several mechanisms to manage errors gracefully:

- **@ExceptionHandler:** Annotate methods in your controller (or a dedicated `@ControllerAdvice` class) to handle specific exceptions and return custom responses.
- **@ControllerAdvice:** A global exception handler that applies to multiple controllers, centralizing error handling logic.
- **ResponseEntityExceptionHandler:** Extend this base class to customize the handling of standard Spring MVC exceptions.
- **Custom error responses:** Return meaningful error messages and appropriate HTTP status codes to clients, improving API usability.

By leveraging these tools, you can ensure consistent error handling across your application, provide helpful feedback to users, and maintain clean separation between error management and business logic.

