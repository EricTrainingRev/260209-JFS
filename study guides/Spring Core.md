# Spring Core Reference Guide

## Spring Overview

Spring is a comprehensive framework designed to simplify Java enterprise application development. At its core, Spring promotes loose coupling through dependency injection and provides a consistent programming model across various application layers. The framework is modular, allowing developers to use only the components they need, such as data access, transaction management, or web applications.

Key benefits include:
- **Simplified configuration and integration:** Spring abstracts much of the boilerplate code required in traditional Java applications, making it easier to manage dependencies and configurations.
- **Testability:** By encouraging loosely coupled code, Spring makes unit and integration testing more straightforward.
- **Modularity:** You can pick and choose which parts of Spring to use, integrating with existing codebases or other frameworks as needed.
- **Community and ecosystem:** Spring has a large, active community and a rich ecosystem of projects that extend its capabilities (e.g., Spring Boot, Spring Data, Spring Security).

Spring’s core principles set the foundation for more advanced features and modules, which are covered in detail in the following sections.

## Inversion of Control

Inversion of Control (IoC) is a design principle where the control of object creation and dependency management is shifted away from application code to a container or framework. Instead of classes instantiating their own dependencies, they receive them from an external source, making the codebase more modular and easier to maintain.

In the context of Spring, IoC means that the framework is responsible for managing the lifecycle and configuration of application objects. This approach leads to:
- **Decoupling:** Classes are less dependent on concrete implementations, making them easier to test and modify.
- **Centralized configuration:** Object wiring and configuration are handled in one place (via XML, annotations, or Java config), improving clarity and flexibility.
- **Easier maintenance:** Changes to dependencies or object relationships can be made without altering business logic.

IoC is the foundation for many of Spring’s features, especially dependency injection.

## IoC Container

The IoC Container is the core component in Spring responsible for instantiating, configuring, and managing the lifecycle of application objects, known as beans. It reads configuration metadata (from XML, annotations, or Java code) to understand how to assemble application components and their dependencies.

Key points about the IoC Container:
- **Bean management:** The container creates and wires beans according to the configuration, handling their dependencies automatically.
- **Lifecycle handling:** It manages the full lifecycle of beans, including initialization and destruction callbacks.
- **Configuration sources:** The container can be configured using XML files, Java annotations, or Java-based configuration classes.

Spring provides two main types of IoC containers:
- **BeanFactory:** The simplest container, providing basic support for dependency injection. Suitable for lightweight scenarios. It is rarely used directly.
- **ApplicationContext:** A more feature-rich container, extending BeanFactory with support for internationalization, event propagation, and application-layer services. This is the most commonly used container in real-world Spring applications.

The IoC Container is the backbone of Spring, enabling the framework’s core features and supporting flexible, maintainable application architectures.

## Dependency Injection (Constructor, Setter, field)

Dependency Injection (DI) is a core pattern in Spring that enables objects to receive their dependencies from an external source rather than creating them directly. This approach leads to more modular, testable, and maintainable code.

Spring supports several types of dependency injection:

- **Constructor Injection:** Dependencies are provided as arguments to a class’s constructor. This is the preferred method for mandatory dependencies, as it ensures that required collaborators are available when the object is created. Constructor injection also makes classes easier to test and promotes immutability.

- **Setter Injection:** Dependencies are set through JavaBean-style setter methods after the object is constructed. This approach is useful for optional dependencies or when you want to allow for reconfiguration after instantiation.

- **Field Injection:** Dependencies are injected directly into fields using annotations (such as `@Autowired`). While concise, field injection is less explicit and can make testing and refactoring harder, so it’s generally recommended for simple cases or framework-managed beans.

Spring allows you to use these injection types interchangeably, depending on your design needs. The choice often depends on whether dependencies are required or optional, and your team’s coding standards.

DI is typically configured using annotations (like `@Autowired`), XML, or Java-based configuration, giving you flexibility in how you wire your application components.

## Spring Beans (scope, lifecycle)

In Spring, a *bean* is simply an object that is managed by the Spring IoC container. Beans are the backbone of a Spring application, and their configuration, instantiation, and lifecycle are all handled by the container.

**Bean Scopes:**  
Spring supports several bean scopes, which determine how and when bean instances are created:
- **Singleton (default):** Only one instance of the bean is created per Spring container. All requests for this bean return the same object.
- **Prototype:** A new instance is created every time the bean is requested from the container.
- **Request:** (Web only) A new bean instance is created for each HTTP request.
- **Session:** (Web only) A new bean instance is created for each HTTP session.
- **Application:** (Web only) A single bean instance is shared across the entire ServletContext.
- **Websocket:** (Web only) A single bean instance is created and shared for each WebSocket.

**Bean Lifecycle:**  
Spring manages the full lifecycle of beans, from instantiation to destruction:
- **Instantiation:** The container creates the bean instance.
- **Dependency Injection:** Dependencies are injected as configured.
- **Initialization:** Custom initialization logic can be run (e.g., via `@PostConstruct` or implementing `InitializingBean`).
- **Usage:** The bean is ready for use by the application.
- **Destruction:** Cleanup logic can be executed before the bean is removed from the container (e.g., via `@PreDestroy` or implementing `DisposableBean`).

You can customize bean lifecycle behavior using annotations, XML, or Java config.

## Stereotype annotations

Stereotype annotations in Spring are used to declare and categorize beans for automatic detection and registration by the IoC container. They help clarify the intended role of a class within the application architecture.

Common stereotype annotations include:
- **@Component:** The most generic stereotype, used to indicate that a class is a Spring-managed component.
- **@Service:** Specializes `@Component` for service-layer classes, typically containing business logic.
- **@Repository:** Specializes `@Component` for data access objects (DAOs). It also enables exception translation for database operations (Spring Data Specific).
- **@Controller:** Specializes `@Component` for web controllers in Spring MVC applications.

Using these annotations helps organize your codebase and enables Spring’s component scanning to automatically discover and register beans. While all these annotations functionally register beans, choosing the right one improves code readability and maintainability by signaling the class’s purpose.

## General Annotations

Spring provides a variety of general-purpose annotations to simplify configuration and enhance readability. Some of the most commonly used include:

- **@Autowired:** Automatically injects dependencies by type. Can be applied to constructors, setters, or fields.
- **@Qualifier:** Used alongside `@Autowired` to resolve ambiguity when multiple beans of the same type exist. Specifies which bean to inject.
- **@Value:** Injects values into fields from property files or environment variables.
- **@Primary:** Marks a bean as the default choice when multiple candidates are available for autowiring.
- **@PostConstruct / @PreDestroy:** Lifecycle annotations for running custom initialization or cleanup logic after dependency injection or before bean destruction.
- **@Bean:** Used in Java configuration classes to declare a bean definition explicitly.
- **@Configuration:** Marks a class as a source of bean definitions for the application context.
- **@Scope:** Specifies the scope of a bean (e.g., singleton, prototype).

These annotations help reduce boilerplate code and make Spring applications more declarative and maintainable.

## Component Scanning

Component scanning is a Spring feature that automatically detects and registers beans within the application context by scanning the classpath for classes annotated with stereotype annotations (like `@Component`, `@Service`, `@Repository`, and `@Controller`). This reduces manual bean registration and keeps configuration concise.

Key points about component scanning:
- **Automatic discovery:** Spring scans specified packages for annotated classes and registers them as beans.
- **Configuration:** You can enable component scanning using `@ComponentScan` in Java config or `<context:component-scan>` in XML. You can specify base packages to control where Spring looks for components.
- **Filtering:** Component scanning supports include/exclude filters, allowing you to fine-tune which classes are registered as beans.
- **Best practices:** Organize your codebase by logical layers (e.g., controllers, services, repositories) and use the appropriate stereotype annotations for clarity.

Component scanning streamlines bean management and helps maintain a clean, scalable project structure.

## Spring Configuration (xml, java, annotation)

Spring supports multiple ways to configure beans and application context, allowing you to choose the style that best fits your project:

- **XML-based Configuration:**  
  The traditional approach, where beans and their dependencies are defined in XML files (e.g., `applicationContext.xml`). This method is explicit and keeps configuration separate from code, but can become verbose for large projects.

- **Java-based Configuration:**  
  Uses `@Configuration` classes and `@Bean` methods to define beans programmatically in Java. This approach is type-safe, refactor-friendly, and leverages the full power of the Java language.

- **Annotation-based Configuration:**  
  Relies on annotations (such as `@Component`, `@Service`, `@Autowired`, etc.) directly in your classes to declare beans and inject dependencies. Combined with component scanning, this style minimizes configuration and keeps it close to the code it affects.

You can mix and match these configuration styles as needed. Most modern Spring projects favor Java and annotation-based configuration for their clarity and maintainability, but XML remains supported for legacy or integration scenarios.