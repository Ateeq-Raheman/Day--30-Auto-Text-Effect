const textel = document.getElementById("text")
const speedel = document.getElementById("speed")
const text = "Stress is A part Of Programming !"
let idx = 1
let speed = 1000

writetext()

function writetext() {
    textel.innerText = text.slice(0, idx)
    idx++
    if (idx > text.length) {
        idx = 1
    }
    setTimeout(writetext, speed)
}

speedel.addEventListener("input", (e) => speed = 200 / e.target.value)