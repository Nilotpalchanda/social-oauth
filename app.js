const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const path = require('path')

const mongoose = require('mongoose')

const authRoutes = require('./routes/auth-routes')

const profileRoutes = require('./routes/profile-routes')

const passportSetup = require('./config/passport-setup')

const keys = require('./config/keys')

const passport = require('passport')

const cookieSession = require('cookie-session')

const port = process.env.PORT || 3000

//connect mongodb with mongoose

mongoose.connect(keys.mongodb.dbURI, (req, res) => {
    console.log('mongodb connected')
})

app.use(cookieSession({

    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]


}))

//initialze passoport

app.use(passport.initialize())
app.use(passport.session())


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(port)
console.log(`server listen -> ${port}`)

app.get('/', (req, res) => {
    res.render('index',{user:req.user})
})

app.use('/auth', authRoutes)
app.use('/profile',profileRoutes)