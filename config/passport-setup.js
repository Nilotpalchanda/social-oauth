const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./keys')
const User = require ('../models/user-model')


passport.use(new GoogleStrategy ({

   callbackURL: '/auth/google/redirect',
   clientID: keys.google.clientID,
   clientSecret: keys.google.clientSecret

}, (accessToken,refreshToken,profile,done)=>{
	//passport callback function
	// console.log('callback function fiered--')
	// console.log(profile);

	User.findOne({googleId:profile.id}).then((currentUser)=>{

		if(currentUser){
			//if exsist user 
			console.log('user exist and details is :' + currentUser)
		}else{
			// if user not in our db then save the user in our db
		new User ({
			username: profile.displayName,
			googleId: profile.id 
			}).save().then((newUser)=>{
				console.log('new user created: ' + newUser)
			})

		}

	})

  })
)