## Assessment 5: The Fleet Command Center

**Backend Base:** The Micro-Mobility Fleet Manager.
**Frontend Goal:** A high-pressure dashboard for fleet operators to identify "at-risk" bikes.

### Pre-Steps

Use the script below to seed the database with bikes in various states of health.

`seed_fleet.sh`

```bash
#!/bin/bash

API_URL="http://localhost:8080/fleet"

echo "Deploying Fleet..."

# Data: ID|Model|Battery|Status|Lat|Long
bikes=(
  "BIKE-001|Cruiser-V2|95|AVAILABLE|34.05|-118.24"
  "BIKE-002|Cruiser-V2|8|OUT_OF_ORDER|34.06|-118.25"
  "BIKE-003|Speedster|45|RENTED|34.04|-118.26"
  "BIKE-004|Speedster|12|AVAILABLE|34.07|-118.23"
  "BIKE-005|Cruiser-V1|60|MAINTENANCE|34.08|-118.22"
  "BIKE-006|Cruiser-V2|5|MAINTENANCE|34.09|-118.21"
)

for b in "${bikes[@]}"; do
  IFS="|" read -r id model bat stat lat long <<< "$b"

  curl --location "$API_URL" \
    --header 'Content-Type: application/json' \
    --data "{
        \"id\": \"$id\",
        \"modelType\": \"$model\",
        \"batteryLevel\": $bat,
        \"status\": \"$stat\",
        \"latitude\": $lat,
        \"longitude\": $long
    }"
  echo -e "\nDeployed $id"
done

```

1. **Start your backend.**
2. **Execute:** `chmod +x seed_fleet.sh && ./seed_fleet.sh`.
3. **Verify:** Check `GET http://localhost:8080/fleet`.

### Requirement Steps

1. **The "Critical" Filter**: Create a "Show At-Risk Only" toggle. When active, it must filter the list locally (or via the `needsService` API) to show bikes requiring immediate attention.
2. **Battery Progress Bar**: Instead of a number, display a visual progress bar for each bike.
* **Green:** 50-100%
* **Yellow:** 20-49%
* **Red:** < 20%


3. **State Management Actions**:
* Each bike card should have an "Update Status" dropdown.
* Clicking this calls the `PATCH` endpoint.
* **UI:** If the backend returns a `403` (due to the low battery logic), the frontend must catch the error and display a modal/toast: "Operation Blocked: Bring bike to charging hub first."


4. **Calculated Range**: Create a computed property on the frontend: **Estimated Range**.
* Formula: `(battery % x 1.2 km)`.
* Display this prominently on the `FullDetail` view.


5. **Status Badges**: Use dynamic CSS classes to style statuses:
* `AVAILABLE`: Green pill.
* `RENTED`: Blue pill.
* `MAINTENANCE`: Orange pill.
* `OUT_OF_ORDER`: Red/Black pill.