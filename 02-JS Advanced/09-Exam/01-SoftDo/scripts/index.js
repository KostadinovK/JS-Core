function mySolution(){
    let textarea = document.querySelector('#inputSection textarea');
    let nameElement = document.querySelector('#inputSection input');
    let sendBtn = document.querySelector('#inputSection div button');
    let pendingQuestionsSection = document.getElementById('pendingQuestions');
    let openQuestionsSection = document.getElementById('openQuestions');

    sendBtn.addEventListener('click', createPendingQuestion);

    function createPendingQuestion(){
        if(textarea.value === ''){
            return;
        }

        let pendingQuestion = document.createElement('div');
        pendingQuestionsSection.appendChild(pendingQuestion);
        pendingQuestion.classList.add('pendingQuestion');
        
        let avatar = createAvatar();

        pendingQuestion.appendChild(avatar);

        let name = document.createElement('span'); 
        pendingQuestion.appendChild(name);
        name.textContent = 'Anonymous';

        if(nameElement.value !== ''){
            name.textContent = nameElement.value;
        }

        let question = document.createElement('p');
        pendingQuestion.appendChild(question);
        question.textContent = textarea.value;

        textarea.value = '';
        nameElement.value = '';

        let actions = document.createElement('div');
        actions.classList.add('actions');
        pendingQuestion.appendChild(actions);

        let archiveBtn = createButton(actions, 'Archive', ['archive'], () => pendingQuestionsSection.removeChild(pendingQuestion));
        let openBtn = createButton(actions, 'Open', ['open'], () => {
            openQuestionsSection.appendChild(pendingQuestion);
            pendingQuestion.classList.remove('pendingQuestion');
            pendingQuestion.classList.add('openQuestion');
            pendingQuestion.removeChild(actions);
            
            let newActions = document.createElement('div');
            pendingQuestion.appendChild(newActions);
            newActions.classList.add('actions');

            let replyBtn = document.createElement('button');
            newActions.appendChild(replyBtn);
            replyBtn.classList.add('reply');
            replyBtn.textContent = 'Reply';
            replyBtn.addEventListener('click', () => {
                if(repliesSection.style.display === 'none'){
                    repliesSection.style.display = 'block';
                    replyBtn.textContent = 'Back';
                }else{
                    repliesSection.style.display = 'none';
                    replyBtn.textContent = 'Reply';
                }
            });

            let repliesSection = document.createElement('div');
            pendingQuestion.appendChild(repliesSection);
            repliesSection.classList.add('replySection');
            repliesSection.style.display = 'none';

            let input = document.createElement('input');
            repliesSection.appendChild(input);
            input.classList.add('replyInput');
            input.type = 'text';
            input.placeholder = 'Reply to this question here...';
            

            let sendBtn = document.createElement('button');
            repliesSection.appendChild(sendBtn);
            sendBtn.classList.add('replyButton');
            sendBtn.textContent = 'Send';
            sendBtn.addEventListener('click', () => {
                if(input.value === ''){
                    return;
                }

                let li = document.createElement('li');
                repliesList.appendChild(li);
                li.textContent = input.value;
            });
            let repliesList = document.createElement('ol');
            repliesSection.appendChild(repliesList);
            repliesList.classList.add('reply');
            repliesList.type = '1';
            
            
        });
    }

    function createAvatar(){
        let image = document.createElement('img');
        image.src = './images/user.png';
        image.width = '32';
        image.height = '32';
        
        return image;
    }

    function createButton(parent, text, classList, eventOnClick){
        let btn = document.createElement('button');
        parent.appendChild(btn);
        btn.textContent = text;
        btn.classList.add(classList[0]);
        btn.addEventListener('click', eventOnClick);
    }
}