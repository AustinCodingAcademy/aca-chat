window.onload =()=>{
    loadUserId();
}

//variables that I use on this page
const API_URL = 'http://localhost:8080/clients';
const API_URLTWO = 'http://localhost:8080/messages';
let clientId = 0;


//fetch user id /clients POST
let loadUserId =()=>{
    let fetchInfo = {
        method: 'POST',
        //body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    }
    fetch(API_URL, fetchInfo)
    .then(res => res.text())
    .then(data=> console.log(`Your UserId is ${clientId = data}`))
    
};
//fetch /message POST
function sendChat(){
    let chatBox = document.getElementById("input");
    let bodyJson = {
        clientId: clientId,
        text: chatBox.value
    };
    let fetchChat = {
        method: 'POST',
        body: JSON.stringify(bodyJson),
        headers:{'Content-Type': 'application/json'}
    };
    fetch(API_URLTWO, fetchChat)
    .then(res => res.json())
    .then(data => console.log(data))
    chatBox.value = "";
    showMessages();
};
//fetch /message GET
function showMessages() {
    let messageDisplay = document.getElementById('messages');
    let message = "";
    fetch(API_URLTWO)
    .then(res => res.json())
    .then((data)=>{
        data.map((chat)=>{
           message += `
           <li>clientId: ${chat.clientId} Message: ${chat.text}</li>`
        });
        messageDisplay.innerHTML = message;
    })
};
setInterval(showMessages, 1000);