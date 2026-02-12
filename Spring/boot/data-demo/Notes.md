# Spring Data JPA Notes
Spring Data is the Spring module that provides us with the power of Spring to manage
our database and our queries. This continues the IoC principle we have already seen
with tools like Spring Core and Spring Web. Spring Data itself is actually a collection
of tools all working together to streamline our entities, database tables, and queries:
- Spring Data -> this is our entrypoint for utilizing Spring to manage our database data
- Java Persistence API (JPA) -> this API provides standardized tools that can be used for managing
your data. That being said, the JPA library is more a collection of interfaces than implementation, so 
we need an engine to actually make use of the JPA library
- Hibernate -> Hibernate is an Object Relational Mapper (ORM) that can implement the JPA functionality.