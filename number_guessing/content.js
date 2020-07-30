let number = Math.floor(Math.random() * 1000);
console.log(`My number is ${number}`);
let port = chrome.runtime.connect();

port.onMessage.addListener( function(message) {
    if(message.number == number){
        port.postMessage({message: 'Congratulations'});
    }
    else if(number < message.number){
        port.postMessage({message: 'Less'});
    }
    else if(number > message.number){
        port.postMessage({message: 'More'});
    }
})