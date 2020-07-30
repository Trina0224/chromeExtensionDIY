chrome.bookmarks.onCreated.addListener(() => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) =>{
        chrome.tabs.sendMessage(tabs[0].id, {text: 'Hello from background'});
    })
})

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        console.log(request);
        console.log(sender);
        console.log(sendResponse);

    }
)
