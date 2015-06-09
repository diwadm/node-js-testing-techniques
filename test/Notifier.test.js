var should = require('chai').should();
var sinon = require('sinon');
var Notifier = require('../notifier');

describe('Notifier', function() {
  var notifier;

  beforeEach(function() {
    notifier = new Notifier();
  });

  describe('.sendGreeting()', function() {
    context('when today is user\'s birthday', function() {
      it('should print Happy Birthday', function() {
        var todayStub = sinon.stub(notifier, 'today', function() {
          return new Date('05/22/2015');
        });

        var user = {
          birthday: '05/22/2015'
        };

        notifier.sendGreeting(user).should.be.true;

        todayStub.restore();
      });

      it('should get today\'s date', function() {

        var todaySpy = sinon.spy(notifier, 'today');

        var user = {
          birthday: '05/22/2015'
        };

        notifier.sendGreeting(user);

        todaySpy.calledOnce.should.be.true;

        todaySpy.restore();
      });

      it('should call today\'s month and date', function() {

        var spiedToday = new Date();
        var monthSpy = sinon.spy(spiedToday, 'getMonth');
        var daySpy = sinon.spy(spiedToday, 'getDate');

        var todayStub = sinon.stub(notifier, 'today', function() {
          return spiedToday;
        });

        var user = {
          birthday: '05/22/2015'
        };

        notifier.sendGreeting(user);

        monthSpy.calledOnce.should.be.true;
        daySpy.calledOnce.should.be.true;

        monthSpy.restore();
        daySpy.restore();
        todayStub.restore();
      });
    });

    context('when it is not the user\'s birthday', function() {
      it('should return false', function() {
        var user = {
          birthday: '01/21/1993'
        };

        notifier.sendGreeting(user).should.be.false;
      });
    });


  });
});