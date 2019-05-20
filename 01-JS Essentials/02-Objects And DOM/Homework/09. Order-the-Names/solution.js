function solve() {
    document.getElementsByTagName('button')[0].addEventListener('click', addName);;

    function addName(){
        let name = document.getElementsByTagName('input')[0].value.toLowerCase();
        name = name[0].toUpperCase() + name.slice(1);
        
        document.getElementsByTagName('input')[0].value = '';
            
        let placeInAlphabet = name[0].charCodeAt() - ('A'.charCodeAt() - 1);
    
        let bookRow = document.querySelector(`ol li:nth-child(${placeInAlphabet})`);
    
        let names = bookRow.textContent.split(', ').filter(n => n !== '');
        names = names.concat(name);
        names.sort(sortFnc);
        bookRow.textContent = names.join(', ');
    }

    /**
     * 
     * @param {String} a 
     * @param {String} b 
     */
    function sortFnc(a, b) {
        if (a.length < b.length) {
            return -1;
        }
        if (b.length > a.length) {
            return 1;
        }
        return 0;
    }
}