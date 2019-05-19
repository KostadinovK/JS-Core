function solve() {

   let searchBtn = document.getElementById('searchBtn');
   searchBtn.addEventListener('click', search);

   function search(){
      let selectedDataRows = document.querySelectorAll('tbody tr.select');

      for(let i = 0; i < selectedDataRows.length; i++){
         selectedDataRows[i].classList.remove('select');
      }

      let searchField = document.getElementById('searchField');
      if(searchField.value != ''){
         let data = document.querySelectorAll('tbody td');
         for (const text of data) {
               
            if(text.innerHTML.toLowerCase() === searchField.value.toLowerCase() || text.innerHTML.toLowerCase().includes(searchField.value.toLowerCase())){
               text.parentElement.classList.add('select');
            }
         }

         searchField.value = '';
      }
   }
}