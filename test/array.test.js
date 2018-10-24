// Here are some tests for some of JavaScript's built-in Array methods
var chai = require('chai')
var expect = chai.expect

describe('Array', function() {
  describe('#push()', function() {
    it('should add an item to the array', function() {
      var array = [1, 2, 3, 4]
      array.push(5)
      expect(array).to.deep.equal([1, 2, 3, 4, 5])
    })

    it('should alter the length properly', function() {
      var array = [1, 1, 1, 1]
      array.push(1)
      expect(array.length).to.equal(5)
      
    })

    it('should remove item from the array', function() {
      var array = [1, 2, 3, 4, 5]
      array.pop(5)
      expect(array).to.deep.equal([1, 2, 3, 4])
    })

    it('should alter the length properly', function() {
      var array = [1, 1, 1, 1, 1]
      array.pop(1)
      expect(array.length).to.equal(4)
    })
  })
})
