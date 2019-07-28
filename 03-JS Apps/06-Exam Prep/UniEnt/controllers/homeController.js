const homeController = function(){
    const getHome = async function(context){
        const loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        if(loggedIn){
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;    
        }

        await eventsService.loadEvents()
        .then(response => response.json())
        .then(events => {
            for (let event of events) {
                event.peopleInterestedIn = Number(event.peopleInterestedIn);
            }
            
            context.events = events.sort((a, b) => b.peopleInterestedIn - a.peopleInterestedIn);
        });

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs',
            cta: '../views/cta.hbs',
            eventHolder: '../views/events/eventHolder.hbs',
            noEvents: '../views/events/notfound.hbs',
            event: '../views/events/event.hbs'
        }).then(function(){
            this.partial('../views/home/home.hbs');
        });
    }

    return{
        getHome
    };
}();