const homeController = function(){
    const getHome = async function(context){
        let loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        if (loggedIn) {
            let names = JSON.parse(storage.getData('userInfo')).firstName + ' ' + JSON.parse(storage.getData('userInfo')).lastName;
            context.names = names;

            await recipeService.loadRecipes()
                .then(response => response.json())
                .then(recipes => {
                    context.recipes = recipes;
                })
                .catch(err => console.log(err));
        }
        
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs',
            allRecipes: '../views/recipe/allrecipes.hbs',
            noRecipes: '../views/home/notFound.hbs',
            recipe: '../views/recipe/recipe.hbs',
            logged: '../views/home/logged.hbs',
            notLoggedIn: '../views/home/notLoggedIn.hbs'
        })
        .then(function(){
            this.partial('../views/home/home.hbs');
        });
    }

    return {
        getHome
    };
}();