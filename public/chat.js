let clientId = 0;

window.onload = function() {
    fetch("/clients", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    })
    .then(res => res.text())
    .then(data => clientId = data)
}

function sendMessage() {
    let message = document.getElementById("text").value;
    let obj = {
        clientId: clientId,
        text: message
    }
    fetch('/messages', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(obj)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    document.getElementById("text").innerHTML = "";
}

setInterval(function(){ 
    let messagesDiv = document.getElementById('messages')
    let displayMsg = '';
    fetch('/messages')
        .then(response => response.json())
        .then(data => {
            data.map(m => {
            displayMsg += `<div>${m.text}</div>`
        })
        messagesDiv.innerHTML = displayMsg;
    }) 
}, 1000);
