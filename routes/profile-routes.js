const router = require('express').Router()

// check if user logi or not
const authCheck = (req,res,next)=>{
	if(!req.user){
		// if user not login then redirect basrd on user details (req.user)
		res.redirect('/auth/login/')
	}else{
		// if login go to progile page
		next()
	}
}


router.get('/',authCheck,(req,res)=>{
	res.render('profile',{user:req.user})
	//res.send('user name is :' + req.user.username)
})


module.exports = router

