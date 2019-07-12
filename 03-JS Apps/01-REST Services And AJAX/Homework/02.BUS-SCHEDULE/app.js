function solve() {
    let infoSpan = document.querySelector('.info');
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
    const baseUrl = 'https://judgetests.firebaseio.com/schedule/';
    let currentStop = 'depot';

    function depart() {
        departBtn.setAttribute('disabled', true);
        arriveBtn.disabled = false;
        let url = baseUrl + currentStop + '.json';

        fetch(url)
        .then(response => response.json())
        .then(data => {
            currentStop = data.next;
            infoSpan.textContent = `Next stop ${data.name}`;
        }).catch(err => infoSpan.textContent = err);

    }

    function arrive() {
        arriveBtn.setAttribute('disabled', true);
        departBtn.disabled = false;
        let url = baseUrl + currentStop + '.json';

        fetch(url)
        .then(response => response.json())
        .then(data => {
            currentStop = data.next;
            infoSpan.textContent = `Arriving at ${data.name}`;
        }).catch(err => infoSpan.textContent = err);

    }

    return {
        depart,
        arrive
    };
}

let result = solve();