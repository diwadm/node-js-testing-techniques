module.exports = function() {
  return {
    todayDate: function() {
      return new Date();
    },

    sendGreeting: function(user) {
      var today = this.todayDate();
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