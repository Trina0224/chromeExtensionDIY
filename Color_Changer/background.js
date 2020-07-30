chrome.runtime.onInstalled.addListener(function (){
    chrome.storage.sync.set({color:"#000000"},function(){
        console.log("name set");
    });
    console.log("Hello World.");
    // chrome.declarativeContent.onPageChanged.removeRules(undefined, function (){
    //     chrome.declarativeContent.onPageChanged.addRules([
    //         {
    //             conditions: [
    //                 new chrome.declarativeContent.PageStateMatcher({
    //                     pageUrl:{urlContains:'google'}
    //                 })
    //             ],
    //             actions: [new chrome.declarativeContent.ShowPageAction()]
    //         }
    //     ]);        
    // });
    
});

// chrome.bookmarks.onCreated.addListener(function (){
//     chrome.storage.sync.get('name', function(obj){
//         chrome.browserAction.setBadgeText({text:"TS"});
//         console.log("Bookmark Created."+ obj.name + " created.");
//     });
    
// });

// chrome.bookmarks.onRemoved.addListener(function (){
//     chrome.storage.sync.get('name', function(obj){
//         chrome.browserAction.setBadgeText({text:"Bye"});
//         console.log("Bookmark Removed."+ obj.name + " created.");
//     });
    
// });

// let showBadge=true;
// chrome.commands.onCommand.addListener(function(command){
//     console.log(command);
//     if(showBadge){
//         chrome.storage.sync.get('name', function(obj){
//             chrome.browserAction.setBadgeText({text:"TS"});
//         });
//         showBadge=false;
//     }else{
//         chrome.storage.sync.get('name', function(obj){
//             chrome.browserAction.setBadgeText({text:""});
//         });
//         showBadge=true;
//     }
// });
