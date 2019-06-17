function attachEventsListeners() {
    let inputs = {
        days: document.getElementById('days'), 
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };

    let btns = {
        days: document.getElementById('daysBtn'), 
        hours: document.getElementById('hoursBtn'),
        minutes: document.getElementById('minutesBtn'),
        seconds: document.getElementById('secondsBtn')
    }

    Object.entries(btns).forEach(([label, btn]) => {
        btn.addEventListener('click', () => {
            if(inputs[label].value !== ''){
                let time = Number(inputs[label].value);
                switch(label){
                    case 'days':
                        convertDays(time);
                        break;
                    case 'hours':
                        convertHours(time);
                        break;
                    case 'minutes':
                        convertMinutes(time);
                        break;
                    case 'seconds':
                        convertSeconds(time);
                        break;
                }
            }
        });
    });

    function convertDays(days){
        inputs.hours.value = days * 24;
        inputs.minutes.value = inputs.hours.value * 60;
        inputs.seconds.value = inputs.minutes.value * 60;
    }

    function convertHours(hours){
        inputs.days.value = hours / 24;
        inputs.minutes.value = hours * 60;
        inputs.seconds.value = inputs.minutes.value * 60;
    }

    function convertMinutes(minutes){
        inputs.hours.value = minutes / 60;
        inputs.seconds.value = minutes * 60;
        inputs.days.value = inputs.hours.value / 24;
    }

    function convertSeconds(seconds){
        inputs.minutes.value = seconds / 60;
        inputs.hours.value = inputs.minutes.value / 60;
        inputs.days.value = inputs.hours.value / 24;
    }
    
}