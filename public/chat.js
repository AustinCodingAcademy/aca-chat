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
        <input type="text" id="input_message" value="">
        <button id="send" onclick="sendMessage()">Send</button>
        <div id="history"></div>
    `
    domBody.appendChild(newDiv);
}

let sendMessage = () => {
    let inputField = document.querySelector('#input_message');
    let bodyPost = {
        clientId: userId,
        text: inputField.value
    }
    let options = {
        method: 'POST',
        body: JSON.stringify(bodyPost),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch('/messages', options)
        .then(res => res.json())
        .then(data => console.log(JSON.stringify(data)))
        .catch(err => console.log(`Err: ${err}`))
    inputField.value = '';
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
            console.log(data);
            let messageThread = document.querySelector('#history');
            let domHolder = '';
            message.forEach(x => {
                domHolder += `
                <div>${x.clientId}: ${x.text}</div>
                `
            })
            messageThread.innerHTML = domHolder;
        })
}, 1000);
