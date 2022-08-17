class Calculator {
  constructor(currentValue, currentResult) {
    this.currentValue = currentValue;
    this.currentResult = currentResult;
  }

  display(str) {
    this.currentValue = str;
  }

  calculate() {
    this.currentValue.pop();
  }

  add() {
    return this;
  }

  multiply() {
    return this;
  }

  divide() {
    return this;
  }

  subtract() {
    return this;
  }
}

class Arithmetic {}

class Display {}
