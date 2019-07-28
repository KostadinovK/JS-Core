const eventsController = function(){
    const getOrganize =  function(context){
        const loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        if(loggedIn){
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;    
        }

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        })
        .then(function(){
            this.partial('../views/forms/organizeEvent.hbs');
        });
    }

    const postOrganize = function(context){
        eventsService.createEvent(context.params);
        context.redirect('#/home');
    }

    const getEventDetails = async function(context){
        
        const loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        if(loggedIn){
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;    
        }

        const eventId = context.params.id;
        await eventsService.loadEventDetails(eventId)
        .then(response => response.json())
        .then(event => {
            context.id = event._id;
            context.isCreator = event.organizer === JSON.parse(storage.getData('userInfo')).username;
            context.name = event.name;
            context.imageURL = event.imageURL;
            context.description = event.description,
            context.dateTime = event.dateTime,
            context.organizer = event.organizer,
            context.peopleInterestedIn = event.peopleInterestedIn

            context.loadPartials({
                header: '../views/common/header.hbs',
                footer: '../views/common/footer.hbs'
            })
            .then(function(){
                this.partial('../views/events/eventDetails.hbs');
            });
        });
    }

    const joinEvent = async function(context){
        let eventId = context.params.id;
       
        let modifiedEvent = {};

        await eventsService.loadEventDetails(eventId)
        .then(response => response.json())
        .then(event => {
            context.isCreator = event.organizer === JSON.parse(storage.getData('userInfo')).username;
            modifiedEvent.name = event.name,
            modifiedEvent.imageURL = event.imageURL,
            modifiedEvent.description = event.description,
            modifiedEvent.dateTime = event.dateTime,
            modifiedEvent.organizer = event.organizer,
            modifiedEvent.peopleInterestedIn = event.peopleInterestedIn + 1
        });

        eventsService.editEvent(eventId, modifiedEvent);
        context.redirect('#/home');
    }

    const getEdit = async function(context){
        const loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        if(loggedIn){
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;    
        }

        let eventId = context.params.id;
        context.id = eventId;

        await eventsService.loadEventDetails(eventId)
        .then(response => response.json())
        .then(event => {
            context.name = event.name;
            context.dateTime = event.dateTime;
            context.imageURL = event.imageURL;
            context.description = event.description;
            context.organizer = event.organizer;
            context.peopleInterestedIn = event.peopleInterestedIn
        });

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        })
        .then(function(){
            this.partial('../views/forms/editEvent.hbs');
        });
    }

    const postEdit = function(context){
        let body = {
            name: context.params.name,
            dateTime: context.params.dateTime,
            imageURL: context.params.imageURL,
            description: context.params.imageURL,
            organizer: context.params.organizer,
            peopleInterestedIn: context.params.peopleInterestedIn
        };

        eventsService.editEvent(context.params.id, body);
        context.redirect('#/home');
    }

    const deleteEvent = function(context){
        let eventId = context.params.id;
        eventsService.deleteEvent(eventId);
        context.redirect('#/home');
    }

    return {
        getOrganize,
        postOrganize,
        getEventDetails,
        joinEvent,
        getEdit,
        postEdit,
        deleteEvent
    }
}();