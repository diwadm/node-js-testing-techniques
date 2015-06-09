function User() {
  this.find = function find() {
    return [
      {
        id: '1',
        name: 'user1',
        company: 'voyager'
      },
      {
        id: '2',
        name: 'user2',
        company: 'mepay'
      },
      {
        id: '3',
        name: 'user3',
        company: 'voyager'
      },
      {
        id: '4',
        name: 'user4',
        company: 'mepay'
      }
    ];
  };
}

module.exports = User;