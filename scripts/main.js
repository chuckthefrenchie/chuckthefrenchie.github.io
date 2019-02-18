var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/frenchie.jpg') {
      myImage.setAttribute ('src','images/frenchie2.jpg');
    } else {
      myImage.setAttribute ('src','images/frenchie.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Frenchie needs a hug, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Frenchie needs a hug, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}