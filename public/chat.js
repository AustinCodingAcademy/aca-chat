clientId = 0;
const axios = require('axios');
window.onload(axios.post('/clients')
  .then(id => clientId = id));

const message = document.getElementById('message');
const send = document.getElementById('send');

send.on('click', ()=>{
  let text = message.value;
  axios.post('/messages', {
    "clientId": clientId,
    "text": text
  });
});

