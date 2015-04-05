var NotifierService = require('../notification_service');
var should = require('chai').should();

describe('NotifierService', function() {
  var ns, user;

  before(function() {
    ns = new NotifierService();
    user = {
      birthdate: function() {
        return new Date("01/14/1985");
      }
    };
  });

  describe('#sendGreeting()', function() {
    it('should be false', function() {
      ns.sendGreeting(user).should.to.be.false;
    });
  });
});