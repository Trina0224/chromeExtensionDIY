let div= document.getElementById("buttonDiv");
const colors=["#ee0000", "#00ee00", "#0000ee", "#eeaa00", "#ee00aa"];

for(let color of colors){
    let button=document.createElement('button');
    button.style.backgroundColor =color;
    button.addEventListener('click', () =>{
        chrome.storage.sync.set({color: color});
    });
    div.appendChild(button);
}

let anyColor = document.getElementById("anyColor");
anyColor.addEventListener('change', function(event){
    chrome.storage.sync.set({color: event.target.value});    
});