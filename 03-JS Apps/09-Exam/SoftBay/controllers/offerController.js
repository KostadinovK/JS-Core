const offerController = function(){
    const getCreate = function(context){
        let loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        })
        .then(function(){
            this.partial('../views/offer/create.hbs');
        });
    }

    const postCreate = function(context){
        offerService.createOffer(context.params);
        context.redirect('#/dashboard');
    }

    const getDashboard = async function(context){
        let loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        await offerService.loadOffers()
        .then(response => response.json())
        .then(offers => {
            context.offers = offers;
            for (const offer of offers) {
                offer.isCreator = offer._acl.creator === JSON.parse(storage.getData('userInfo'))._id
            }
        })
        .catch(err => console.log(err));

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs',
            offer: '../views/offer/offer.hbs',
            noOffers: '../views/offer/noOffers.hbs'
        })
        .then(function(){
            this.partial('../views/offer/dashboard.hbs');
        });
    }

    const getDetails = async function(context){
        let loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        await offerService.loadOfferDetails(context.params.id)
        .then(response => response.json())
        .then(offer => {
            context.offer = offer;
        })
        .catch(err => console.log(err));

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        })
        .then(function(){
            this.partial('../views/offer/details.hbs');
        });
    }

    const getDelete = async function(context){
        let loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        await offerService.loadOfferDetails(context.params.id)
        .then(response => response.json())
        .then(offer => {
            context.offer = offer;
        })
        .catch(err => console.log(err));

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        })
        .then(function(){
            this.partial('../views/offer/delete.hbs');
        });
    }

    const postDelete = function(context){
        offerService.deleteOffer(context.params.id)
        .then(response => response.json())
        .then(data => context.redirect('#/dashboard'));
    }

    const getEdit = async function(context){
        let loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        await offerService.loadOfferDetails(context.params.id)
        .then(response => response.json())
        .then(offer => {
            context.offer = offer;
        })
        .catch(err => console.log(err));

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        })
        .then(function(){
            this.partial('../views/offer/edit.hbs');
        });
    }   

    const postEdit = function(context){
        let body = {
            product: context.params.product,
            description: context.params.description,
            price: context.params.price,
            pictureUrl: context.params.pictureUrl
        };
        
        offerService.editOffer(context.params.id, body)
        .then(context.redirect(`#/dashboard`));
    }

    return {
        getCreate,
        postCreate,
        getDashboard,
        getDetails,
        getDelete,
        postDelete,
        getEdit,
        postEdit
    };
}();