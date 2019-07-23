const app = Sammy("#main", function () {

    this.use('Handlebars', 'hbs');

    // Home
    this.get('#/home', homeController.getHome);
    
    this.get('#/about', aboutController.getAbout);

    this.get('#/catalog', catalogController.getCatalog);
    this.get('#/catalog/:id', catalogController.getTeamDetails);
    // User
    this.get('#/register', userController.getRegister);
    this.get('#/login', userController.getLogin);

    this.post('#/register', userController.postRegister);
    this.post('#/login', userController.postLogin);
    this.get('#/logout', userController.logout);
    
});

(() => {
    app.run('#/home');
})();