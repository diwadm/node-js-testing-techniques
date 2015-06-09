function Notifier() {
  this.today = function today() {
    return new Date();
  };

  this.sendGreeting = function sendGreeting(user) {
    var todayDate = this.today();
    var birthday = new Date(user.birthday);

    if(todayDate.getMonth() === birthday.getMonth() &&
       todayDate.getDate() === birthday.getDate()) {
      return true;
    }

    return false;
  };
}

module.exports = Notifier;