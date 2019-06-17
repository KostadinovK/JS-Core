function attachEventsListeners() {

    let metersPerUnit = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    let distance = document.getElementById('inputDistance');
    let inputUnits = document.getElementById('inputUnits');
    let convertBtn = document.getElementById('convert');

    let outputDistance = document.getElementById('outputDistance');
    let outputUnits = document.getElementById('outputUnits');

    convertBtn.addEventListener('click', () => {
        if(distance.value === ''){
            return;
        }

        let meters = metersPerUnit[inputUnits.value] * Number(distance.value);
        let result = meters / metersPerUnit[outputUnits.value];
        outputDistance.value = result;
    });
}