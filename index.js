var firstSection = document.querySelectorAll("#first-grid-container")[0].querySelectorAll(".first-flex-box")[0];
var inputField = document.querySelector(".input-field form input");
var inputFieldLength = inputField.value.length;


function del() {
    var arr = [];
    var lenArr = document.querySelector("input").value.length;
    var afterDeletion = "";
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

    if (inputFieldLength <= 6) {
        
        switch(keyPressedInnerHTML){
            case "1":
                inputField.style.color = "black";
                inputField.value += keyPressedInnerHTML;
                break;
            case "2":
                inputField.style.color = "black";
                inputField.value += keyPressedInnerHTML; 
                break;
            case "3":
                inputField.style.color = "black";
                inputField.value += keyPressedInnerHTML; 
                break;
            case "4":
                inputField.style.color = "black";
                inputField.value += keyPressedInnerHTML; 
                break;
            case "5":
                inputField.style.color = "black";
                inputField.value += keyPressedInnerHTML; 
                break;
            case "6":
                inputField.style.color = "black";
                inputField.value += keyPressedInnerHTML; 
                break;
            case "7":
                inputField.style.color = "black";
                inputField.value += keyPressedInnerHTML;
                break;
            case "8":
                inputField.style.color = "black";
                inputField.value += keyPressedInnerHTML;
                break;
            case "9":
                inputField.style.color = "black";
                inputField.value += keyPressedInnerHTML;
                break;
            case "0":
                inputField.style.color = "black";
                inputField.value += keyPressedInnerHTML;
                break;
            case "del":
                del();
                break;
            
            default:
                inputField.value = inputField.value;
        }
        // inputField.value += keyPressedInnerHTML; 
        if (inputFieldLength === 6) {
            inputField.style.color = "red";
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
    this.style.backgroundColor = "#F0F0F0";
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
