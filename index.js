const player = document.getElementById("player")

const btn1 = document.getElementById("white-xmas")
const btn2 = document.getElementById("rockin")
const btn3 = document.getElementById("jingle-bell")
const btn4 = document.getElementById("lookin")
const btn5 = document.getElementById("wonderful-time")

const btnList = [btn1, btn2, btn3, btn4, btn5]

document.addEventListener('click', function(e) {
  // data identification
  console.log(e.target.id)
  console.log(e.target)
  console.log(e.target.dataset.play)
  
  // botton class toggle setup
  btnList.forEach((btn) => btn.classList.remove("button-play"))
  
  const source = `https://www.youtube.com/embed/${e.target.dataset.play}?autoplay=1`
  console.log(source)

  document.getElementById("player").setAttribute("src", source)
  document.getElementById(e.target.id).classList.toggle("button-play")
})