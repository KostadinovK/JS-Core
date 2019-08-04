const app = Sammy('#main', function(){
    this.use('Handlebars', 'hbs');

    /*Home*/
    this.get('#/home', homeController.getHome);

    /*Login*/
    this.get('#/login', userController.getLogin);
    this.post('#/login', userController.postLogin);

    /*Register*/
    this.get('#/register', userController.getRegister);
    this.post('#/register', userController.postRegister);

    /*Logout*/
    this.get('#/logout', userController.logout);

    /*Profile*/
    this.get('#/profile', userController.getProfile);

    /*Create Offer*/
    this.get('#/create', offerController.getCreate);
    this.post('#/create', offerController.postCreate);

    /*Dashboard*/
    this.get('#/dashboard', offerController.getDashboard);

    /*Offer Details*/
    this.get('#/offer/:id', offerController.getDetails);

    /*Delete Offer*/
    this.get('#/delete/:id', offerController.getDelete);
    this.post('#/delete/:id', offerController.postDelete);

    /*Edit Offer*/
    this.get('#/edit/:id', offerController.getEdit);
    this.post('#/edit/:id', offerController.postEdit);

    /*Buy Offer*/
    this.get('#/buy', userController.buy);
});

(() => {
    app.run('#/home');
})();