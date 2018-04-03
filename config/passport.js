const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/User');
const sequelize = require('./database');

module.exports = function(passport) {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = '$2a$15$CqGgN2CMjfAvQ.vXUzUWFujqUKUmYZNX4TWrSWYCiJouerR/WIKfe';
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.ID)
      .then((err, user) => {
        if(err) {
          console.error(err);
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }

      });
  }));
};