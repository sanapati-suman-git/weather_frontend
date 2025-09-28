# Weather Frontend

A simple and lightweight **weather website** built using **HTML, CSS, and JavaScript**.  
This project allows users to enter a city name and see the **current temperature** and **weather condition** (e.g., Sunny, Cloudy, Rainy) for that location using the **OpenWeather API**.

## Features

- Enter any city name to get real-time weather information.
- Displays:
  - 🌡️ Temperature in Celsius
  - ☁️ Weather condition (Sunny, Cloudy, Rainy, etc.)
- Simple and clean user interface
- Beginner-friendly project
- Error handling for invalid city names

## Inputs

- **City Name Input:**  
  - Text input field where the user types the name of the city.  
  - **Type:** String  
  - **Example:** `"New York"`, `"London"`, `"Tokyo"`  
  - **Validation:** Must not be empty; if invalid, an error message is displayed.

- **Search Button:**  
  - Button with `id="search"` triggers fetching and displaying weather information.

## How It Works

1. User enters a city name in the input field and clicks **Search**.
2. The app sends a request to the **OpenWeather API** with the city name and API key.
3. The API returns weather data, including:
   - City name
   - Temperature (in Celsius)
   - Weather condition (e.g., Sunny, Rainy, Cloudy)
4. The app displays the data in a styled UI container.
5. If the city is not found, an error message is shown.

## Error Handling

- If the city name is invalid or the API request fails, the app displays:  
  `"City not found. Please try again."`
- Handled using `try-catch` in JavaScript to prevent app crashes.

## Usage

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Enter the city name in the input box.
4. Click **Search** to see the weather information.

## API Setup

1. Sign up for a free account at [OpenWeather](https://openweathermap.org/api).
2. Get your **API key**.

## Demo (Weather App Screenshot)

<img width="723" height="698" alt="Weather App Screenshot" src="https://github.com/user-attachments/assets/8c4bd4de-416d-45a4-ad80-4caf44111d81" />

