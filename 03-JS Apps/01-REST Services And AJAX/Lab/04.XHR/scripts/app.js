function loadRepos() {
   var request = new XMLHttpRequest();

   request.onreadystatechange = visualizeResponse;

   request.open("GET", "https://api.github.com/users/testnakov/repos", true);
   request.send();

   function visualizeResponse(){
      if(this.readyState === 4 && this.status === 200){
         let div = document.getElementById('res');
         div.textContent = this.responseText;
      }
   }
}