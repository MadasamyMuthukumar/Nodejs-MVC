const { getUser } = require("../models/userModel")

exports.loginPage = (req,res,next)=>{
    res.render('login')
}

exports.dashboardPage = (req,res,next)=>{
    const user = getUser(req.query.email)
    res.render('dashboard',{
        name:user.name
    })
}

exports.loginCheck =(req,res,next)=>{
   const user = getUser(req.body.email)
   if(user !== null && user.password == req.body.password){
       return res.redirect('/dashboard?email='+req.body.email)
   }

    res.render('error',{
    message: 'Username or Password Mismatch!'
   })
}