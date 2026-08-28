

import { db } from "./firebase.js"

import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js"

const showsRef = collection(db, "shows")

function getStatus(date){
  let today = new Date().toISOString().split("T")[0]

  if(date < today) return {text:"✅ Done! / Realizado", class:"realizado"}
  if(date === today) return {text:"🎤 Today / Show hoje", class:"hoje"}
  return {text:"⏳ Soon / Em breve", class:"futuro"}
}

window.addShow = async function(){

  let city = document.getElementById("city").value
  let country = document.getElementById("country").value
  let date = document.getElementById("date").value
  let venue = document.getElementById("venue").value

  if(!city || !country || !date || !venue){
    alert("Preencha todos os campos")
    return
  }

  await addDoc(showsRef,{
    city,
    country,
    date,
    venue
  })

  document.getElementById("city").value=""
  document.getElementById("country").value=""
  document.getElementById("date").value=""
  document.getElementById("venue").value=""
}

const q = query(showsRef, orderBy("date"))

onSnapshot(q,(snapshot)=>{

  let list = document.getElementById("tourList")
  list.innerHTML=""

  let shows = []

  snapshot.forEach(doc=>{
    shows.push(doc.data())
  })

  shows.forEach(show=>{
    

    let status = getStatus(show.date)

    let item = document.createElement("li")

    item.innerHTML = `
      <strong class="cityName">${show.city} - ${show.country}</strong><br>
      📅 ${show.date}<br>
      🏟 ${show.venue}<br>
      <span class="${status.class}">${status.text}</span>
    `
    
    list.appendChild(item)
  })

  updateCounter(shows)
  updateNextShow(shows)
})

function updateCounter(shows){
  document.getElementById("counter").innerText =
  "Total shows: " + shows.length
}

function updateNextShow(shows){

  let today = new Date().toISOString().split("T")[0]

  let next = shows.find(show => show.date >= today)

  if(!next){
    document.getElementById("nextShow").innerText = "Tour Ongoing 🎉"
    return
  }

  document.getElementById("nextShow").innerText =
  "🎤 Next show: " + next.city + " - " + next.country
}

document.getElementById("addBtn").addEventListener("click", addShow)



const map = L.map('map').setView([20,0],2)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution:'© OpenStreetMap'
}).addTo(map)