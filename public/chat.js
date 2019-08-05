var clientId = 1;
window.onload = function () {
    fetch('/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => response.text())
        .then(data => clientId = data)
}
const inputField = document.getElementById('inputTxt');
function postInputTxt() {
    let text = inputField.value;
    let obj = {
        clientId: clientId,
        text: text
    }
    console.log(obj);
    fetch('/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    })
        .then(response => response.json())
        .then(data => console.log(data))
}

inputField.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        postInputTxt();
    }
});

setInterval(function () {
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