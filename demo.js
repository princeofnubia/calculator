class Button {
    // dependency injection
    // meaning we have a display and we are calling it to display whatever params we pass to it
    constructor(btn, display) {
      this.text = btn.value;
      this.display = display;
      btn.addEventListener("click", () => this.press());
    }
  
    press() {
      this.display.display(this.text);
    }
  }
  
  class Num extends Button {
    constructor(btn, display) {
      super(btn, display);
    }
  }
  
  class Operator extends Button {
    constructor(btn, display) {
      super(btn, display);
    }
  
    press() {
      let currentDisplay = this.display.getDisplay();
      let lastDisplay = parseInt(currentDisplay[currentDisplay.length - 1]);
      if (currentDisplay.length === 0) {
        return;
      }
      if (isNaN(lastDisplay)) {
        return;
      } else {
        this.display.display(this.text);
      }
      // evaluates percentage and display result
    }
  }
  
  class Clear extends Button {
    constructor(btn, display, result) {
      super(btn, display);
      this.result = result;
    }
  
    press() {
      console.log("I am here");
      this.display.clear();
      this.result.clear();
    }
  }
  
  class Del extends Button {
    constructor(btn, display) {
      super(btn, display);
    }
  
    press() {
      console.log("I am here");
      this.display.del();
    }
  }
  
  class Percentage extends Button {
    constructor(btn, result, display) {
      super(btn, result);
    }
  
    press() {
      let res = parseInt(display.getDisplay()) / 100;
      if (isNaN(res)) {
        this.display.display("Error");
        return;
      }
      this.display.display(res);
      // evaluates percentage and display result
    }
  }
  
  class Evaluates extends Button {
    constructor(btn, display, result, arithmetic) {
      super(btn, result);
      this.display = display;
      this.result = result;
      this.arithmetic = arithmetic;
    }
  
    press() {
      let res = eval(this.display.getDisplay());
      if (res) this.result.display(res);
      // Evaluates text and display result on the screen
    }
  }
  
  class Display {
    constructor(screen) {
      this.screen = screen;
    }
    getDisplay() {
      return this.screen.innerText;
    }
    del() {
      this.screen.innerText = this.screen.innerText.substring(
        0,
        this.screen.innerText.length - 1
      );
    }
    clear() {
      this.screen.innerText = "";
    }
    display(displayItem) {
      this.screen.innerText += displayItem;
    }
  }
  
  class Result extends Display {
    constructor(screen) {
      super(screen);
    }
    display(displayItem) {
      this.screen.innerText = displayItem;
    }
  }
  
  // Client Code
  // We are going instantiate object representing this button such that when they'
  // they respond accordingly
  
  const display = new Display(document.getElementById("input1"));
  const result = new Result(document.getElementsByClassName("Result"));
  const buttons = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "decimal",
  ];
  
  const operators = ["add", "subtract", "multiplication", "division"];
  
  buttons.forEach((value) => {
    const btn = new Num(document.getElementById(value), display);
  });
  
  operators.forEach((value) => {
    const btn = new Operator(document.getElementById(value), display);
  });
  
  const btnclear = new Clear(document.getElementById("AC"), display, result);
  const btnDel = new Del(document.getElementById("delete"), display);
  
  // percentage
  const btnPercent = new Percentage(
    document.getElementById("percent"),
    result,
    display
  );
  // equals
  
  const btnEquals = new Evaluates(
    document.getElementById("equals"),
    display,
    result
  );
  //