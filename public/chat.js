const express = require('express')
const cors = require('cors');

app.use(cors());

let chatLog = [];

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
}

function postMessage() {
  let message = document.getElementById('messageBox').value;
  fetch('http://localhost:8080/messages', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ "clientid": clientId, "message": message })
  })
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
    })
}

function addMessage(id, message) {
  const li = document.createElement('li')
  const chatLog = document.getElementById('chatLog')
  li.appendChild(document.createTextNode(`clientID ${id}: ${message}`))
  chatLog.append(li)
}
