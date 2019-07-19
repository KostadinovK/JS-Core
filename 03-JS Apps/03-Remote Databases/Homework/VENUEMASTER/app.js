(() => {
    const user = 'guest';
    const passsword = 'pass';
    const headers = {
        "Authorization": `Basic ${btoa(`${user}:${passsword}`)}`,
        "Content-Type": 'application/json'
    };

    let venueDateInput = document.getElementById('venueDate');
    let getVenuesBtn = document.getElementById('getVenues');
    let venuesContainer = document.getElementById('venue-info');

    getVenuesBtn.addEventListener('click', loadVenuesId);

    function loadVenuesId(){
        if(venueDateInput.value === ''){
            return;
        }
        venuesContainer.innerHTML = '';

        let date = venueDateInput.value;

        venueDateInput.value = '';

        const url = `https://baas.kinvey.com/rpc/kid_BJ_Ke8hZg/custom/calendar?query=${date}`;

        fetch(url, {
            method: 'POST',
            headers
        })
        .then(response => response.json())
        .then(venuesId => {
            for (const venueId of venuesId) {
                displayVenue(venueId);
            }
        })
        .catch(err => console.log(err));
    }
    
    function displayVenue(venueId){
        const url = `https://baas.kinvey.com/appdata/kid_BJ_Ke8hZg/venues/${venueId}`;

        fetch(url, {
            headers
        })
        .then(response => response.json())
        .then(venue => {
            let venueDiv = document.createElement('div');
            venuesContainer.appendChild(venueDiv);
            venueDiv.classList.add('venue');
            venueDiv.id = venue._id;
            venueDiv.innerHTML = 
            `<span class="venue-name">${venue.name}<input class="info" type="button" value="More info"></span>
            <div class="venue-details" style="display: none;">
                <table>
                    <tr>
                        <th>Ticket Price</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td class="venue-price">${venue.price} lv</td>
                        <td><select class="quantity">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select></td>
                        <td><input class="purchase" type="button" value="Purchase"></td>
                    </tr>
                </table>
                <span class="head">Venue description:</span>
                <p class="description">${venue.description}</p>
                <p class="description">Starting time: ${venue.startingHour}</p>
            </div>`;

            let moreInfoBtn = venueDiv.querySelector('input[type="button"]');
            let detailsDiv = venueDiv.querySelector('div.venue-details');
            moreInfoBtn.addEventListener('click', () => {
                if(detailsDiv.style.display === 'none'){
                    detailsDiv.style.display = 'block';
                }else{
                    detailsDiv.style.display = 'none';
                }
            });

            let quantity = venueDiv.querySelector('select.quantity');
            let purchaseBtn = venueDiv.querySelector('td input[type="button"]');
            
            purchaseBtn.addEventListener('click', () => displayConfirmPurchaseWindow(quantity.value, venue));
        })
        .catch(err => console.log(err));
    }


    function displayConfirmPurchaseWindow(quantity, venue){
        venuesContainer.innerHTML = 
        `<span class="head">Confirm purchase</span>
        <div class="purchase-info">
        <span>${venue.name}</span>
        <span>${quantity} x ${venue.price}</span>
        <span>Total: ${quantity * venue.price} lv</span>
        <input type="button" value="Confirm">
        </div>`;

        let confirmBtn = venuesContainer.querySelector('input');
        confirmBtn.addEventListener('click', () => confirmPurchase(venue._id, quantity));
    }

    function confirmPurchase(venueId, quantity){
        const url = `https://baas.kinvey.com/rpc/kid_BJ_Ke8hZg/custom/purchase?venue=${venueId}&qty=${quantity}`;

        fetch(url, {
            method: 'POST',
            headers
        })
        .then(response => response.json())
        .then(ticket => venuesContainer.innerHTML = ticket.html)
        .catch(err => console.log(err));
    }
})()