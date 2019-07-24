window.onload=()=>{
postClient()
}
let newClientId = 1

function postClient(){
    let options ={
        method:"POST",
        headers:{"Content-Type": "text/plain"},
        body: JSON.stringify({clientId:newClientId})
    };
    fetch("/clients", options)
    .then(res=>res.json())
    .then(newClientId=>console.log(newClientId))
}
function postMessage(e){
    e.preventDefault();
    let text = document.getElementById("inputtext").value;
    let options ={
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({clientId:newClientId, text:text})
    };
    fetch("/messages", options)
    .then(res=>res.json())
    .then(newUser=>console.log(newUser));
    getMessages()
};
function getMessages(){
    fetch("/messages")
    .then(res=>res.json())
    .then((messages)=>{
        let messageList = "<h2>All Messages</h2>"
        messages.map((m)=>{
            messageList += `
            <div>
                <p>MESSAGE: ${m.text}</p>
            </div>
            `
            });
    document.getElementById("main").innerHTML = messageList
    });
}
