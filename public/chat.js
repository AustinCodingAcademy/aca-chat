// window.onload = ()=>{
    
// }
//Chat messages in UL so each chat would be an li

function chat(){
    console.log(chatMessage);
}

let chatDiv = document.getElementById('chatDiv');
let chatBox = document.createElement('input');
let sendChat = document.createElement('button');
sendChat.addEventListener('click', chat);
chatDiv.appendChild(chatBox);
chatDiv.appendChild(sendChat);
sendChat.innerHTML = 'Send Chat!';
chatBox.value = "";
let chatMessage = chatBox.value;
