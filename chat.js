let clientId = 0;


var clientId = 0;
window.onload = function(){
    fetch('/clients', {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
    })
    .then(response => response.text())
    .then(data => clientId = data)
}

function postInputTxt(){
   let text = document.getElementById('inputTxt').value;
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
}, 1000)