const app = Sammy('#container', function(){
    this.use('Handlebars', 'hbs');

    this.get('#/home', homeController.getHome);

    this.get('#/register', userController.getRegister);
    this.post('#/register', userController.postRegister);

    this.get('#/login', userController.getLogin);
    this.post('#/login', userController.postLogin);

    this.get('#/logout', userController.logout);

    this.get('#/movie/all', movieController.search);

    this.get('#/movie/create', movieController.getAdd);
    this.post('#/movie/create', movieController.postAdd);

    this.get('#/cinema', movieController.getAllMovies);
    this.get('#/movies/my', movieController.getMyMovies);

    this.get('#/movies/delete/:id', movieController.getDelete);
    this.post('#/movies/delete/:id', movieController.postDelete);

    this.get('#/movies/details/:id', movieController.getDetails);

    this.get('#/movies/edit/:id', movieController.getEdit);
    this.post('#/movies/edit/:id', movieController.postEdit);

    this.get('#/movies/buy/:id', movieController.buyTicket);
});

(() => {
    app.run('#/home');
})();