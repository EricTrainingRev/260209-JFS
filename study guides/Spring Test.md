# Spring Test Reference Guide

## Spring Profiles for Test Environment

Spring Profiles allow you to define different configurations for various environments, such as development, testing, and production. For testing, you can activate a dedicated profile (e.g., `test`) to load test-specific beans, properties, or database settings.

- **@ActiveProfiles:** Use this annotation in your test classes to specify which profile(s) should be active during test execution.
- **application-test.properties:** Place environment-specific configuration in a profile-named properties file for automatic loading.
- **Conditional beans:** Use `@Profile("test")` on beans that should only be available in the test context.

Profiles help isolate test configurations, ensuring your tests run in a controlled, predictable environment.

## Unit Testing with Junit & Mockito

Spring integrates seamlessly with popular testing frameworks like JUnit and Mockito, making unit testing straightforward:

- **JUnit:** The standard framework for writing and running unit tests in Java. Annotate test classes with `@RunWith(SpringRunner.class)` or `@ExtendWith(SpringExtension.class)` for Spring support.
- **Mockito:** A powerful mocking library for simulating dependencies and verifying interactions. Use `@MockBean` to inject mocks into the Spring context.
- **@SpringBootTest:** Loads the full application context for integration-style tests; for pure unit tests, prefer lightweight context or no Spring context at all.

Best practices:
- Mock dependencies to isolate the unit under test.
- Use assertions to verify expected behavior.
- Keep unit tests fast and focused on a single class or method.

## Testing Database Interactions

Testing data access code is crucial for reliability. Spring provides several tools to help:

- **@DataJpaTest:** Loads only JPA components and configures an in-memory database for fast, isolated tests.
    - By default this will look for an H2 in-memory database
- **TestEntityManager:** A helper for interacting with the persistence context in tests.
- **Transactional tests:** By default, tests annotated with `@Transactional` will roll back changes after each test, keeping the database clean.
- **@Sql:** Run SQL scripts before or after tests to set up or clean up data.

These features make it easy to write repeatable, reliable tests for your repositories and data access logic.

## Testing APIs with MockMVC & REST Template

Spring offers robust tools for testing web layers and APIs:

- **MockMvc:** Allows you to test Spring MVC controllers without starting a full HTTP server. You can perform requests, assert responses, and verify controller logic in isolation.
  - Use `@WebMvcTest` to load only the web layer for focused controller tests.
  - Build requests and assertions fluently with the MockMvc API.
- **TestRestTemplate:** Useful for integration tests that start the application and make real HTTP calls against endpoints.
  - Typically used with `@SpringBootTest(webEnvironment = ...)` for end-to-end API testing.

These tools help ensure your web endpoints behave as expected, both in isolation and as part of the full application.