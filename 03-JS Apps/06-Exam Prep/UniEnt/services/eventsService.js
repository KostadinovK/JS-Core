const eventsService = function(){
    const loadEvents = function(){
        const url = '/appdata/kid_rJ5mfI3WH/events';
        
        let headers = {
            headers: {
                Authorization: `Kinvey ${storage.getData('authToken')}`
            }
        };

        return requester.get(url, headers);
    };

    const createEvent = function(params){
        const name = params.name;
        const dateTime = params.dateTime;
        const description = params.description;
        const imageURL = params.imageURL;
        const organizer = JSON.parse(storage.getData('userInfo')).username;

        const url = `/appdata/${storage.appKey}/events`;
        const event = {
            name,
	        dateTime,
	        description,
	        imageURL,
	        peopleInterestedIn: 0,
            organizer
        }

        let headers = {
            body: JSON.stringify(event),
            headers: {
                Authorization: `Kinvey ${storage.getData('authToken')}`
            }
        };
        requester.post(url, headers);
    }

    const loadEventDetails = function(eventId){
        const url = `/appdata/${storage.appKey}/events/${eventId}`;

        let headers = {
            headers: {
                Authorization: `Kinvey ${storage.getData('authToken')}`
            }
        };
        return requester.get(url, headers);
    }

    const editEvent = function(eventId, eventBody){
        const url = `/appdata/${storage.appKey}/events/${eventId}`;

        let headers = {
            headers: {
                Authorization: `Kinvey ${storage.getData('authToken')}`
            },
            body: JSON.stringify(eventBody)
        };

        return requester.put(url, headers);
    }

    const deleteEvent = function(eventId){
        const url = `/appdata/${storage.appKey}/events/${eventId}`;

        let headers = {
            headers: {
                Authorization: `Kinvey ${storage.getData('authToken')}`
            }
        };

        return requester.del(url, headers);
    }

    return {
        loadEvents,
        createEvent,
        loadEventDetails,
        editEvent,
        deleteEvent
    };
}();