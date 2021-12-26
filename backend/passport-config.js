let JwtStrategy = require("passport-jwt").Strategy;
let ExtractJwt = require("passport-jwt").ExtractJwt;
let Owner = require("./models/owner.model");

module.exports = (passport) => {
  let opts = {};
  opts.secretOrKey = process.env.JWT_PRIVATE_KEY;
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
      Owner.findOne({ _id: jwt_payload._id }, function (err, foundOwner) {
        if (err) {
          return done(err, false);
        }
        if (foundOwner) {
          return done(null, foundOwner);
        } else {
          return done(null, false);
          // or you could create a new account
        }
      });
    })
  );
};
