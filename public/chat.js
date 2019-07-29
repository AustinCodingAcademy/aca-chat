let clientId = 0;

window.onload = function() {
    fetch("http://localhost:8080/clients", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    })
    .then(res => res.text())
    .then(data => clientId = data)
}

function sendTxt(){
    let text = document.getElementById('input').value;
    let obj = {
         clientId: clientId,
         text: text
     }
     console.log(obj);
    fetch('/messages', {
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(obj)
     })
     .then(response => response.json())
     .then(data => console.log(data))
     document.getElementById('input').value = "";
 }

 setInterval(function(){ 
    let messagesDiv = document.getElementById('messages');
    let displayMsg = '';
    let timestamp = Date().slice(4, 16) + " " + Date().slice(16, 28);
    fetch('/messages')
        .then(response => response.json())
        .then(data => {
            data.map(m => {
            displayMsg += `<div id='user${m.clientId}'>${m.text} <span id='time'>${timestamp}</span></div>`
        })
        messagesDiv.innerHTML = displayMsg;
    }) 
}, 1000);