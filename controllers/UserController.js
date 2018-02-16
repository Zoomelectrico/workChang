const User = require('../models/User');
const bcrypt = require('bcryptjs');

const UserController = {
  registerUser: function (user, callback) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) { throw err; }
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) { throw err; }
        user.password = hash;
        User.create(user).then(user => { callback(null, user) });    
      });
    });
  },
  comparePassword: function (password, hash, callback) {
    bcrypt.compare(password, hash, (err, isMatch) => {
      if (err) throw err;
      callback(null, isMatch);
    });
  },
  changePassword: function (username, code, generateCode, newPassword) {
    if (code === generateCode) {
      User.findOne({
        where: {
          username: username
        }
      }).then(user => {
        bcrypt.genSalt(10, (err, salt) => {
          if (err) console.error(err);
          bcrypt.hash(newPassword, salt, (err, hash) => {
            if (err) console.error(err);
            user.update({
              password: hash
            }).then(() => {console.log('Sirve')});
          })
        });  
      });
    }
  }
};

module.exports = UserController;