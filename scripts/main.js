'use strict';
let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = this.getAttribute('src');
    if (mySrc === 'images/image-1.jpeg') {
        this.setAttribute('src', 'images/image-2.jpeg');
    } else {
        this.setAttribute('src', 'images/image-1.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName();
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}
myButton.onclick = function () {
    setUserName();
}
