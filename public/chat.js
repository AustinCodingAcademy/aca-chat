let client;

window.onload () {
    fetch("http://localhost:8080/clients", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: clientId.toString(),
    })
}

function send() {
    let go = document.getElementById("mess").value;
    fetch("http://localhost:8080/clients", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(go),
    })
}