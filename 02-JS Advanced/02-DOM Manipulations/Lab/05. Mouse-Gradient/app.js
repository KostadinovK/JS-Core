function attachGradientEvents() {
    let gradientBox = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    gradientBox.addEventListener('mousemove', (event) => {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = `${power}%`;
    });

    gradientBox.addEventListener('mouseout', () => 
        resultElement.innerText = '');
}