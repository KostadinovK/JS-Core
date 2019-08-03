const userController = function(){

    const userDataIsValid = function(userData){
        let firstName = userData.firstName;
        let lastName = userData.lastName;
        let username = userData.username;
        let password = userData.password;
        let rePassword = userData.repeatPassword;

        if(username.length < 3 || password !== rePassword || password.length < 6 || firstName.length < 2 || lastName.length < 2){
            return false;
        }

        return true;
    }

    const getRegister = function(context){
        let loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        if(loggedIn){
            let names = JSON.parse(storage.getData('userInfo')).firstName + ' ' + JSON.parse(storage.getData('userInfo')).lastName;
            context.names = names;
        }

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        })
        .then(function(){
            this.partial('../views/user/register.hbs');
        });
    }

    const postRegister = function(context){
        if(!userDataIsValid(context.params)){
            return;
        }

        userService.register(context.params)
        .then(response => response.json())
        .then(data => {
            storage.saveUser(data);
            context.redirect('#/home');
        });
    }

    const getLogin = function(context){
        let loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        if(loggedIn){
            let names = JSON.parse(storage.getData('userInfo')).firstName + ' ' + JSON.parse(storage.getData('userInfo')).lastName;
            context.names = names;
        }

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
        })
        .catch(err => console.log(err));
    }

    const logout = function(context){
        userService.logout()
        .then(response => response.json())
        .then(data => {
            storage.deleteUser();
            context.redirect('#/home');
        })
        .catch(err => location.reload());
        
    }

    return {
        getRegister,
        postRegister,
        getLogin,
        postLogin,
        logout
    };
}();