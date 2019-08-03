const recipeService = function(){

    const IsValidData = function(meal, ingredients, prepMethod, description, category){

        if(meal.length < 4 
            || description.length < 10
            || prepMethod.length < 10 
            || ingredients.length < 2
            || category === "Select category..."){
                return false;
        }
        
        return true;
    }

    const loadRecipes = function(){
        const url = `/appdata/${storage.appKey}/${storage.collectionName}`;
        
        let headers = {
            headers: {
                Authorization: `Kinvey ${storage.getData('authToken')}`
            }
        };

        return requester.get(url, headers);
    };

    const loadMyRecipes = function(){
        const url = `/appdata/${storage.appKey}/${storage.collectionName}?query={"_acl.creator":"${JSON.parse(storage.getData('userInfo'))._id}"}`;
        
        let headers = {
            headers: {
                Authorization: `Kinvey ${storage.getData('authToken')}`
            }
        };

        return requester.get(url, headers);
    }

    const createRecipe = function(params){
        const meal = params.meal;
        const ingredients = params.ingredients.split(', ');
        const prepMethod = params.prepMethod;
        const description = params.description;
        const foodImageURL = params.foodImageURL;
        const category = params.category;

        if(!IsValidData(meal, ingredients, prepMethod, description, category)){
            return;
        }

        const categoryImageURL = helper.getCategoryImage(category);

        const url = `/appdata/${storage.appKey}/${storage.collectionName}`;
        const recipe = {
            meal,
	        ingredients,
	        description,
	        prepMethod,
            foodImageURL,
            category,
            categoryImageURL,
            likesCounter: 0
        }

        let headers = {
            body: JSON.stringify(recipe),
            headers: {
                Authorization: `Kinvey ${storage.getData('authToken')}`
            }
        };
        requester.post(url, headers);
    }

    const loadRecipeDetails = function(recipeId){
        const url = `/appdata/${storage.appKey}/${storage.collectionName}/${recipeId}`;

        let headers = {
            headers: {
                Authorization: `Kinvey ${storage.getData('authToken')}`
            }
        };
        return requester.get(url, headers);
    }

    const editRecipe = function(recipeId, recipeBody){

        if(!IsValidData(recipeBody.meal, recipeBody.ingredients, recipeBody.prepMethod, recipeBody.description, recipeBody.category)){
            return;
        }

        const url = `/appdata/${storage.appKey}/${storage.collectionName}/${recipeId}`;

        let headers = {
            headers: {
                Authorization: `Kinvey ${storage.getData('authToken')}`
            },
            body: JSON.stringify(recipeBody)
        };

        return requester.put(url, headers);
    }

    const deleteRecipe = function(recipeId){
        const url = `/appdata/${storage.appKey}/${storage.collectionName}/${recipeId}`;

        let headers = {
            headers: {
                Authorization: `Kinvey ${storage.getData('authToken')}`
            }
        };

        return requester.del(url, headers);
    }

    return {
        loadRecipes,
        loadMyRecipes,
        createRecipe,
        loadRecipeDetails,
        editRecipe,
        deleteRecipe
    };
}();