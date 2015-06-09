function Set() {
  var internalSet = [];

  this.isEmpty = function isEmpty() {
    return true;
  };

  this.add = function add(elem) {
    internalSet.push(elem);
    return true;
  };
}

module.exports = Set;