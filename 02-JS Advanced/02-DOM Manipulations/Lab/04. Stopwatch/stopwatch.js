function stopwatch() {
    let time = document.getElementById('time');
    let startButton = document.getElementById('startBtn');
    let stopButton = document.getElementById('stopBtn');

    startButton.addEventListener('click', () => {
        startButton.setAttribute('disabled', 'true');
        stopButton.removeAttribute('disabled');
        time.textContent = '00:00';
    });

    stopButton.addEventListener('click', () => {
        stopButton.setAttribute('disabled', 'true');
        startButton.removeAttribute('disabled');
    });

    setInterval(() => {
        if(startButton.getAttribute('disabled') === 'true'){
            let [minutes, seconds] = time.textContent.split(':');
            minutes = Number(minutes);
            seconds = Number(seconds);
            seconds++;
            if(seconds >= 60){
                seconds = 0;
                minutes++;
            }
            
            let newTime = minutes < 10 ? `0${minutes}:` : `${minutes}:`;
            newTime += seconds < 10 ? `0${seconds}` : `${seconds}`;
            time.textContent = newTime;
        }
    }, 1000);
}   