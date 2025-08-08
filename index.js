var firstSection = document.querySelectorAll("#first-grid-container")[0].querySelectorAll(".first-flex-box")[0];
var inputField = document.querySelector(".input-field form input");
var inputFieldLength = inputField.value.length;

var imageArray = ["./assets/images/George.jpg", "./assets/images/geo.jpg", "./assets/images/chindo1_ghibli.jpg"]


function del() {
    var arr = [];
    var lenArr = document.querySelector("input").value.length;
    var afterDeletion = '';
    for (var i = 0; i < lenArr; i++) {
        arr.push(document.querySelector("input").value[i]);
    }

    for (var i = 0; i < lenArr-1; i++) {
        afterDeletion += arr[i];
    }
    inputField.style.color = "red";
    document.querySelector("input").value = afterDeletion;
}

function enterNumber() {
    var keyPressedInnerHTML = this.innerText;
    var inputFieldLength = inputField.value.length;

    // document.querySelector(".username p").innerHTML = inputFieldLength;
    if ( (inputFieldLength+1) <= 7) {
        
        switch(keyPressedInnerHTML){
            case "1":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                inputField.style.color = "black";
                inputField.value += keyPressedInnerHTML;
                document.images[0].setAttribute("src", imageArray[parseInt(keyPressedInnerHTML)-1]);
                break;
            case "2":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                inputField.style.color = "black";
                inputField.value += keyPressedInnerHTML; 
                document.images[0].setAttribute("src", imageArray[parseInt(keyPressedInnerHTML)-1]);
                break;
            case "3":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                inputField.style.color = "black";
                inputField.value += keyPressedInnerHTML;
                document.images[0].setAttribute("src", imageArray[parseInt(keyPressedInnerHTML)-1]);
                document.querySelector(".username p").innerHTML = "<span style='color: blue;'>@</span>Chindo";
                break;
            case "4":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                inputField.style.color = "black";
                inputField.value += keyPressedInnerHTML; 
                break;
            case "5":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                inputField.style.color = "black";
                inputField.value += keyPressedInnerHTML; 
                break;
            case "6":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                inputField.style.color = "black";
                inputField.value += keyPressedInnerHTML; 
                break;
            case "7":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                inputField.style.color = "black";
                inputField.value += keyPressedInnerHTML;
                break;
            case "8":
                var chai = new Audio("sounds/chai.mp3");
                chai.play();
                inputField.style.color = "black";
                inputField.value += keyPressedInnerHTML;
                break;
            case "9":
                var ewo = new Audio("sounds/ewo.m4a");
                ewo.play();        
                inputField.style.color = "black";
                inputField.value += keyPressedInnerHTML;
                break;
            case "0":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play(); 
                inputField.style.color = "black";
                inputField.value += keyPressedInnerHTML;
                break;
            case "del":
                del();
                var commot = new Audio("sounds/commot.m4a");
                commot.play(); 
                break;
            
            default:
                inputField.value = inputField.value;
                document.images[0].setAttribute("src", "./assets/images/George_skyblue.png");
        }
        // inputField.value += keyPressedInnerHTML; 
        if (inputFieldLength === 5) {
            document.querySelector(".login button").style.backgroundColor = "#00B875";
        } else if (inputFieldLength <= 5) {
            document.querySelector(".login button").style.backgroundColor = "#B4E9D593";
        }
        if (inputFieldLength === 6) {
            inputField.style.color = "red";
            document.querySelector(".login button").style.backgroundColor = "#B4E9D593";
        } 
    } else {
        inputField.value = "";
        inputField.style.color = "black";
    }
}
numKeyPressed = document.querySelectorAll(".numKey");

for (var i = 0; i < document.querySelectorAll(".numKey").length; i++) {
    numKeyPressed[i].addEventListener("click", enterNumber);
}

function changeColor() {
    switch(this.innerText) {
        case "del":
            this.style.backgroundColor = "red";
            break;

        default:
            this.style.backgroundColor = "limegreen";
    }
    
}

function changeColorReverse() {
    this.style.backgroundColor = "#FFFFFF";
}

for (var i = 0; i < document.querySelectorAll(".numKey").length; i++) {
    numKeyPressed[i].addEventListener("mouseover", changeColor);
    numKeyPressed[i].addEventListener("mouseout", changeColorReverse);
}

// function myFunction() {
//   document.getElementsByTagName("input")[0].style.backgroundColor = "black";
//   var inputFieldLength = inputField.value.length;
//   inputField.style.color = "white";
// }

// function myBody() {
//     document.getElementsByTagName("input")[0].style.backgroundColor = "black";
//     inputField.style.color = "white";
// }

// inputField.addEventListener("focus", myFunction);
// inputField.addEventListener("focusout", myBody);
