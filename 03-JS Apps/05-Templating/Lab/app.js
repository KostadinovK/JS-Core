(async () => {
    let contactsDiv = document.getElementById('contacts');
    
    let partialString = await template.getTemplateString('contact');
    template.makePartial('contact', partialString);

    let templateFunc = await template.getTemplateFunc('contacts-list');
    contactsDiv.innerHTML = templateFunc({contacts});

    let detailsBtns = document.querySelectorAll('.detailsBtn');
    
    Array.from(detailsBtns).forEach(btn => {
        btn.addEventListener('click', (event) => {
            
            let contactDiv = event.target.parentElement;
            let detailsDiv = contactDiv.querySelector('.details');
            if(detailsDiv.style.display === 'block'){
                detailsDiv.style.display = 'none';
            }else{
                detailsDiv.style.display = 'block';
            }
            
        });
    });
})();