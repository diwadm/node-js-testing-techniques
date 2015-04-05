var NotifierService = require('../notification_service');
var should = require('chai').should();
var sinon = require('sinon');

describe('NotifierService', function() {
  var ns, ns2, user;

  before(function() {
    ns = new NotifierService();
    ns2 = new NotifierService();

    user = {
      birthdate: function() {
        return new Date("01/14/1985");
      }
    };
  });

  describe('#sendGreeting()', function() {
    it('should get the date today', function() {
      var todaySpy = sinon.spy(ns2, 'todayDate');

      ns2.sendGreeting(user);

      todaySpy.calledOnce.should.be.true;

      todaySpy.restore();
    });

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

    context('when it is not the user birthday', function() {
      it('should be false', function() {
        ns.sendGreeting(user).should.be.false;
      });
    });
  });
});