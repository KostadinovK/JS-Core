(async () => {
    await displayContent();
    addButtonsFunctionality();

    async function displayContent(){
        let section = document.querySelector('section');
        let monkeys = window.monkeys;
        let partialString = await template.getTemplateString('monkey');
        template.makePartial('monkey', partialString);
    
        let templateFunc = await template.getTemplateFunc('monkeys');
        section.innerHTML = templateFunc({monkeys});
    }

    function addButtonsFunctionality(){
        let infoBtns = document.querySelectorAll('button');
        Array.from(infoBtns)
        .forEach(btn => {
            btn.addEventListener('click', (event) => {
                let infoSection = event.target.parentElement.querySelector('p');
                if(infoSection.style.display === 'block'){
                    infoSection.style.display = 'none';
                }else{
                    infoSection.style.display = 'block';
                }
            });
        });
    }
})();