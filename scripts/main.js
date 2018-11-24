var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/missed-call.jpg'){
        myImage.setAttribute('src','images/fish.jpg');
    }
    else{
        myImage.setAttribute('src','images/missed-call.jpg');
    }
}

var mybutton = document.querySelector('button');
var myheading = document.querySelector('h2');

function setUserName(){
    var myname = prompt("please enter your name.");
    localStorage.setItem('name',myname);
    myheading.innerHTML = "歡迎 " + myname;
}

if(!localStorage.getItem('name')){
    setUserName();
}
else {
    var storedname = localStorage.getItem('name');
    myheading.innerHTML = "歡迎 " + storedname;
}

mybutton.onclick = function(){
    setUserName();
}