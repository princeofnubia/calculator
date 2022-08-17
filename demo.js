class Button {
  // dependency injection
  // meaning we have a display and we are calling it to display whatever params we pass to it
  constructor(num, display) {
    this.text = num;
    this.display = display;
  }

  press() {
    this.display.display(this.text);
  }
}

class Num extends Button {
  constructor() {
    super();
  }

  press() {
    // display sth on the screen
  }
}

class Clear extends Button {
  constructor() {
    super();
  }

  press() {
    // clears the screen and display sth on the screen
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
