let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/html.svg") {
    myImage.setAttribute("src", "images/css.svg");
  } else {
    myImage.setAttribute("src", "images/html.svg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myUserName = prompt("What is your name?");
  if (!myUserName) {
    setUserName();
  } else {
    localStorage.setItem("name", myUserName);
    myHeading.textContent = `HELLO, ${myUserName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let myName = localStorage.getItem("name");
  myHeading.textContent = `HELLO, ${myName}`;
}

myButton.onclick = function () {
  setUserName();
};
