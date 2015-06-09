var Division = require('./Division');
var should = require('chai').should();
var expect = require('chai').expect;

describe('Division', function() {
  describe('.divide()', function() {
    context('given divisor is not zero', function() {
      it('should get the quotient', function() {
        var division = new Division();

        division.divide(10, 2).should.eql(5);
      });
    });

    context('given the divisor is zero', function() {
      it('should throw an error', function() {
        var division = new Division();

        var divisorIsZero = function() {
          return division.divide(10, 0);
        };

        expect(divisorIsZero).to.throw(Error);
        expect(divisorIsZero).to.throw('Divisor must be zero.');
      });
    })
  });
});