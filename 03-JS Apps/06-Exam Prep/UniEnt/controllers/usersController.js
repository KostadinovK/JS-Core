const usersController = function(){
    const getLogin = function(context){
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function(){
            this.partial('../views/forms/signin.hbs');
        });
    }

    const postLogin = function(context){
        userService.login(context.params)
        .then(response => response.json())
        .then(data => {
            storage.saveUser(data);
            context.redirect('#/home');
        })
    }

    const getRegister = function(context){
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function(){
            this.partial('../views/forms/signup.hbs');
        });
    }

    const postRegister = function(context){
        userService.register(context.params)
        .then(response => {
            if(response.status < 400){
                return response.json();
            }
        })
        .then(data => {
            storage.saveUser(data);
            context.redirect('#/home');
        });
    }

    const logout = function(context){
        userService.logout()
        .then(response => response)
        .then(() => {
            storage.deleteUser();
            context.redirect('#/home');
        });
    }

    const getProfile = async function(context){
        const loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        if(loggedIn){
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;    
        }

        let username = JSON.parse(storage.getData('userInfo')).username;
        let userEvents = [];

        await eventsService.loadEvents()
        .then(response => response.json())
        .then(events => events.reduce((arr, event) => {
            if(event.organizer === JSON.parse(storage.getData('userInfo')).username){
                arr.push(event);
            }
            return arr;
        }, userEvents));

        context.username = username;
        context.hasEvents = userEvents.length !== 0;
        context.events = userEvents;
        context.eventCount = userEvents.length;
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        })
        .then(function(){
            this.partial('../views/profile/profile.hbs');
        });
    }

    return {
        getRegister,
        getLogin,
        getProfile,
        postLogin,
        postRegister,
        logout
    };
}();