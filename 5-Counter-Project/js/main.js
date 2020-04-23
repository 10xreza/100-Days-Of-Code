const num = document.getElementById("number")
const btnAdd = document.getElementById("add")
const btnLow = document.getElementById("lower")
var counterNumb = 0


btnAdd.addEventListener("click",() => {
    counterNumb++;
    num.innerText = counterNumb

    if (counterNumb > 0) {
        num.style.color = "green"
    } else if (counterNumb < 0) {
        num.style.color = "red"
    } else if (counterNumb == 0) {
        num.style.color = "black"
    }
})

btnLow.addEventListener("click",() => {
    counterNumb--;
    num.innerText = counterNumb

    if (counterNumb > 0) {
        num.style.color = "green"
    } else if (counterNumb < 0) {
        num.style.color = "red"
    } else if (counterNumb == 0) {
        num.style.color = "black"
    }
})

if (counterNumb > 0) {
    num.style.color = "green"
} else if (counterNumb < 0) {
    num.style.color = "red"
}