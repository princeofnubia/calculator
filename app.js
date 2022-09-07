const result = document.querySelector(".result");
const display = document.getElementById("input1");
const display1 = document.querySelector(".input2");
const buttons1 = document.querySelectorAll(".buttons1");
const buttons2 = document.querySelectorAll(".buttons2");

//addEventListener("click", show());
buttons1.forEach((value) => {
  value.addEventListener("click", show);
});
function show(e) {
  e.preventDefault();
  console.log(e.target.innerText);
  let buttonText = e.target.innerText;
  if (buttonText == "AC") {
    display.innerText = "";
    display1.innerText = "";
    result.innerText = "0";
  } 
  if(buttonText == "DEL"){
    display.textContent= display.textContent.substring(0, display.textContent.length - 1)
  }
  else {
    display.innerText += buttonText;
    display1.innerText += buttonText;
  }
}
