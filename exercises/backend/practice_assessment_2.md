## Assessment 2: The Weather Sensor API

**Domain:** Recording temperature readings from various cities.

### Problem Statement

A weather station needs an API to record and retrieve temperature data points.

**Example Reading JSON:**

```json
{
  "id": 1,
  "cityName": "London",
  "region": "Europe",
  "latitude": 51.5074,
  "longitude": -0.1278,
  "temperature": 15.5,
  "timestamp": 1672531200000
}

```

### API Requirements

1. **POST `/weather`**:
* Creates a new weather record.
* Response: `201 Created`.


2. **GET `/weather`**:
* Returns all records.
* Optional Query Params: `cityName`.
* Optional Query Params: `region`.
* Response: `200 OK`.


3. **GET `/weather/<id>`**:
* Returns a record by ID.
* Response: `200 OK` or `404 Not Found`.


4. **DELETE/PUT/PATCH `/weather/<id>`**:
* Response: `405 Method Not Allowed`.



### Implementation Steps

1. **Setup**: Initialize a Spring Boot project with Web, JPA, and H2 dependencies.
2. **Model**: Create the entity with the fields specified above.
3. **Repository**: Create a repository extending `JpaRepository`.
4. **Service**: Implement the business logic. The search by city name or region should not care about case.
5. **Controller**: Map the endpoints and ensure the 405 status code is explicitly handled for prohibited methods.
6. **Setup**: Configure `application.properties` for an in-memory H2 database.
7. **DTO Pattern**: Use a Data Transfer Object (DTO) for the request body and map it to your Entity.
8. **Error Handling**: Create a Global Exception Handler or use `ResponseEntity` in the controller to manage the 405 and 404 responses.
9. **Validation**: Ensure that there is relevant validation handling to prevent values from being ones that are not following the business logic.
