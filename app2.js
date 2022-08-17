const display = document.getElementById("input1");
const result = document.getElementById("input2");
const buttons1 = document.querySelectorAll(".buttons1");
const buttons2 = document.querySelectorAll(".buttons2");

//addEventListener("click", show());
buttons1.forEach((value) => {
  value.addEventListener("click", show);
});
function show(e) {
  e.preventDefault();
  let buttonText = e.target.innerText;
  if (buttonText == "AC") {
    display.innerText = "";
    result.innerText = "0";
    return;
  }
  if (buttonText === "DEL") {
    display.innerText = display.innerText.slice(
      0,
      display.innerText.length - 1
    );
    return;
  }
  if (buttonText === "=") {
    console.log(9);
    result.innerText = calculate(display.innerText);
    return;
  } else {
    display.innerText += buttonText;
  }
}

document.oncut((event) => {
  alert(99);
});

function percentage() {
  alert("me");
}

function calculate(str) {
  return 1;
}
