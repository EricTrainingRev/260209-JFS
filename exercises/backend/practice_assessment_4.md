## Assessment 4: The Smart Power Grid API

**Domain:** Monitoring electricity consumption across different city sectors.

### Problem Statement

A municipal power company needs an API to track electricity usage from smart meters to prevent grid overloads.

**Example Meter Reading JSON:**

```json
{
  "id": 1,
  "meterId": "MTR-9901",
  "sectorName": "Greenwich-Industrial",
  "usageKwh": 450.75,
  "voltage": 230,
  "status": "Active",
  "timestamp": 1672531200000
}

```

### Available Status
* `Active`
* `Maintenance`

### API Requirements

1. **POST `/meters`**:
* Records a new meter reading.
* Response: `201 Created`.


2. **GET `/meters`**:
* Returns all readings.
* Optional Query Params: `sectorName` (Case-insensitive).
* Optional Query Params: `status` (e.g., "Active" or "Maintenance").
* Response: `200 OK`.


3. **GET `/meters/<id>`**:
* Returns a specific reading.
* Response: `200 OK` or `404 Not Found`.


4. **DELETE/PUT/PATCH `/meters/<id>`**:
* **Response: `405 Method Not Allowed`.**



### Implementation Steps

1. **Project Setup**: Use Spring Initializr with **Web**, **JPA**, and **H2**.
2. **Entity Mapping**: Create the `MeterReading` entity.
3. **Repository Logic**: Extend `JpaRepository`. Add a method to find by `sectorName` and `status` simultaneously.
4. **Business Service**: Implement logic to calculate if a reading is considered a "Surge" (where ). *Note: This logic will be consumed by the frontend later.*

```java
// Surge Logic: Consumed by frontend/API later
    // Logic: A Surge is defined as usage > 400kWh OR voltage > 450V
    public boolean isSurge(MeterReading reading) {
        return reading.getUsageKwh() > 400 || reading.getVoltage() > 450;
    }
```

5. **Strict Controller**: For the specific methods not allowed, ensure the handler returns a custom message: `"Method not supported for utility records."`
6. **Data Validation**:
* `usageKwh` cannot be negative.
* `voltage` must be between 110 and 480.
* `meterId` must follow the structure `MTR-**`
* `status` must only allow `Active` or `Maintenance`
7. **DTOs**: Implement a `ReadingRequestDTO` to separate the API contract from the Database Schema.