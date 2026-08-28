# 🌎 World Tour Planner

An interactive web application to plan and visualize world tour dates.
The project allows users to add shows with city, country, date, and venue, displaying them in a sorted list and on an interactive world map.


Each show is stored in Firebase Firestore, enabling real-time updates and synchronization.

✨ Features
➕ Add new tour dates
📅 Automatic date ordering
🎤 Display of the next show
⏳ Countdown to the next event
📍 Interactive world map with markers
🔢 Total number of scheduled shows
☁️ Real-time database using Firebase Firestore



## 🛠 Technologies

- HTML
- CSS
- JavaScript
- Firebase Firestore
- Leaflet.js
- OpenStreetMap


## 🗺 How it Works

The user adds a new show with:

- City
- Country
- Date
- Venue



## The application:

Retrieves the coordinates of the city
Saves the data in Firestore
Displays the show in the tour list
Adds a marker on the map

The system automatically:
Updates the total number of shows
Calculates the next show
Displays a countdown
