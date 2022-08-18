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
    console.log(this.display);
  }
}

class Clear extends Button {
  constructor(btn, display) {
    super(btn, display);
  }

  press() {
    console.log("I am here");
    this.display.display("");
  }
}

class Percentage extends Button {
  constructor() {
    super();
  }

  press() {
    // evaluates percentage and display result
  }
}

class Evaluates extends Button {
  constructor() {
    super();
  }

  press() {
    // Evaluates text and display result on the screen
  }
}

class Display {
  constructor(screen) {
    this.screen = screen;
  }

  display(displayItem) {
    this.screen.innerText = displayItem;
  }
}

class Arithmetic {
  static calculate(string) {
    this.str = string;
  }
}

// Client Code
// We are going instantiate object representing this button such that when they'
// they respond accordingly

const display = new Display(document.getElementById("input1"));
const result = new Display(document.getElementById("input2"));

const buttons1 = document.querySelectorAll(".buttons1");
const buttons2 = document.querySelectorAll(".buttons2");

const btn = document.getElementById("three");
const clear = document.getElementById("AC");

const btn3 = new Num(btn, display);
const btnclear = new Clear(clear, display);
