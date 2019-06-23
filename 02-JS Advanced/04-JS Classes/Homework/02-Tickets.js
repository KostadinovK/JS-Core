function sortTickets(ticketsData, sortingCriteria){

    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    for (const ticketData of ticketsData) {
        let [destination, price, status] = ticketData.split('|');
        price = Number(price);

        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }

    if(sortingCriteria === 'destination'){
        tickets.sort((a, b) => a.destination.localeCompare(b.destination));
    }else if(sortingCriteria === 'status'){
        tickets.sort((a, b) => a.status.localeCompare(b.status));
    }else if(sortingCriteria === 'price'){
        tickets.sort((a, b) => a.price - b.price);
    }

    return tickets;
}