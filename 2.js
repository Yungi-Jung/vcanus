class Calculator {
  constructor() {
    this.result = 0;
  }

  add = (num) => {
    this.result += num;
    return this;
  };

  subtract = (num) => {
    this.result -= num;
    return this;
  };

  out = () => this.result;
}

const solution = () => {
  const calculator = new Calculator();
  const result = calculator.add(4).add(5).subtract(3).out();
  console.log(result);
};

solution();