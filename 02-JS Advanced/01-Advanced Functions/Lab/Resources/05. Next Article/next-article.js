function getArticleGenerator(input){   
	let index = 0;
	let content = document.querySelector('#content');
	return function(){
		if(index >= input.length){
			return;
		}
		
		content.innerHTML += `<article>${input[index]}</article>`;
		index++;
	};
}