const app = Sammy('#main', function(){
    this.use('Handlebars', 'hbs');

    /*Home*/
    this.get('#/home', homeController.getHome);

    /*Register*/
    this.get('#/register', usersController.getRegister);
    this.post('#/register', usersController.postRegister);

    /*LogIn*/
    this.get('#/login', usersController.getLogin);
    this.post('#/login', usersController.postLogin);

    /*LogOut*/
    this.get('#/logout',usersController.logout);

    /*Organize events*/
    this.get('#/organize', eventsController.getOrganize);
    this.post('#/organize', eventsController.postOrganize);

    /*Event Details*/
    this.get('#/events/:id', eventsController.getEventDetails);

    /*View Profile*/
    this.get('#/profile', usersController.getProfile);

    /*Join Event*/
    this.get('#/join/:id', eventsController.joinEvent);

    /*Edit Event*/
    this.get('#/edit/:id', eventsController.getEdit);
    this.post('#/edit/:id', eventsController.postEdit);

    /*Delete Event*/
    this.get('#/delete/:id', eventsController.deleteEvent);

});

(() => {
    app.run('#/home');
})();