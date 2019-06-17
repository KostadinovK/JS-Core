function toggle() {
    let btn = document.querySelector('.button');
    let extraDiv = document.getElementById('extra');

    if(btn.textContent === 'More'){
        btn.textContent = 'Less';
        extraDiv.style.display = 'block';
    }else{
        btn.textContent = 'More';
        extraDiv.style.display = 'none';
    }
}