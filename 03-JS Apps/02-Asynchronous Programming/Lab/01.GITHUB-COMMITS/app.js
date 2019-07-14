function loadCommits() {
    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;

    if(username === '' || repo === ''){
        return;
    }

    let commitsList = document.getElementById('commits');
    commitsList.innerHTML = '';
    
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;

    fetch(url)
    .then(handler)
    .then(data => {
        let commits = data.map(d => {
            let message = d.commit.message;
            let author = d.commit.author.name;
            return {author, message};
        });

        for (const key in commits) {
           let li = document.createElement('li');
           commitsList.appendChild(li);
           li.textContent = `${commits[key].author}: ${commits[key].message}`;
        }
    });

    function handler(response){
        if(response.status > 300){
            let errorVisualizer = document.createElement('li');
            commitsList.appendChild(errorVisualizer);
            errorVisualizer.textContent = `Error: ${response.status} (${response.statusText})`;
        }else{
            return response.json();
        }
    }
}