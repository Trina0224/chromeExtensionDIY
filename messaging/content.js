chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        console.log(request);
        console.log(sender);
        console.log(sendResponse);
    }
)

chrome.runtime.sendMessage({text: 'Hello from content script'});