function attachEvents() {
    const url = 'https://rest-messanger.firebaseio.com/messanger.json';
    let authorField = document.getElementById('author');
    let messageField = document.getElementById('content');
    let messagesField = document.getElementById('messages');

    let sendBtn = document.getElementById('submit');
    let refreshBtn = document.getElementById('refresh');

    sendBtn.addEventListener('click', sendMessage);
    refreshBtn.addEventListener('click', refresh);

    function sendMessage(){
        if(authorField.value !== '' && messageField.value !== ''){

            let message = {author: authorField.value, content: messageField.value};

            fetch(url, {
                method: 'post',
                body: JSON.stringify(message)
            }).catch(err => console.log(err));

            authorField.value = '';
            messageField.value = '';
        }
    }

    function refresh(){
        fetch(url)
        .then(response => response.json())
        .then(messages => displayMessages(messages))
        .catch(err => console.log(err));
    }

    function displayMessages(messages){
        for (const key in messages) {
            console.log(messages[key].content);
            messagesField.value += `${messages[key].author}: ${messages[key].content}\n`;
        }
    }
}

attachEvents();