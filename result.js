let score_box=document.getElementById("score")
let play_btn=document.getElementById("play-again")
let home_btn=document.getElementById("home_return")
const bgm = new Audio('images/game end.mp3')
const phrase = document.getElementById('phrases')

let value = localStorage.getItem("score")
score_box.textContent = value;

var Phrases = [
  "Amazing!!",
  "Well played!",
  "Eureka!!!",
  "Bull's Eye!!",
  "Well done !!",
  "Congrats!!",
]

phrase.innerText =Phrases[Math.floor(Math.random() * 6)]

home_btn.onclick = () => {
  location.href="./index.html";
}


play_btn.onclick = () => {
    location.href="./game.html";
}


bgm.play()
bgm.volume = 0.2