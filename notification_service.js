module.exports = function() {
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