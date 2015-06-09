var should = require('chai').should();
var Set = require('./Set');

describe('Set', function() {
  describe('.isEmpty()', function() {
    it('should return true', function() {
      var s = new Set();
      s.isEmpty().should.be.true;
    });
  });

  describe('.add()', function() {
    context('when adding a non-duplicate', function() {
      it('should return true', function() {
        var s = new Set();
        s.add(5).should.be.true;
        s.isEmpty().should.be.false;
      });
    });
  });
});