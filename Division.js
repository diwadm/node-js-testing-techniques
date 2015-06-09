function Division(name) {
  this.divide = function divide(dividend, divisor) {
    if(divisor === 0) {
      throw new Error('Divisor must be zero.');
    }
    return dividend / divisor;
  };

  this.nickname = name;

}

Division.prototype.name = function divideName() {
  return this.nickname;
};

module.exports = Division;

var s = new Set();
s.count(); // 0
s.isEmpty(); // true
s.add(5); // true
s.add(5); // false

s.count(); // 1
s.isEmpty(); // false

s.remove(5); // true
s.count(); // 0

npm install mocha -g
npm install chai
nom install sinon