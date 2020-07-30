let colorButton = document.getElementById('colorButton');

chrome.storage.sync.get('color', function(data) {
    colorButton.setAttribute('value',data.color);
    colorButton.style.backgroundColor = data.color;
})

colorButton.onclick = function(button){
    let color=button.target.value;
    console.log(color);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        console.log(tabs[0]);
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: `document.body.style.backgroundColor='${color}';`}
            //original style is:
            //document.body.style.backgroundColor = "red";
        );
    });
}