(() => {
    let rootDiv = document.getElementById('root');
    let townsInput = document.getElementById('towns');
    let loadBtn = document.getElementById('btnLoadTowns');

    loadBtn.addEventListener('click', loadTowns);

    async function loadTowns(){
        if(townsInput.value === ''){
            return;
        }

        let items = helper.parseData(townsInput.value);
        townsInput.value = '';
        
        let partialString = await template.getTemplateString('listItem');
        template.makePartial('item', partialString);
        
        let templateFunc = await template.getTemplateFunc('list');
        
        rootDiv.innerHTML = templateFunc({items});
    }
   
})();