//TODO: figure out why the server returns error when send is clicked
//* I have a feeling this is due to Send POST and then interval is getting errored

let userId;

let fetchUserId = () => {
    let options = {
        method: 'POST',
    }
    fetch('/clients', options)
        .then(res => res.text())
        .then(data => {
            console.log(`User ID is ${data}`);
            userId = parseInt(data);
        })
        .catch(err => console.log(`Err: ${err}`))
}

let createDOM = () => {
    let domBody = document.querySelector('body');
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `
        <input type="text" id="input_message">
        <button id="send" onclick="sendMessage()">Send</button>
        <div id="history"></div>
    `
    domBody.appendChild(newDiv);
}

let sendMessage = () => {
    let message = document.querySelector('#input_message').value;
    let options = {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: {
            'clientId': userId,
            'text': message
        }
    }
    fetch('/messages', options)
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(`Err: ${err}`))
}

window.onload = () => {
    fetchUserId();
    createDOM();
}

setInterval(function() {
    fetch('/messages')
        .then(res => res.json())
        .then(data => {
            let message = data;
            let messageThread = document.querySelector('#history');
            let domHolder = '';
            message.forEach(x => {
                domHolder += `
                <div>${x.clientId}:</div>
                <div>${x.text}</div>
                <br>
                <br>
                `
            })
            messageThread.innerHTML = domHolder;
        })
}, 1000);
