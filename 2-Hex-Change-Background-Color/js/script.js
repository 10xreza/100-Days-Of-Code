const btn = document.getElementById("btn")
const body = document.querySelector("body")
const hexChar = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const hexText = document.getElementById("hexText")

btn.addEventListener("click", () => {
    let hex = "#"

    for (i = 0; i < 6 ; i++) {
        hex += hexChar[Math.floor(Math.random()*hexChar.length)]
    }

    hexText.textContent = hex 
    body.style.backgroundColor = hex
})