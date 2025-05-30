class Calculator {
  constructor(options) {
    this.precision = options.precision;
  }

  add(x, y) {
    let result = x + y;
    return Number(result.toFixed(this.precision));
  }
}


module.exports= Calculator