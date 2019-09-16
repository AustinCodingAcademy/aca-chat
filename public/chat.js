let clientId = 0;

window.onload = function() {
    fetch("http://localhost:8080/clients", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    })
    .then(res => res.text())
    .then(data => clientId = data)
}

function send() {
    let message = document.getElementById("text").value;
    let obj = {
        clientId: clientId,
        message: message
    }
    console.log("obj: " + JSON.stringify(obj));
    fetch("http://localhost:8080/messages", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(obj)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
}

setInterval(function(){ 
    let messagesDiv = document.getElementById('messages')
    let displayMsg = '';
    fetch('http://localhost:8080/messages')
        .then(response => response.json())
        .then(data => {
            data.map(m => {
            displayMsg += `<div>${m.message}</div>`
        })
        messagesDiv.innerHTML = displayMsg;
    }) 
}, 1000);