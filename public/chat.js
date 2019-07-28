// window.onload
//   * make a post request to `/clients`. make note, the returned data is not json, it is text()
//   * Save the id in a global variable.
// * Create a text input and a button that says "send"

let userId = 1;

window.onload = function (){
    fetch("/clients", {
        method: "POST"
        // headers: {
        //     'Content-Type': 'application/json',
        // }
    }) //make a http GET request to this url
        .then(response=> response.text()) 
        .then(data=>console.log(data));
}


//   * retrieve the contents of the text box
//   * make a post request to your server at /messages
//   * create the body as json that looks like `{"clientId":yourid,"text":"value from text box"}`
function send() {
    let userInput = document.getElementById('userInput').value
    let body = {clientId: userId,
    text: userInput}
    fetch("/messages", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body), 
    })
        .then(response => response.json())
        .then(data => console.log(data));
    }

    // * learn how to use setInterval to do a fetch call every 1000 miliseconds
    //   * use this tool to do a fetch call to `/messages` to get the messages array
    //   * loop the messages array and show the messages in the web page using innerHTML

    setInterval(function(){
        let messageBox = document.getElementById('messages')
        let displayMessage = '';
        fetch("/messages", {
            method: "GET"
        }) //make a http GET request to this url
            .then(response=> response.json()) 
            .then(messages=> {
                messages.map(message => {
                    displayMessage += `<div>${message.text}</div>`
                    // console.log("this" + message);
                    // let messageBox = document.querySelector('#messages');
                    // messageBox.innerHTML += message.text;
                })
                messageBox.innerHTML = displayMessage;
            });
    }, 1000);
    




