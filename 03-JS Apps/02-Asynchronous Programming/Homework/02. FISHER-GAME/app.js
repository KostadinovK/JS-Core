function attachEvents() {
    let loadBtn = document.querySelector('.load');
    let addBtn = document.querySelector('.add');

    let catchesDiv = document.getElementById('catches');
    let anglerInput = document.querySelector('#addForm .angler');
    let weightInput = document.querySelector('#addForm .weight');
    let speciesInput = document.querySelector('#addForm .species');
    let locationInput = document.querySelector('#addForm .location');
    let baitInput = document.querySelector('#addForm .bait');
    let captureTimeInput = document.querySelector('#addForm .captureTime');

    loadBtn.addEventListener('click', loadCatches);
    addBtn.addEventListener('click', addCatch);

    function loadCatches(){
        const url = 'https://fisher-game.firebaseio.com/catches.json'; 

        catchesDiv.innerHTML = '';

        fetch(url)
        .then(response => response.json())
        .then(catches => {
            for (const key in catches) {
                displayCatch(catches[key], key);
            }
        })
        .catch(err => console.log(err));
    }

    function displayCatch(c, id){
        let catchDiv = document.createElement('div');
        catchesDiv.appendChild(catchDiv);
        catchDiv.classList.add('catch');
        catchDiv.setAttribute('data-id',id);

        catchDiv.innerHTML = 
        `<label>Angler</label>
        <input type="text" class="angler" value="${c.angler}" />
        <hr>
        <label>Weight</label>      
        <input type="number" class="weight" value="${c.weight}" />
        <hr>
        <label>Species</label>
        <input type="text" class="species" value="${c.species}" />
        <hr>
        <label>Location</label>
        <input type="text" class="location" value="${c.location}" />
        <hr>
        <label>Bait</label>
        <input type="text" class="bait" value="${c.bait}" />
        <hr>
        <label>Capture Time</label>
        <input type="number" class="captureTime" value="${c.captureTime}" />
        <hr></hr>`;

        let updateBtn = document.createElement('button');
        updateBtn.classList.add('update');
        catchDiv.appendChild(updateBtn);
        updateBtn.textContent = 'Update';
        updateBtn.addEventListener('click', updateCatch);


        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        catchDiv.appendChild(deleteBtn);
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteCatch);

    }

    function updateCatch(event){
        let catchDiv = event.target.parentElement;
        let catchId = catchDiv.getAttribute('data-id');
        
        const url = `https://fisher-game.firebaseio.com/catches/${catchId}.json`;

        let data = {
            angler: `${catchDiv.querySelector('.angler').value}`,
            weight: catchDiv.querySelector('.weight').value, 
            species: `${catchDiv.querySelector('.species').value}`, 
            location: `${catchDiv.querySelector('.location').value}`, 
            bait: `${catchDiv.querySelector('.bait').value}`, 
            captureTime: catchDiv.querySelector('.captureTime').value
        }
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data)
        })
        .catch(err => console.log(err));
    }

    function deleteCatch(event){
        let catchDiv = event.target.parentElement;
        let catchId = catchDiv.getAttribute('data-id');

        catchesDiv.removeChild(catchDiv);

        const url = `https://fisher-game.firebaseio.com/catches/${catchId}.json`;

        fetch(url, {
            method: 'DELETE'
        })
        .catch(err => console.log(err));
    }

    function addCatch(){
        const url = 'https://fisher-game.firebaseio.com/catches.json';

        let data = {
            angler: `${anglerInput.value}`,
            weight: weightInput.value, 
            species: `${speciesInput.value}`, 
            location: `${locationInput.value}`, 
            bait: `${baitInput.value}`, 
            captureTime: captureTimeInput.value
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .catch(err => console.log(err));

        loadCatches();
    }
}

attachEvents();

