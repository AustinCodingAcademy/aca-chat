const express = require('express')
const cors = require('cors');

app.use(cors());

var clientId = 0;

function onLoad() {
  fetch('http://localhost:8080/clients', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 'Status': "Client Logged In" })
  })
    .then(res => {
      return res.json();
    })
    .then(myId => {
      clientId = myId;
      console.log(`My ID is ${clientId}.`)
    })
    setInterval(listMessages, 1000)
}

function listMessages() {
  fetch('http://localhost:8080/messages', {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      let chat = document.getElementById("chatLog")
      chat.innerHTML = "";
      data.map(mes => {
        const li = document.createElement('li')
        // const chatLog = document.getElementById('chatLog')
        li.appendChild(document.createTextNode(`clientID ${mes.clientId}: ${mes.text}`))
        chat.append(li)
      })
    })
}

function postMessage() {
  let message = document.getElementById('messageBox').value;
  fetch('http://localhost:8080/messages', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ "clientId": clientId, "message": message })
  })
    .then(res => {
      return res.json()
    })
}
