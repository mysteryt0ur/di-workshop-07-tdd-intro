class Coolculator {
  add(a, b) {
    return a + b
  }

  mulitply(a, b) {
    return a * b
  }

  subtract(a, b) {
    return a - b
  }

  divide(a, b) {
    return a / b
  }

  highest(a, b) {
    if (a > b) {
      return a
    } else { 
      return b
    }
  }

  lowest(a, b) {
    if (a > b) {
      return b
    } else {
      return a
    }
  }

  double(a) {
    return a * 2
  }

  raise(a, b) {
    return Math.pow(a, b)
  }

  isNegative(a) {
    if (a < 0) {
      return true
    } else {
      return false
    }
  }

  isCool()
}

module.exports = Coolculator
