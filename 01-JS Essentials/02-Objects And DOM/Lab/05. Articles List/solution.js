function createArticle() {

	let inputElement = document.getElementById('createTitle');
	let textArea = document.getElementById('createContent');

	let title = inputElement.value;
	let content = textArea.value;

	if(title != '' && content != ''){
		inputElement.value = '';
		textArea.value = '';
		let articlesSection = document.getElementById('articles');
		articlesSection.innerHTML += `<article><h3>${title}</h3><p>${content}</p></article>`
	}
	
}