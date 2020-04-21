var msg = document.getElementById("msg")

document.getElementById('form').addEventListener("submit",(e) => {
    e.preventDefault()
    var value = e.target.input.value
    msg.innerText = value
    value = ''
})