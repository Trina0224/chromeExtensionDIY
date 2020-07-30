let images = document.getElementsByTagName('img');

for(let image of images){ 
    image.src = "chrome-extension://pblhaaidkcoeleamaijciodoblmdcmab/images/hacked.jpg"
}

let headings = document.getElementsByTagName('h1');

for(let heading of headings){
    //document.getElementById("yourH1_element_Id").innerHTML = "yourTextHere";
    heading.innerHTML = "TrinaS";
}

let paras = document.getElementsByTagName('p');

for(let para of paras){
    para.innerHTML = "I love Aska";
}
