const app = Sammy('#rooter', function(){
    this.use('Handlebars', 'hbs');

    this.get('#/home', homeController.getHome);

    this.get('#/register', userController.getRegister);
    this.post('#/register', userController.postRegister);

    this.get('#/login', userController.getLogin);
    this.post('#/login', userController.postLogin);

    this.get('#/logout', userController.logout);

    this.get('#/share', recipeController.getShare);
    this.post('#/share', recipeController.postShare);

    this.get('#/profile', recipeController.getMyRecipes);

    this.get('#/recipe/:id', recipeController.getRecipe);

    this.get('#/recipe/delete/:id', recipeController.deleteRecipe);

    this.get('#/recipe/edit/:id', recipeController.getEdit);
    this.post('#/recipe/edit/:id', recipeController.postEdit);

    this.get('#/recipe/like/:id', recipeController.like);
});

(() => {
    app.run('#/home');
})();