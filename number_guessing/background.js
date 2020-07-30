chrome.runtime.onConnect.addListener(function(port){
    let min = 0;
    let max = 1000;
    let guess = Math.floor(Math.random() * 1000);

    port.postMessage({number: guess});
    port.onMessage.addListener( function(message) {
        if(message.message == 'Congratulations'){
            console.log(`I guessed the number, it was ${guess}`);
        }
        else if(message.message == 'Less'){
            max = guess;
            guess = Math.floor((max + min) / 2);
            port.postMessage({number: guess});
            console.log(`My current guess is ${guess}`);
        }
        else if(message.message == 'More'){
            min = guess;
            guess = Math.floor((max + min) / 2);
            port.postMessage({number: guess});
            console.log(`My current guess is ${guess}`);
        }
    });

})


//You could update this with tabs
//let port = chrome.tabs.connect(tabid);