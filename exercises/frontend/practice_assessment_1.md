## Assessment 1: The Library Filter System

**Backend Base:** The Book Registry API (Filtering by Author/Genre).
**Frontend Goal:** Build a frontend to interact with the Library Book API

### Pre Steps

Populate the backend database with a collection of books to test your filtering and search logic.
Create a bash script to execute this:

`seed_books.sh`

```bash
#!/bin/bash

# Configuration
API_URL="http://localhost:8080/books"

echo "Starting book data seeding to $API_URL..."

# Array of book data: Title|Author|Genre|Pages|Year
books=(
  "The Great Gatsby|F. Scott Fitzgerald|Fiction|180|1925"
  "1984|George Orwell|Dystopian|328|1949"
  "Animal Farm|George Orwell|Dystopian|112|1945"
  "The Hobbit|J.R.R. Tolkien|Fantasy|310|1937"
  "Brave New World|Aldous Huxley|Dystopian|268|1932"
  "Moby Dick|Herman Melville|Classic|635|1851"
  "Sapiens|Yuval Noah Harari|Science|443|2011"
  "The Catcher in the Rye|J.D. Salinger|Fiction|234|1951"
)

for book_info in "${books[@]}"; do
  IFS="|" read -r title author genre pages year <<< "$book_info"

  echo "Posting: $title by $author..."

  curl --location "$API_URL" \
    --header 'Content-Type: application/json' \
    --data "{
        \"title\": \"$title\",
        \"author\": \"$author\",
        \"genre\": \"$genre\",
        \"pages\": $pages,
        \"publishedYear\": $year
    }"
  
  echo -e "\n Done."
done

echo "Seeding complete!"

```

1. **Start your backend** (Ensure the `/books` endpoint is ready).
2. **Run** `chmod +x seed_books.sh` in your terminal to make the script executable.
3. **Run** `./seed_books.sh` in your terminal.
4. **Verify** via the browser or Postman (`GET http://localhost:8080/books`).

### Requirement Steps

1. **Component Architecture:** 
    - Create a `BookGalleryComponent` to view a paginated view of all the books
    - A `SidebarComponent` for filters
    - A `BookListComponent` for results
    - A `BookSubmissionComponent` to create new books. 
2. **Filter Communication:**
  - **Genre Filter:** Clicking a genre should trigger an API call: `GET /books?genre=Fiction`.
  - **Author Filter:** Implement a "toggle" logic. Clicking the same author twice should clear the filter and call `GET /books`.
3. **Combined State:** If both an Author and a Genre are selected, the Angular service must construct the combined URL: `/books?genre=Fiction&author=Orwell`.
4. **Empty States:** If the Spring Boot API returns an empty list, display a message: "No books found matching these filters."