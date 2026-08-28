# 🌎 World Tour Planner

An interactive web application to plan and visualize world tour dates.
The project allows users to add shows with city, country, date, and venue, displaying them in a sorted list and on an interactive world map.

![Page Top](https://github.com/alnsanches/tour-dates/blob/main/print1.png)

![Page Down](https://github.com/alnsanches/tour-dates/blob/main/print2.PNG)

🔴 Next Concert <br>
🟡 Concert Today <br>
🟢 Concert Done

Each show is stored in Firebase Firestore, enabling real-time updates and synchronization.

✨ Features <br>
➕ Add new tour dates <br>
📅 Automatic date ordering <br>
🎤 Display of the next show <br>
⏳ Countdown to the next event <br>
📍 Interactive world map with markers <br>
🔢 Total number of scheduled shows <br>
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
