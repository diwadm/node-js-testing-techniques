var NotifierService = function() {
  return {
    sendGreeting: function(user) {
      var today = new Date();
      var birthday = user.birthdate();

      if(birthday.getMonth() === today.getMonth() &&
        birthday.getDate() === today.getDate()) {
// Send greeting.
        console.log('Happy birthday!');
        return true;
      }

      return false;
    }
  }
};

var user = {
  birthdate: function() {
    return new Date("01/14/1985");
  }
};

var ns = new NotifierService();
console.log(ns.sendGreeting(user)); 