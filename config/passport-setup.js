const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./keys')
const User = require('../models/user-model')

//serealized process store cookie and id means mongodb id

passport.serializeUser((user,done)=>{

    done(null,user.id)

})


//deserialzed process grab the id from the cookie and say user is authenticate

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null, user)

    })
})



passport.use(new GoogleStrategy({

    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret

}, (accessToken, refreshToken, profile, done) => {
    //passport callback function
    // console.log('callback function fiered--')
    console.log(profile);

    User.findOne({ googleId: profile.id }).then((currentUser) => {

        if (currentUser) {
            //if exsist user in our db
            console.log('user exist and details is :' + currentUser)

            done(null,currentUser)
        } else {
            // if user not in our db then save the user in our db
            new User({
                username: profile.displayName,
                googleId: profile.id,
                thumbnail:profile._json.image.url
            }).save().then((newUser) => {
                console.log('new user created: ' + newUser)
                done(null,newUser)
            })

        }

    })

}))