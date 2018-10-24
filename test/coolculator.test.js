var chai = require('chai')
var expect = chai.expect

var Coolculator = require('../lib/coolculator')

describe('Coolculator', function() {
  mm = new Coolculator()

  it('should add', function() {
    result = mm.add(2, 3)
    expect(result).to.equal(5)
  })

  
  it('should multiply', function() {
    result = mm.mulitply(2, 3)
    expect(result).to.equal(6)
  })


  it('should subtract', function() {
    result = mm.subtract(3, 2)
    expect(result).to.equal(1)
  })


  it('should divide', function() {
    result = mm.divide(4, 2)
    expect(result).to.equal(2)
  })


  it('should return highest number', function() {
    result = mm.highest(1, 7)
    expect(result).to.equal(7)
  })


  it('should return lowest number', function() {
    result = mm.lowest(1, 7)
    expect(result).to.equal(1)
  })


  it('double the number entered', function() {
    result = mm.double(4)
    expect(result).to.equal(8)
  })


  it('raise the first number by the second number', function() {
    result = mm.raise(4, 2)
    expect(result).to.equal(16)
  })

  

  it('proves the number is negative', function() {
    result = mm.isNegative(3)
    expect(result).to.equal(false)
  })


  it('proves the number is positive', function() {
    result = mm.isNegative(-3)
    expect(result).to.equal(true)
  })

})
