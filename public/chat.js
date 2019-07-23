window.onload () {
    fetch("http://localhost:8080/clients")
    .then(res=>res.text())
    .then(message=>console.log(message)
}

function send() {
    let go = document.getElementById("mess").value;
}