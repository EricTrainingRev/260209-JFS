# What is Spring?
Spring is an Inversion of Control (IoC) framework that simplifies dependency management
at its core. We can utilize multiple configuration options to tell Spring how we want
to describe and initialize our dependencies. Beyond this, the Spring framework has 
multiple other "modules" that provide commonly needed core application functionality.
- Spring MVC: provides the ability to build web applications. It was initially designed 
for building web services following the Model View Control (MVC) design pattern, but it
can also be used for creating RESTful web services.
- Spring Data JPA: provides the ability to perform Object Relational Mapping so that our
application entities are mapped to our database tables
- Spring Actuator: Actuator exposes internal states and other useful monitoring tools
for us to track the health and metrics of our applications
- Spring Testing: Spring has significant capabilities for integrating
with commonly used testing tools, like Junit and Mockito

## IoC Container
Spring's IoC container is at the heart of the dependency management run by
Spring. Spring exposes two primary classes that can be leveraged as part
of your Spring applications to manage dependency injection
- BeanFactory: provides core functionality for interacting with Spring managed beans.
You will typically not interact with this resource directly
- ApplicationContext: this resource provides configurations options to tell Spring how
you want to manage your dependencies, and it also provides options for getting access to 
your Spring managed resources

When Spring creates your objects it defaults to the "scope" of singleton: this
means that there will only ever be 1 instance of your managed class that is created, and
Spring will pass it around where it is needed. You can configure Spring to put your
managed classes in the "prototype" scope, which tells Spring to create a new instance of
your class whenever it is used

## Dependency Injection
In order for Spring to provide dependencies to our managed objects (this is called dependency injection, or DI)
Spring needs to know the methodology to use. Spring has three options for injecting dependencies:
- field injection: this is equivalent to Spring referencing the field directly and setting the value. It is the least recommended option
- setter injection: this is the equivalent of Spring using a field's setter method to inject the value
- constructor injection: this is the equivalent of Spring passing the dependency to the constructor of the bean. Prefer this option when you can (it is the default option) 