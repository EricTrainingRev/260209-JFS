# Spring Boot Actuator Reference Guide

## Spring Boot Actuator Overview

Spring Boot Actuator is a powerful set of production-ready features that help you monitor and manage your Spring Boot applications. It provides a suite of built-in endpoints and tools that expose operational information about your application, making it easier to observe, troubleshoot, and maintain healthy systems in real time.

Key benefits include:
- **Operational insight:** Gain visibility into application health, metrics, environment properties, and more, all through simple HTTP or JMX endpoints.
- **Production readiness:** Actuator endpoints help you track application status, resource usage, and configuration, supporting smooth deployments and proactive maintenance.
- **Customizability:** You can easily enable, disable, or secure endpoints, and even create your own custom endpoints to expose application-specific information.
- **Integration:** Works seamlessly with monitoring tools and platforms (such as Prometheus, Grafana, or cloud dashboards), making it a natural fit for modern DevOps workflows.

Spring Boot Actuator is designed to be non-intrusive, requiring minimal configuration to get started.

## Actuator Endpoints

Actuator endpoints are the core feature of Spring Boot Actuator, providing access to a wide range of application information and management operations. Endpoints are typically exposed over HTTP (e.g., `/actuator/health`) or JMX, and can be enabled, disabled, or secured as needed.

Common actuator endpoints include:

- **/actuator/health:**  
  Reports the health status of your application, including checks for database connectivity, disk space, and custom health indicators. Useful for readiness and liveness probes in cloud environments.

- **/actuator/metrics:**  
  Exposes a variety of metrics such as memory usage, garbage collection, active threads, and custom application metrics. Integrates easily with monitoring systems for real-time insights.

- **/actuator/info:**  
  Displays arbitrary application information, such as build version, description, or custom metadata defined in your `application.properties` or `application.yml`.

- **/actuator/env:**  
  Shows details about the current environment, including configuration properties, environment variables, and command-line arguments. Helpful for debugging configuration issues.

- **/actuator/beans:**  
  Lists all Spring beans in the application context, along with their types and dependencies. Useful for understanding the internal wiring of your application.

- **/actuator/mappings:**  
  Displays a map of all HTTP request paths and the controllers or handlers that process them. Great for troubleshooting routing and endpoint exposure.

- **/actuator/loggers:**  
  Allows you to view and modify logging levels at runtime, making it easier to adjust log verbosity without restarting the application.

- **/actuator/threaddump:**  
  Provides a thread dump of the running JVM, which is invaluable for diagnosing deadlocks or performance bottlenecks.

### Customization and Security

- **Enabling/disabling endpoints:**  
  You can control which endpoints are available by configuring properties in `application.properties` or `application.yml`. For example, `management.endpoints.web.exposure.include=health,info` exposes only the health and info endpoints.

- **Securing endpoints:**  
  Actuator endpoints can be secured using Spring Security, ensuring that sensitive information is only accessible to authorized users.

- **Custom endpoints:**  
  You can define your own endpoints using the `@Endpoint` or `@RestControllerEndpoint` annotations to expose application-specific management features.

Spring Boot Actuator endpoints are a cornerstone of Spring application observability, helping you keep your applications healthy, secure, and easy to operate in any environment.