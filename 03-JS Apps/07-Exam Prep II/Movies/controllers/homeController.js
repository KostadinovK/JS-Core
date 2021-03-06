const homeController = function(){
    const getHome = function(context){
        let loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;
        
        if(loggedIn){
            let username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
        }

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        })
        .then(function(){
            this.partial('../views/home/home.hbs');
        });
    }

    return {
        getHome
    };
}();