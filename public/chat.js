window.onload =()=>{
    loadUserId();
}

//variables that I use on this page
const API_URL = 'http://localhost:8080/clients';
const API_URLTWO = 'http://localhost:8080/messages';
let userId = 0;


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
    .then(data=> console.log(`Your UserId is ${userId = data}`))
    // .then (data => console.log(`${data}`))
    //     useriD = Number(this.data);
    
};
//fetch /message POST
function sendChat(){
    let chatBox = document.getElementById("input");
    let bodyJson = {
        clientId: userId,
        text: chatBox.value
    };
    let fetchChat = {
        method: 'POST',
        body: JSON.stringify(bodyJson),
        hearders:{'Content-Type': 'application/json'}
    };
    fetch(API_URLTWO, fetchChat)
    .then(res => res.json())
    .then(data => console.log(data))
    chatBox.value = "";
};
//fetch /message GET
let messageDisplay = document.getElementById('messages');
function showMessages() {
    fetch(API_URLTWO)
    .then(res => res.json())
    .then((data)=>{
        let message = 
        data.map((chat)=>{
           message += `
           <div>clientId: ${chat.userId} Message: ${chat.text}</div>`
        });
        messageDisplay.innerHTML = message;
    })
};