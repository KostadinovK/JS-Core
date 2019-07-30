const movieService = function(){

    const IsValidData = function(title, description, imageURL, tickets){

        if(title.lenght < 6 
            || description.lenght < 10 
            || (!imageURL.startsWith('http://') && !imageURL.startsWith('https://')) 
            || tickets !== Number(tickets)){
                return false;
        }
        
        return true;
    }

    const loadMovies = function(){
        const url = `/appdata/${storage.appKey}/${storage.collectionName}`;
        
        let headers = {
            headers: {
                Authorization: `Kinvey ${storage.getData('authToken')}`
            }
        };

        return requester.get(url, headers);
    };

    const loadMyMovies = function(){
        const url = `/appdata/${storage.appKey}/${storage.collectionName}?query={"_acl.creator":"${JSON.parse(storage.getData('userInfo'))._id}"}`;
        
        let headers = {
            headers: {
                Authorization: `Kinvey ${storage.getData('authToken')}`
            }
        };

        return requester.get(url, headers);
    }

    const createMovie = function(params){
        const title = params.title;
        const tickets = Number(params.tickets);
        const description = params.description;
        const imageURL = params.imageUrl;
        const genres = params.genres;
        
        if(!IsValidData(title, description, imageURL, tickets)){
            return;
        }

        const url = `/appdata/${storage.appKey}/${storage.collectionName}`;
        const movie = {
            title,
	        tickets,
	        description,
	        imageURL,
            genres
        }

        let headers = {
            body: JSON.stringify(movie),
            headers: {
                Authorization: `Kinvey ${storage.getData('authToken')}`
            }
        };
        requester.post(url, headers);
    }

    const loadMovieDetails = function(movieId){
        const url = `/appdata/${storage.appKey}/${storage.collectionName}/${movieId}`;

        let headers = {
            headers: {
                Authorization: `Kinvey ${storage.getData('authToken')}`
            }
        };
        return requester.get(url, headers);
    }

    const editMovie = function(movieId, movieBody){

        if(!IsValidData(movieBody.title, movieBody.description, movieBody.imageURL, movieBody.tickets)){
           throw new Error('Invalid data');
        }

        const url = `/appdata/${storage.appKey}/${storage.collectionName}/${movieId}`;

        let headers = {
            headers: {
                Authorization: `Kinvey ${storage.getData('authToken')}`
            },
            body: JSON.stringify(movieBody)
        };

        return requester.put(url, headers);
    }

    const deleteMovie = function(movieId){
        const url = `/appdata/${storage.appKey}/${storage.collectionName}/${movieId}`;

        let headers = {
            headers: {
                Authorization: `Kinvey ${storage.getData('authToken')}`
            }
        };

        return requester.del(url, headers);
    }

    return {
        loadMovies,
        loadMyMovies,
        createMovie,
        loadMovieDetails,
        editMovie,
        deleteMovie
    };
}();