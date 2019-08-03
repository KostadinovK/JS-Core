const recipeController = function(){
    const getShare = function(context){
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
            this.partial('../views/recipe/create.hbs');
        });
    }

    const postShare = function(context){
        recipeService.createRecipe(context.params)
        context.redirect('#/home');
        
    }

    const getRecipe = async function(context){
        let loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        if(loggedIn){
            let names = JSON.parse(storage.getData('userInfo')).firstName + ' ' + JSON.parse(storage.getData('userInfo')).lastName;
            context.names = names;
        }

        await recipeService.loadRecipeDetails(context.params.id)
        .then(response => response.json())
        .then(recipe => {
            context.recipe = recipe;
            context.isCreator = recipe._acl.creator === JSON.parse(storage.getData('userInfo'))._id;
        })
        .catch(err => console.log(err));

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        })
        .then(function(){
            this.partial('../views/recipe/details.hbs');
        });
    }

    const getMyRecipes = async function(context){
        let loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        if (loggedIn) {
            let names = JSON.parse(storage.getData('userInfo')).firstName + ' ' + JSON.parse(storage.getData('userInfo')).lastName;
            context.names = names;

            await recipeService.loadMyRecipes()
                .then(response => response.json())
                .then(recipes => {
                    context.recipes = recipes;
                })
                .catch(err => console.log(err));
        }
        
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs',
            recipe: '../views/recipe/recipe.hbs',
            noRecipes: './views/home/notFound.hbs'
        })
        .then(function(){
            this.partial('../views/recipe/myrecipes.hbs');
        });
    }

    const getEdit = async function(context){
        let loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        if(loggedIn){
            let names = JSON.parse(storage.getData('userInfo')).firstName + ' ' + JSON.parse(storage.getData('userInfo')).lastName;
            context.names = names;
        }

        await recipeService.loadRecipeDetails(context.params.id)
        .then(response => response.json())
        .then(recipe => {
            recipe.ingredients = recipe.ingredients.join(', ');
            context.recipe = recipe;
        })
        .catch(err => console.log(err));

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        })
        .then(function(){
            this.partial('../views/recipe/edit.hbs');
        });
    }

    const postEdit = function(context){
        let body = {
            meal: context.params.meal,
            ingredients: context.params.ingredients.split(', '),
            prepMethod: context.params.prepMethod,
            description: context.params.description,
            foodImageURL: context.params.foodImageURL,
            category: context.params.category,
            likesCounter: Number(context.params.likesCounter),
            categoryImageURL: helper.getCategoryImage(context.params.category)
        };
        
        recipeService.editRecipe(context.params.id, body)
        .then(context.redirect(`#/recipe/${context.params.id}`));
        
    }
    
    const like = async function(context){

        let body = {};

        await recipeService.loadRecipeDetails(context.params.id)
        .then(response => response.json())
        .then(recipe => {
            body = recipe;
            body.likesCounter = recipe.likesCounter + 1;
        })
        .catch(err => console.log(err));

        recipeService.editRecipe(context.params.id, body)
        .then(context.redirect(`#/recipe/${context.params.id}`));
        
    }

    const deleteRecipe = function(context){
        recipeService.deleteRecipe(context.params.id);
        context.redirect('#/home');
    }

    return {
        getShare,
        postShare,
        getRecipe,
        getMyRecipes,
        deleteRecipe,
        getEdit,
        postEdit,
        like
    };
}();