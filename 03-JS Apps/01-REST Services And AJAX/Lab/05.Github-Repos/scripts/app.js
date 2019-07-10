function loadRepos() {
	let reposList = document.getElementById('repos');
	reposList.innerHTML = '';
	let username = document.getElementById('username').value;

	const url = `https://api.github.com/users/${username}/repos`;

	fetch(url)
	.then(response => response.json())
	.then(repos => displayRepos(repos))
	.catch(err => displayError(err));

	function displayRepos(repos){
		for (const repo of repos) {
			let {full_name, html_url} = repo;
			let listItem = document.createElement('li');
			reposList.appendChild(listItem);
			let link = document.createElement('a');
			listItem.appendChild(link);
			link.href = `${html_url}`;
			link.textContent = `${full_name}`;
		}
	}

	function displayError(error) {
		let listItem = document.createElement('li');
		reposList.appendChild(listItem);
		listItem.textContent = error;
	}
}