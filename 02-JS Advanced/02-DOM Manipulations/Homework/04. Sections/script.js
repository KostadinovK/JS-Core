function create(words) {
   let content = document.getElementById('content');

   for (const word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);
      content.appendChild(div);

      div.addEventListener('click', (ev) => ev.target.firstElementChild.style.display = 'block');
   }
}