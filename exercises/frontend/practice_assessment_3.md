## Assessment 3: The Warehouse Dashboard

**Backend Base:** The Warehouse Shelf Monitor (Search by Product Name).
**Frontend Goal:** A dashboard to monitor stock health and shelf distribution.

### Pre-Steps

Populate the backend database using the following script.

`seed_inventory.sh`

```bash
#!/bin/bash

API_URL="http://localhost:8080/inventory"

echo "Seeding warehouse data to $API_URL..."

# Data: ProductName|Category|Shelf|Stock|Capacity
items=(
  "Wireless Mouse|Electronics|A-102|15|100"
  "Mechanical Keyboard|Electronics|A-102|5|50"
  "Office Chair|Furniture|B-201|45|50"
  "Desk Lamp|Electronics|A-105|80|100"
  "USB-C Cable|Electronics|A-102|200|250"
  "Standing Desk|Furniture|B-205|2|10"
  "Water Bottle|Lifestyle|C-301|50|50"
  "Yoga Mat|Fitness|C-305|12|40"
  "Monitor Stand|Electronics|A-105|3|20"
  "Coffee Mug|Lifestyle|C-301|25|100"
)

for item_info in "${items[@]}"; do
  TIMESTAMP=$(date +%s000) 
  IFS="|" read -r name cat shelf stock cap <<< "$item_info"

  echo "Seeding $name..."

  curl --location "$API_URL" \
    --header 'Content-Type: application/json' \
    --data "{
        \"productName\": \"$name\",
        \"category\": \"$cat\",
        \"shelfLocation\": \"$shelf\",
        \"stockLevel\": $stock,
        \"capacity\": $cap,
        \"lastUpdated\": $TIMESTAMP
    }"
  
  echo -e "\n"
done

echo "Seeding complete!"

```

1. **Start your backend.**
2. **Execute:** `chmod +x seed_inventory.sh && ./seed_inventory.sh`.
3. **Verify:** Check `GET http://localhost:8080/inventory`.

### Requirement Steps

1. **Component Architecture:**
    - `InventorySearch`: A search bar with a toggle to switch between "Product Name" and "Category."
    - `InventoryCard`:
        - **Full Detail**: Displays Product Name, Category, Shelf, Stock/Capacity ratio, and Last Updated.
        - **Minimal Detail**: Displays Product Name and Stock Level.
    - `ShelfOverview`: A container that lists all items within a specific category using the Minimal Detail view.
2. **Search Logic:**
    -  If a **Product Name** is searched: Show the specific item in Full Detail. Below it, show all other items in the same **Category** in Minimal Detail.
    -  If a **Category** is searched: Display all items in that category in Minimal Detail.
3. **Dynamic Styling:** Create a function that calculates the stock percentage ().
    - If percentage `< 20%`, apply `low-stock-theme` (Red border/text).
    - If percentage `100%`, apply `full-stock-theme` (Green background).
4. **Icon Logic:**
    - Display a **Warning Triangle** icon if stock is below 20%.
    - Display a **Box** icon if stock is healthy.
5. **Error Handling:** If the API returns a `404`, display a notification: "Product/Category not found in warehouse records."