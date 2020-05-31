const passport = require("passport");
const localStrategy = require("passport-local").Strategy;


passport.use("local.signup", new localStrategy({
    usernameField: 'nombre',
    passReqToCallback: 'contraseña',
    passReqToCallback: true

}, async(req, nombre, contraseña, done) => {
    console.log(req.body);
}));