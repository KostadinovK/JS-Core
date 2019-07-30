const movieController = function(){
    const getAdd = function(context){
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
            this.partial('../views/movie/add.hbs');
        });
    }

    const postAdd = function(context){
        movieService.createMovie(context.params)
        context.redirect('#/cinema');
    }

    const getAllMovies = function(context){

        let loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        if(loggedIn){
            let username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
        }

        movieService.loadMovies()
        .then(response => response.json())
        .then(movies => {
            context.movies = movies;
            context.loadPartials({
                header: '../views/common/header.hbs',
                footer: '../views/common/footer.hbs',
                movie: '../views/movie/movie.hbs'
            })
            .then(function(){
                this.partial('../views/movie/cinema.hbs');
            });
        });
    }

    const getMyMovies = function(context){
        let loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        if(loggedIn){
            let username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
        }

        movieService.loadMyMovies()
        .then(response => response.json())
        .then(movies => {
            context.movies = movies;
            context.loadPartials({
                header: '../views/common/header.hbs',
                footer: '../views/common/footer.hbs',
                movie: '../views/movie/myMovie.hbs'
            })
            .then(function(){
                this.partial('../views/movie/myMovies.hbs');
            });
        });
    }

    const search = function(context){
        let loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        if(loggedIn){
            let username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
        }

        movieService.loadMovies()
        .then(response => response.json())
        .then(movies => {
            for (let movie of movies) {
                movie.genres = movie.genres.split(' ');
            }
            
            context.movies = movies.filter(m => m.genres.includes(context.params.search));
            context.loadPartials({
                header: '../views/common/header.hbs',
                footer: '../views/common/footer.hbs',
                movie: '../views/movie/movie.hbs'
            })
            .then(function(){
                this.partial('../views/movie/cinema.hbs');
            });
        });
    }

    const getDelete = async function(context){
        let loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        if(loggedIn){
            let username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
        }

        await movieService.loadMovieDetails(context.params.id)
        .then(response => response.json())
        .then(movie => {
            context.id = movie._id;
            context.title = movie.title;
            context.description = movie.description,
            context.tickets = movie.tickets,
            context.imageURL = movie.imageURL,
            context.genres = movie.genres
        });

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        })
        .then(function(){
            this.partial('../views/movie/delete.hbs');
        });
    }

    const postDelete = function(context){
        movieService.deleteMovie(context.params.id);
        context.redirect('#/cinema');
    }

    const getDetails = async function(context){
        let loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        if(loggedIn){
            let username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
        }

        await movieService.loadMovieDetails(context.params.id)
        .then(response => response.json())
        .then(movie => {
            context.id = movie._id;
            context.title = movie.title;
            context.description = movie.description,
            context.tickets = movie.tickets,
            context.imageURL = movie.imageURL,
            context.genres = movie.genres
        });

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        })
        .then(function(){
            this.partial('../views/movie/details.hbs');
        });
    }

    const getEdit = async function(context){
        let loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        if(loggedIn){
            let username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
        }

        await movieService.loadMovieDetails(context.params.id)
        .then(response => response.json())
        .then(movie => {
            context.id = movie._id;
            context.title = movie.title;
            context.description = movie.description,
            context.tickets = movie.tickets,
            context.imageURL = movie.imageURL,
            context.genres = movie.genres
        });

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        })
        .then(function(){
            this.partial('../views/movie/edit.hbs');
        });
    }

    const postEdit = function(context){
        let movie = {
            title: context.params.title,
            description: context.params.description,
            imageURL: context.params.imageUrl,
            tickets: Number(context.params.tickets),
            genres: context.params.genres
        };
        
        movieService.editMovie(context.params.id, movie)
        .then(response => {
            notifier.notify('info', 'Film Successfully edited');
            return response.json();
        })
        .catch(err => notifier.notify('error', err));
        setTimeout(() => context.redirect('#/movies/my'), 1000);;
    }

    const buyTicket = async function(context){
        let newMovie = {};

        await movieService.loadMovieDetails(context.params.id)
        .then(response => response.json())
        .then(movie => {
            newMovie = movie;
        });

        if(newMovie.tickets < 1){
            return;
        }

        newMovie.tickets--;
        movieService.editMovie(context.params.id, newMovie)
        .then(response => {
            notifier.notify('info', 'Ticked for film successfully buyed');
            return response.json();
        })
        .catch(err => notifier.notify('error', err));
        setTimeout(() => context.redirect('#/cinema'), 1000);
    }

    return {
        getAdd,
        postAdd,
        getAllMovies,
        getMyMovies,
        search,
        getDelete,
        postDelete,
        getDetails,
        getEdit,
        postEdit,
        buyTicket
    };
}();