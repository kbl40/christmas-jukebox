const player = document.getElementById("player")

const btn1 = document.getElementById("white-xmas")
const btn2 = document.getElementById("rockin")
const btn3 = document.getElementById("jingle-bell")
const btn4 = document.getElementById("lookin")
const btn5 = document.getElementById("wonderful-time")

const btnList = [btn1, btn2, btn3, btn4, btn5]

function playSong(id) {
  // remove class from each button to clear those that are not playing
  btnList.forEach((btn) => btn.classList.remove("button-play"))
  
  // 
  source = `https://www.youtube.com/embed/${id}?autoplay=1`
  document.getElementById("player").setAttribute("src", source)
  console.log(event.srcElement.id)
  document.getElementById(event.srcElement.id).classList.toggle("button-play")
}