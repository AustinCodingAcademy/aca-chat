
function getMessages(){
    fetch("/messages")
    .then(res=>res.json())
    .then((messages)=>{
        let messageList = "<h2>All Messages</h2>"
        messages.map((m)=>{
            messageList += `
            <div>
                <p>ClientId: ${m.clientId}; MESSAGE: ${m.text}</p>
            </div>
            `
            });
    document.getElementById("main").innerHTML = messageList
    });
}


function postMessage(){
    let text = document.getElementById("inputtext").value;
    let yourid =2000
    let options ={
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({yourid:yourid, text:text})
    };
    fetch("/messages", options)
    .then(res=>res.json())
    .then(newUser=>console.log(newUser))
}