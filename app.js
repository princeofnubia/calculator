const result = document.querySelector(".result")
const display = document.querySelector(".input1")
const display1 = document.querySelector(".input2")
const buttons1 = document.querySelectorAll(".buttons1")
const buttons2 = document.querySelectorAll(".buttons2")

addEventListener("click",show())

buttons1.forEach(show)


function show(){
    let buttonText = this.innerText;
    if (buttonText == "AC" ){
        display.innerText = "";
        display1.innerText= "";
        result.innerText= "0"
    }

    else{
        display.textContent += buttonText;
        display1.textContent += buttonText;
}
}
