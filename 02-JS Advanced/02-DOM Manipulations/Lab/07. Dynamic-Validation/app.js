function validate() {
    let input = document.getElementById('email');

    input.addEventListener('change', (ev) => {
        let emailPattern = /[a-z]*@[a-z]*\.[a-z]*/g;
        if(!emailPattern.test(ev.target.value)){
            ev.target.classList.add('error');
        }else{
            ev.target.classList.remove('error');
        }
    });
}