function attachEvents() {
    let loadBtn = document.getElementById('btnLoadPosts');
    let postSelect = document.getElementById('posts');
    let viewBtn = document.getElementById('btnViewPost');

    loadBtn.addEventListener('click', loadPosts);
    viewBtn.addEventListener('click', displayPost);

    function loadPosts(){
        const url = 'https://blog-apps-c12bf.firebaseio.com/posts.json';

        fetch(url)
        .then(response => response.json())
        .then(data => {
            for (const key in data) {
                let option = document.createElement('option');
                postSelect.appendChild(option);
                option.textContent = data[key].title;
                option.value = key;
            }
        })
        .catch(err => console.log(err));
    }

    function displayPost(){
        let postTitleElement = document.getElementById('post-title');
        let postBodyElement = document.getElementById('post-body');
        postBodyElement.innerHTML = '';
        let postCommentsElement = document.getElementById('post-comments');
        postCommentsElement.innerHTML = '';

        let postId = postSelect.value;
        let postIdForComments;
        const postRetrieveUrl = `https://blog-apps-c12bf.firebaseio.com/posts/${postId}.json`;
        const commentsUrl = `https://blog-apps-c12bf.firebaseio.com/comments.json`;

        fetch(postRetrieveUrl)
        .then(response => response.json())
        .then(post => displayPostContent(post))
        .catch(err => console.log(err));

        fetch(commentsUrl)
        .then(response => response.json())
        .then(comments => displayPostComments(comments))
        .catch(err => console.log(err));

        function displayPostContent(post){
            postTitleElement.textContent = post.title;
            let li = document.createElement('li');
            postBodyElement.appendChild(li);
            li.style.listStyle = 'none';
            li.textContent = post.body;
            postIdForComments = post.id;
        }

        function displayPostComments(comments){
            for (const key in comments) {
                let comment = comments[key];
                if(comment.postId === postIdForComments){
                    let li = document.createElement('li');
                    postCommentsElement.appendChild(li);
                    li.id = comment.id;
                    li.textContent = comment.text;
                }
            }
        }
    }
}

attachEvents();