const router = require('express').Router()
const passport = require('passport')
//
router.get('/login', (req, res) => {

    res.render('login',{user:req.user})
})

//

router.get('/logout', (req, res) => {
   // res.send('logout happy to sea you next time')
   req.logout()
   res.redirect('/')
})

//

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}))

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    //res.send('you reach the callback URI')
    res.redirect('/profile/')
})

module.exports = router