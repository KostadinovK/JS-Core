function focus() {
    let inputs = [...document.querySelectorAll('input')];

    inputs.forEach((input) => {
        input.addEventListener('focus', () => input.parentElement.classList.add('focused'));
        input.addEventListener('blur', () => input.parentElement.classList.remove('focused'));
    });
}