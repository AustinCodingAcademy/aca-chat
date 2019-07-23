var clientId;
window.onload = function(){
    fetch('/clients', {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
    })
    .then(response => response.json())
    .then(data => clientId = data.id)
}

function postInputTxt(){
   let text = document.getElementById('inputTxt').value;
   fetch('/messages', {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({
            'clientId':clientId,
            'text':text
        })
    })
}

setInterval(function(){ 
    alert("Hello"); 
}, 1000);