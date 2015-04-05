var NotifierService = require('../notification_service');
var should = require('chai').should();
var sinon = require('sinon');

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
    context('when the user birthday is today', function() {
      var stub, stubSendGreeting;
      before(function() {
        stubSendGreeting = sinon.stub(ns, "todayDate");
        stubSendGreeting.returns(new Date("01/14/1985"));
      });

      it('should be true', function() {
        ns.sendGreeting(user).should.be.true;
      });

      after(function() {
        stubSendGreeting.restore();
      });
    });

  });
});