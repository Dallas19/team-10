const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
<<<<<<< HEAD
            clientID: process.env.CLIENTID,
            clientSecret: process.env.CLIENTSECRET,
=======
            clientID: "",
            clientSecret: "",
>>>>>>> 2bc6ff5a3f57c60a31882f6cf7a45450c3c55f89
            callbackURL: "http://localhost:3000"
        },
        (token, refreshToken, profile, done) => {
            return done(null, {
                profile: profile,
                token: token
            });
        }));
};