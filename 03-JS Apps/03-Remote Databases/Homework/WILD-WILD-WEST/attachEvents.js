function attachEvents() {

    const user = 'test';
    const password = 'test123';
    const headers = {
        "Authorization": `Basic ${btoa(`${user}:${password}`)}`,
        "Content-Type": "application/json"
    };

    let playersContainer = document.getElementById('players');
    let nameInput = document.getElementById('addName');
    let addPlayerBtn = document.getElementById('addPlayer');

    window.onload = loadPlayers;
    addPlayerBtn.addEventListener('click', addPlayer);

    function loadPlayers(){
        playersContainer.innerHTML = '';

        const url = `https://baas.kinvey.com/appdata/kid_rJ5mfI3WH/players`;

        fetch(url,{
            headers
        })
        .then(response => response.json())
        .then(players => {
            for (const player of players) {
                displayPlayer(player);
            }
        })
        .catch(err => console.log(err));
    }

    function displayPlayer(player){
        let playerDiv = document.createElement('div');
        playersContainer.appendChild(playerDiv);
        playerDiv.classList.add('player');
        playerDiv.innerHTML = 
        `<p>Name: ${player.name}</p>
        <p>Money: ${player.money}</p>
        <p>Bullets: ${player.bullets}</p>
        <button class="play">Play</button>
        <button class="delete">Delete</button>`;

        let playBtn = playerDiv.querySelector('button');
        let deleteBtn = playerDiv.querySelector('.delete');

        playBtn.addEventListener('click', () => playGame(player, playerDiv));
        deleteBtn.addEventListener('click', () => deletePlayer(player._id, playerDiv));
    }

    function addPlayer(){
        if(nameInput.value === ''){
            return;
        }

        const url = `https://baas.kinvey.com/appdata/kid_rJ5mfI3WH/players`;

        const player = {
            name: nameInput.value,
            money: 500,
            bullets: 6
        };

        const body = JSON.stringify(player);
        
        nameInput.value = '';

        fetch(url, {
            method: 'POST',
            headers,
            body
        })
        .catch(err => console.log(err));

        displayPlayer(player);
    }

    function deletePlayer(playerId, playerDiv){
        const url = `https://baas.kinvey.com/appdata/kid_rJ5mfI3WH/players/${playerId}`;

        fetch(url, {
            method: 'DELETE',
            headers
        })
        .catch(err => console.log(err));

        playersContainer.removeChild(playerDiv);
    }

    function playGame(player, playerDiv){
        let saveBtn = document.getElementById('save');
        let reloadBtn = document.getElementById('reload');
        let canvas = document.querySelector('canvas');
        let playerFieldset = document.querySelector('fieldset');
        let addPlayerFieldset = document.getElementById('addPlayerFieldset');

        playerFieldset.style.display = 'none';
        addPlayerFieldset.style.display = 'none';
        saveBtn.style.display = 'block';
        reloadBtn.style.display = 'block';
        canvas.style.display = 'block';

        saveBtn.addEventListener('click', () => saveGame(playerDiv));

        reloadBtn.addEventListener('click', () => {
            if(player.money < 60 || player.bullets !== 0){
                return;
            }

            player.money -= 60;
            player.bullets = 6;
        });

        loadCanvas(player);

        function saveGame(playerDiv){

            const url = `https://baas.kinvey.com/appdata/kid_rJ5mfI3WH/players/${player._id}`;

            const body = JSON.stringify(player);
        

            fetch(url, {
                method: 'PUT',
                headers,
                body
            })
            .catch(err => console.log(err));

            clearInterval(canvas.intervalId);
            playerFieldset.style.display = 'block';
            addPlayerFieldset.style.display = 'block';
            saveBtn.style.display = 'none';
            reloadBtn.style.display = 'none';
            canvas.style.display = 'none';

            playerDiv.innerHTML = 
            `<p>Name: ${player.name}</p>
            <p>Money: ${player.money}</p>
            <p>Bullets: ${player.bullets}</p>
            <button class="play">Play</button>
            <button class="delete">Delete</button>`;

            let playBtn = playerDiv.querySelector('button');
            let deleteBtn = playerDiv.querySelector('.delete');

            playBtn.addEventListener('click', () => playGame(player, playerDiv));
            deleteBtn.addEventListener('click', () => deletePlayer(player._id, playerDiv));
        }
    }
}