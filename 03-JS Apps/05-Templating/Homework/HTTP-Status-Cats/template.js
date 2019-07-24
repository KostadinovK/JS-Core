(() => {
    let catsDiv = document.getElementById('allCats');

    renderCatTemplate();

    async function renderCatTemplate() {
        let templateFunc = await getTemplateFunc('card');

        for (const cat of window.cats) {
            catsDiv.innerHTML += templateFunc(cat);
        }

        const infoBtns = catsDiv.querySelectorAll('.btn');
        
        Array.from(infoBtns)
        .forEach((btn) => {
            btn.addEventListener('click', (event) => {
                let catDiv = event.target.parentElement;
                let detailsDiv = catDiv.querySelector('.card-block div');

                if(detailsDiv.style.display === 'block'){
                    event.target.textContent = 'Show status code';
                    detailsDiv.style.display = 'none';
                }else{
                    
                    event.target.textContent = 'Hide status code';
                    detailsDiv.style.display = 'block';
                }
            });
        });

        async function getTemplateFunc(filename) {
            const url = `./templates/${filename}.hbs`;

            let string = await fetch(url).then(response => response.text());
            let templateFunc = await Handlebars.compile(string);

            return templateFunc;
        }
    }
    

})();
