## Assessment 2: The City Weather Portal

**Backend Base:** The Weather Sensor API (Search by City Name).
**Frontend Goal:** A search bar that fetches city data and displays visual "Weather Cards."

### Pre Steps

Populate the backend database with some relevant data to make the searching more practical.
Create a bash script to execute this:

`seed_weather.sh`

```bash
#!/bin/bash

# Configuration
API_URL="http://localhost:8080/weather"

echo "Starting weather data seeding to $API_URL..."

# Array of city data: Name|Region|Lat|Long|Temp
cities=(
  "London|Europe|51.5074|-0.1278|12.5"
  "New York|Americas|40.7128|-74.0060|22.3"
  "Tokyo|Asia|35.6895|139.6917|10.2"
  "Sydney|Oceania|-33.8688|151.2093|25.4"
  "Dallas|Americas|32.7767|-96.7970|31.0"
  "Oakland|Americas|37.8044|-122.2712|19.5"
  "Paris|Europe|48.8566|2.3522|9.0"
  "Dubai|Middle East|25.2048|55.2708|38.0"
  "Berlin|Europe|52.5200|13.4050|7.5"
  "Mumbai|Asia|19.0760|72.8777|30.1"
  "Rio de Janeiro|Americas|-22.9068|-43.1729|28.2"
  "Cairo|Africa|30.0444|31.2357|24.8"
  "Seoul|Asia|37.5665|126.9780|15.4"
  "Mexico City|Americas|19.4326|-99.1332|21.0"
  "Cape Town|Africa|-33.9249|18.4241|18.9"
  "Stockholm|Europe|59.3293|18.0686|3.0"
  "Singapore|Asia|1.3521|103.8198|28.5"
  "Nairobi|Africa|-1.2921|36.8219|23.5"
  "Buenos Aires|Americas|-34.6037|-58.3816|18.5"
  "Bangkok|Asia|13.7563|100.5018|33.7"
)

for city_info in "${cities[@]}"; do
  # Generating timestamp inside loop for precision
  TIMESTAMP=$(date +%s000) 
  IFS="|" read -r name region lat long temp <<< "$city_info"

  echo "Posting data for $name ($region)..."

  curl --location "$API_URL" \
    --header 'Content-Type: application/json' \
    --data "{
        \"cityName\": \"$name\",
        \"region\": \"$region\",
        \"latitude\": $lat,
        \"longitude\": $long,
        \"temperature\": $temp,
        \"timestamp\": $TIMESTAMP
    }"
  
  echo -e "\nDone."
done

echo "Seeding complete!"
```
1. **Start your backend** (Ensure the `/weather` endpoint is ready).
2. **Run** `chmod +x seed_weather.sh` in your terminal to make the script executable.
3. **Run** `./seed_weather.sh` in your terminal.
4. **Verify** via the browser or Postman (`GET http://localhost:8080/weather`).

### Requirement Steps

1. **Component Architecture:** 
    - A `SearchComponent` to search by city name or region.
    - A `WeatherDisplayComponent` to display the result of weather for a city and changeable between full detail and minimal detail.
      - Full detail - City name, region, latitude, longitude, temperature, and time.
      - Minimal detail - City name and temperature.
    - A `RegionGalleryComponent` to display the cities weather in the region with minimal detail.
2. **Search Integration:** Toggle a search between city or region. Bind an input field to a "Search" button. When clicked, call your Spring Boot endpoint.
  - If city is searched for, display the city in the `WeatherDisplayComponent` with full detail and other cities in the same region with minimal detail
  - If region is searched for, display all the cities in that region with minimal detail.
3. **Parsing Backend Data:** Your Spring Boot API returns a temperature integer. On your frontend, create a function that returns a CSS class:
  - If `temp < 15`, return `cold-theme` (blue background).
  - If `temp >= 15`, return `warm-theme` (orange background).
4. **Icon Logic:** Use a conditional check to show a sun icon or a snowflake icon based on the temperature value returned by your API.
5. **Error Handling:** If the Spring Boot API returns a `404 Not Found` (meaning the city doesn't exist in the DB), display a "City Not Recorded" alert.

