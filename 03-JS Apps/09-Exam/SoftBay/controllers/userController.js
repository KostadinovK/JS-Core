const userController = function(){
    const isUserDataValid = function(params){
        let username = params.username;
        let password = params.password;
        let rePassword = params.rePassword;

        if(password !== rePassword || username === '' || username === null || password === '' || password === null){
            return false;
        }

        return true;
    }

    const getLogin = function(context){
        let loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        })
        .then(function(){
            this.partial('../views/user/login.hbs');
        });
    }

    const postLogin = function(context){
        
        userService.login(context.params)
        .then(response => response.json())
        .then(data => {
            storage.saveUser(data);
            context.redirect('#/home');
        });
    }

    const getRegister = function(context){
        let loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        })
        .then(function(){
            this.partial('../views/user/register.hbs');
        });
    }

    const postRegister = function(context){
        if(!isUserDataValid(context.params)){
            return;
        }

        userService.register(context.params)
        .then(response => response.json())
        .then(data => {
            storage.saveUser(data);
            context.redirect('#/home');
        });
    }

    const logout = function(context){
        userService.logout()
        .then(response => response.json())
        .then(data => {
            storage.deleteUser();
            context.redirect('#/home');
        })
        .catch(err => location.reload());;
    }

    const getProfile = function(context){
        let loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        context.username = JSON.parse(storage.getData('userInfo')).username;
        context.buyedProducts = JSON.parse(storage.getData('userInfo')).buyedProducts;

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        })
        .then(function(){
            this.partial('../views/user/profile.hbs');
        });
    }

    const buy = function(context){
        userService.update({ buyedProducts: JSON.parse(storage.getData('userInfo')).buyedProducts + 1})
        .then(response => response.json())
        .then(data => {
            storage.deleteUser();
            storage.saveUser(data);
            context.redirect('#/dashboard');
        });
    }

    return {
        getLogin,
        postLogin,
        getRegister,
        postRegister,
        logout,
        getProfile,
        buy
    };
}();