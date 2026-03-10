## Assessment 1: The Library Book Registry

**Domain:** Managing a digital catalog of books.

### Problem Statement

Build a REST API to manage a collection of book records. Each book has a title, author, genre, pages, and publication year.

**Example Book JSON:**

```json
{
  "id": 1,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Fiction",
  "pages": 180,
  "publishedYear": 1925
}

```

### API Requirements

1. **POST `/books`**:
* Creates a new book.
* Assigns a unique auto-incrementing ID starting from 1.
* Response: `201 Created` with the object.


2. **GET `/books`**:
* Returns all books ordered by ID.
* Optional Query Params: `author` and `genre` (e.g., `/books?genre=Fiction&author=Orwell`).
* Response: `200 OK`.


3. **GET `/books/<id>`**:
* Returns a specific book.
* Response: `200 OK` or `404 Not Found`.


4. **DELETE/PUT/PATCH `/books/<id>`**:
* Response: `405 Method Not Allowed`.



### Implementation Steps

1. **Setup**: Initialize a Spring Boot project with Web, JPA, and H2 dependencies.
2. **Model**: Create the entity with the fields specified above.
3. **Repository**: Create a repository extending `JpaRepository`.
4. **Service**: Implement logic to handle "find all" with filtering logic.
5. **Controller**: Map the endpoints and ensure the 405 status code is explicitly handled for prohibited methods.
6. **Setup**: Configure `application.properties` for an in-memory H2 database.
7. **DTO Pattern**: Use a Data Transfer Object (DTO) for the request body and map it to your Entity.
8. **Error Handling**: Create a Global Exception Handler or use `ResponseEntity` in the controller to manage the 405 and 404 responses.
9. **Validation**: Ensure that there is relevant validation handling to prevent values from being ones that are not following the business logic.
