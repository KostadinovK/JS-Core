function getInfo() {
    let stopId = document.getElementById('stopId').value;
    document.getElementById('stopId').value = '';
    let stopName = document.getElementById('stopName');
    let busesList = document.getElementById('buses');
    const url = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;

    fetch(url)
    .then(response => response.json())
    .then(data => displayBusesTime(data))
    .catch(err => stopName.textContent = 'Error');

    function displayBusesTime(data){
        stopName.textContent = data.name;
        let buses = Object.entries(data.buses);
        for (const bus of buses) {
            let listItem = createListItem(bus);
        }
    }

    function createListItem(bus){
        let listItem = document.createElement('li');
        let [busNumber, arrivalTime] = bus;
        listItem.textContent = `Bus ${busNumber} arrives in ${arrivalTime} minutes`;
        busesList.appendChild(listItem);
    }
}