// window.onload
//   * make a post request to `/clients`. make note, the returned data is not json, it is text()
//   * Save the id in a global variable.
// * Create a text input and a button that says "send"
// * When the send button is click:
//   * retrieve the contents of the text box
//   * make a post request to your server at /messages
//   * create the body as json that looks like `{"clientId":yourid,"text":"value from text box"}`
// * learn how to use setInterval to do a fetch call every 1000 miliseconds
//   * use this tool to do a fetch call to `/messages` to get the messages array
//   * loop the messages array and show the messages in the web page using innerHTML
let userId = 1;

window.onload = function (){
    fetch("/clients") //make a http GET request to this url
        .then(response=> response.text()) 
        .then(data=>console.log(data)); 
}

function send() {
    let userInput = getElementById('userInput').value
    
}



