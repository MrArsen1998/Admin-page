const authRegister=require('../controller/register_controller')
const authLogin=require('../controller/login_controller')

exports.register_routes=(app)=> {

    app.post('/register',authRegister.registerController)

}

exports.login_routes=(app)=> {

    app.post('/login',authLogin.loginController)

}

