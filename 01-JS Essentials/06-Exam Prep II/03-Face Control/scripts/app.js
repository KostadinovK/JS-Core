function getData () {
    let people = JSON.parse(document.querySelector('textarea').value);
    let peopleInElement = document.querySelector('#peopleIn p');
    let peopleOutElement = document.querySelector('#peopleOut p');
    let blacklistElement = document.querySelector('#blacklist p');
    
    let sortCriteria = people.pop();

    let peopleIn = [];
    let peopleOut = [];
    let blacklist = [];

    for (const person of people) {
        let names = {firstName: person.firstName, lastName: person.lastName};
        switch(person.action){
            case 'peopleIn':
                if (!blacklist.find(p => p.firstName === names.firstName && p.lastName === names.lastName)) {
                    peopleIn.push(names);
                }
                break;
            case 'peopleOut':
                if (peopleIn.find(p => p.firstName === names.firstName && p.lastName === names.lastName)) {
                    peopleOut.push(names);
                    let index = peopleIn.findIndex(p => p.firstName === names.firstName && p.lastName === names.lastName);
                    peopleIn.splice(index, 1);
                }
                break;
            case 'blacklist':
                blacklist.push(names);
                if (peopleIn.find(p => p.firstName === names.firstName && p.lastName === names.lastName)) {
                    peopleOut.push(names);
                    let index = peopleIn.findIndex(p => p.firstName === names.firstName && p.lastName === names.lastName);
                    peopleIn.splice(index, 1);
                }
                break;
        }
    }

    let result = {};
    result.peopleIn = peopleIn;
    result.peopleOut = peopleOut;
    result.blacklist = blacklist;

    if(sortCriteria.criteria !== '' && sortCriteria.action !== ''){
        result[sortCriteria.action] = result[sortCriteria.action].sort((a, b) => a[sortCriteria.criteria].localeCompare(b[sortCriteria.criteria]));
    }

    peopleInElement.textContent = result.peopleIn.map(p => JSON.stringify(p)).join(' ');
    peopleOutElement.textContent = result.peopleOut.map(p => JSON.stringify(p)).join(' ');
    blacklistElement.textContent = result.blacklist.map(p => JSON.stringify(p)).join(' ');
}