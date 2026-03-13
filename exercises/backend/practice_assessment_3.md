## Assessment 3: The Warehouse Shelf Monitor

**Domain:** Monitoring stock levels and shelf capacity across a distribution center.

### Problem Statement

A warehouse logistics team needs an API to track real-time stock levels transmitted by smart pallets.

**Example Inventory JSON:**

```json
{
  "id": 101,
  "shelfLocation": "A-102",
  "productName": "Wireless Mouse",
  "category": "Electronics",
  "stockLevel": 15,
  "capacity": 100,
  "lastUpdated": 1672531200000
}

```

### API Requirements

1. **POST `/inventory`**:
* Creates a new inventory record.
* Response: `201 Created`.


2. **GET `/inventory`**:
* Returns all inventory records.
* Optional Query Params: `productName`.
* Optional Query Params: `category`.
* Response: `200 OK`.


3. **GET `/inventory/<id>`**:
* Returns a specific record by ID.
* Response: `200 OK` or `404 Not Found`.


4. **DELETE/PUT/PATCH `/inventory/<id>`**:
* Response: `405 Method Not Allowed`.



### Implementation Steps

1. **Setup**: Initialize a Spring Boot project with **Web**, **Spring Data JPA**, and **H2 Database** dependencies.
2. **Model**: Create an entity with the fields specified above.
3. **Repository**: Create a repository extending `JpaRepository`. Add custom finders for `productName` and `category`.
4. **Service**: Implement logic to ensure searches are case-insensitive.
5. **Controller**: Map the endpoints. Use `@RequestMapping` or specific mapping annotations to explicitly return a `405 Method Not Allowed` for prohibited methods.
6. **Persistence**: Configure `application.properties` for an in-memory H2 database.
7. **DTO Pattern**: Map the incoming Request Body to a DTO before converting it to the Entity.
