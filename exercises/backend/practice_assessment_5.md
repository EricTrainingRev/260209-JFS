## Assessment 5: The Micro-Mobility Fleet Manager

**Domain:** Managing a fleet of electric rental bikes across a city.

### Problem Statement

A bike-share startup needs an API to track bike locations, battery health, and rental status. This requires the server to "refuse" certain updates if they violate safety protocols.

**Example Bike JSON:**

```json
{
  "id": "BIKE-772",
  "modelType": "Cruiser-V2",
  "batteryLevel": 85,
  "status": "AVAILABLE",
  "latitude": 34.0522,
  "longitude": -118.2437,
  "lastServiceDate": "2025-12-01"
}

```

### Available Status
* `AVAILABLE`
* `RENTED`
* `MAINTENANCE`
* `OUT_OF_ORDER`

### API Requirements

1. **POST `/fleet`**:
* Registers a new bike.
* **Constraint:** A bike cannot be registered with a `batteryLevel` below 20%.
* Response: `201 Created` or `422 Unprocessable Entity`.


2. **GET `/fleet`**:
* Returns all bikes.
* Optional Query Param: `needsService` (Boolean). If true, return bikes where `batteryLevel < 15` OR `status` is "MAINTENANCE".
* Response: `200 OK`.


3. **PATCH `/fleet/<id>/status`**:
* Updates only the `status` (e.g., from `AVAILABLE` to `RENTED`).
* **Business Logic:** If a user tries to set status to `AVAILABLE` while `batteryLevel` is below 10%, the API must reject the update.
* Response: `200 OK` or `403 Forbidden` with a message: "Safety Protocol: Battery too low for deployment."


4. **DELETE `/fleet/<id>`**:
* Response: `204 No Content` or `404 Not Found`.



### Implementation Steps

1. **Logic Layer**: In your Service class, implement a "Safety Validator." This should not just be a simple JPA save; it needs to check the current state against the requested change.
2. **Custom Exceptions**: Create a `SafetyViolationException` and map it to `403 Forbidden` using `@ResponseStatus` or a Global Exception Handler.
3. **Data Filtering**: Implement a custom query in your Repository to handle the `needsService` logic using a `@Query` annotation (JPQL) to combine the battery and status checks.
4. **Validation**: Use 0 and 100 for the battery level max and min, and ensure the `status` only accepts specific String values (AVAILABLE, RENTED, MAINTENANCE, OUT_OF_ORDER).
5. **Partial Updates**: Use a DTO for the PATCH request that only contains the `status` field to avoid overwriting other data.
