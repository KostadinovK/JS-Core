const offerService = function(){

    const IsValidData = function(product, description, price, pictureUrl){

        if(product.length < 1 
            || product === ' '
            || product === null
            || description.length < 1 
            || description === ' '
            || description === null
            || price.length < 1 
            || price === ' '
            || price === null
            || price != Number(price)){
                return false;
        }
        
        return true;
    }

    const loadOffers = function(){
        const url = `/appdata/${storage.appKey}/${storage.collectionName}`;
        
        let headers = {
            headers: {
                Authorization: `Kinvey ${storage.getData('authToken')}`
            }
        };

        return requester.get(url, headers);
    };

    const createOffer = function(params){
        const product = params.product;
        const description = params.description;
        let price = params.price;
        const pictureUrl = params.pictureUrl;

        if(!IsValidData(product, description, price, pictureUrl)){
            return;
        }

        price = Number(price);

        const url = `/appdata/${storage.appKey}/${storage.collectionName}`;
        const offer = {
           product,
           description,
           price,
           pictureUrl
        }

        let headers = {
            body: JSON.stringify(offer),
            headers: {
                Authorization: `Kinvey ${storage.getData('authToken')}`
            }
        };
        requester.post(url, headers);
    }

    const loadOfferDetails = function(offerId){
        const url = `/appdata/${storage.appKey}/${storage.collectionName}/${offerId}`;

        let headers = {
            headers: {
                Authorization: `Kinvey ${storage.getData('authToken')}`
            }
        };
        return requester.get(url, headers);
    }

    const editOffer = function(offerId, offerBody){

        if(!IsValidData(offerBody.product, offerBody.description, offerBody.price, offerBody.pictureUrl)){
            return;
        }

        offerBody.price = Number(offerBody.price);

        const url = `/appdata/${storage.appKey}/${storage.collectionName}/${offerId}`;

        let headers = {
            headers: {
                Authorization: `Kinvey ${storage.getData('authToken')}`
            },
            body: JSON.stringify(offerBody)
        };

        return requester.put(url, headers);
    }

    const deleteOffer = function(offerId){
        const url = `/appdata/${storage.appKey}/${storage.collectionName}/${offerId}`;

        let headers = {
            headers: {
                Authorization: `Kinvey ${storage.getData('authToken')}`
            }
        };

        return requester.del(url, headers);
    }

    return {
        loadOffers,
        createOffer,
        loadOfferDetails,
        editOffer,
        deleteOffer
    };
}();