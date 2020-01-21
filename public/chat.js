const express = require('express')

window.onload = () => {
  fetch('http://localhost:8080/clients', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({'Status': "Client Logged In"})
  })
    .then(res => {
      console.log(res)
    })
}

// const message = document.getElementById('sendMes').value;

// function postMessage() {
//   fetch('http://localhost:8080/message', {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({"id": cliendId, "message": message})
//   })
//   .then(res => {
//     console.log(res)
//   })
// }

