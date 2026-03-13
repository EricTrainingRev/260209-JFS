## Assessment 4: The Grid Health Dashboard

**Backend Base:** The Smart Power Grid API.
**Frontend Goal:** A monitoring hub that flags high-usage sectors and filters meter statuses.

### Pre-Steps

Use this script to populate the grid with diverse consumption data.

`seed_grid.sh`

```bash
#!/bin/bash

API_URL="http://localhost:8080/meters"

echo "Initializing Grid Data..."

# Data: MeterID|Sector|Usage|Voltage|Status
meters=(
  "MTR-1001|Residential-A|120.5|230|Active"
  "MTR-1002|Residential-A|650.2|228|Active"
  "MTR-2001|Industrial-Alpha|1200.0|440|Active"
  "MTR-2002|Industrial-Alpha|0.0|0|Maintenance"
  "MTR-3001|Commercial-B|340.8|230|Active"
  "MTR-1003|Residential-A|15.2|230|Active"
  "MTR-4001|Hospital-Main|890.5|230|Active"
  "MTR-2003|Industrial-Alpha|1150.0|445|Active"
)

for m in "${meters[@]}"; do
  TIMESTAMP=$(date +%s000) 
  IFS="|" read -r mid sector usage volt status <<< "$m"

  curl --location "$API_URL" \
    --header 'Content-Type: application/json' \
    --data "{
        \"meterId\": \"$mid\",
        \"sectorName\": \"$sector\",
        \"usageKwh\": $usage,
        \"voltage\": $volt,
        \"status\": \"$status\",
        \"timestamp\": $TIMESTAMP
    }"
  echo -e "\nRegistered $mid"
done

```

1. **Start your backend.**
2. **Execute:** `chmod +x seed_grid.sh && ./seed_grid.sh`.
3. **Verify:** Check `GET http://localhost:8080/meters`.

### Requirement Steps

1. **Dashboard Layout**:
    - **Control Panel**: A dropdown to filter by `Status` (All, Active, and Maintenance) and a text input for `Sector Name`.
    - **Grid Display**: Use a CSS Grid or Flexbox to show `MeterCards`.
2. **Component States**:
    - **Active Meter**: Shows all technical details.
    - **Maintenance Meter**: Greyed out, showing only the Meter ID and a "Service Required" label.

3. **Surge Detection Logic**:
    - If `usageKwh > 500` AND `sectorName` contains "Industrial", apply a `critical-surge` class (blinking red border).
    - If `usageKwh > 500` AND `sectorName` is "Residential", apply a `warning-surge` class (solid orange border).
4. **Dynamic Icons**:
    - Display a **Bolt** icon for active meters.
    - Display a **Wrench** icon for maintenance meters.
    - Display a **Fire** or **Alert** icon if a surge is detected.
5. **Data Formatting**:
    - Display the `timestamp` in a human-readable format (e.g., "Oct 24, 10:30 AM").
    - Round the `usageKwh` to the nearest whole number in the UI.
6. **Error Handling**: If a user searches for a sector that has no readings, show a "Sector Clear / No Meters Found" message.