window.onload=()=>{
postClient()
getMessages()
}
let clientId = 0;


function postClient(){
    let options ={
        method:"POST",
        headers:{"Content-Type": "application/json"}
    };
    fetch("/clients", options)
    .then(res=>res.text())
    .then(newClientId=> clientId = newClientId)
};

function postMessage(e){
    e.preventDefault();
    let text = document.getElementById("inputtext").value;
    let options ={
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({clientId:clientId, text:text})
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
        let messageList = "<h2>All Messages:</h2>"
        messages.map((m)=>{
            messageList += `
            <div>
                <p>ClientId: ${m.clientId} MESSAGE: ${m.text}</p>
            </div>
            `
            });
    document.getElementById("main").innerHTML = messageList
    });
};
setInterval(getMessages,1000)