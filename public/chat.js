const express = require('express')
const cors = require('cors');

app.use(cors());

console.log('I\'m loading')

var clientId = 0;

function onLoad() {
  console.log("testing")
  fetch('http://localhost:8080/clients', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 'Status': "Client Logged In" })
  })
    .then(res => {
      clientId = res;
      console.log(res, clientId)
    })
}

onLoad()



function postMessage() {
  let message = document.getElementById('sendMes').value;
  fetch('http://localhost:8080/messages', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ "clientid": clientId, "message": message })
  })
    .then(res => {
    })
}

