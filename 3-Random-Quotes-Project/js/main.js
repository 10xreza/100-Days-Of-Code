const btn = document.querySelector("button")
const quotes = ["Kar kardan khoob ast","hamishe dars bekhanid","Inja iran ast","Inja mazandaran ast","JS Khoob ast"]
const pElement = document.getElementById("text")

btn.addEventListener("click", () => {
    pElement.textContent = ""
    const index = Math.floor(Math.random()*quotes.length)
    pElement.textContent += quotes[index]
})