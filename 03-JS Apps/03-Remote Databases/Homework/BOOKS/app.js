(async () => {
    const user = 'test';
    const password = 'test123';
    const headers = {
        "Authorization": `Basic ${btoa(`${user}:${password}`)}`,
        "Content-Type": "application/json"
    };

    let loadBtn = document.getElementById('loadBooks');
    let booksContainer = document.querySelector('table tbody');

    let titleInput = document.getElementById('title');
    let authorInput = document.getElementById('author');
    let isbnInput = document.getElementById('isbn');
    let submitBtn = document.querySelector('form button');

    loadBtn.addEventListener('click', loadBooks);
    submitBtn.addEventListener('click', addBook);

    function loadBooks(){
        booksContainer.innerHTML = '';

        const url = `https://baas.kinvey.com/appdata/kid_rJ5mfI3WH/books`;

        fetch(url, {
            headers
        })
        .then(response => response.json())
        .then(books => {
            for (const book of books) {
                displayBook(book);
            }
        })
        .catch(err => console.log(err));
    }

    function displayBook(book){
        let tableRow = document.createElement('tr');
        booksContainer.appendChild(tableRow);
        tableRow.innerHTML = 
        `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>`;

        tableRow.querySelector('td').addEventListener('click', () => displayBookInHTMLForm(tableRow));
        tableRow.querySelector('td:nth-child(2)').addEventListener('click', () => displayBookInHTMLForm(tableRow));
        tableRow.querySelector('td:last-child').addEventListener('click', () => displayBookInHTMLForm(tableRow));

        let buttonsWrapper = document.createElement('td');
        tableRow.appendChild(buttonsWrapper);

        let editBtn = document.createElement('button');
        buttonsWrapper.appendChild(editBtn);
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => editBook(book._id, tableRow));

        let deleteBtn = document.createElement('button');
        buttonsWrapper.appendChild(deleteBtn);
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteBook(event.target.parentElement.parentElement, book._id));
    }

    function editBook(bookId, tableRow){
        if(titleInput.value === '' || authorInput.value === '' || isbn.value === ''){
            return;
        }

        const url = `https://baas.kinvey.com/appdata/kid_rJ5mfI3WH/books/${bookId}`;
        
        let book = {
            title: titleInput.value,
            author: authorInput.value,
            isbn: isbnInput.value
        }

        clearForm();

        body = JSON.stringify(book);
    
        fetch(url, {
            method: 'PUT',
            headers,
            body
        })
        .catch(err => console.log(err));

        tableRow.querySelector('td').textContent = book.title;
        tableRow.querySelector('td:nth-child(2)').textContent = book.author;
        tableRow.querySelector('td:nth-child(3)').textContent = book.isbn;
    }

    function deleteBook(bookContainer, bookId){
        const url = `https://baas.kinvey.com/appdata/kid_rJ5mfI3WH/books/${bookId}`;

        fetch(url, {
            method: 'DELETE',
            headers
        })
        .catch(err => console.log(err));

        booksContainer.removeChild(bookContainer);
    }

    function addBook(){
        const url = 'https://baas.kinvey.com/appdata/kid_rJ5mfI3WH/books';
        let book = {
            title: titleInput.value,
            author: authorInput.value,
            isbn: isbnInput.value
        };

        let body = JSON.stringify(book);
        
        fetch(url, {
            method: 'POST',
            headers,
            body
        })
        .catch(err => console.log(err));

        displayBook(book);
    }

    function displayBookInHTMLForm(bookContainer){
        titleInput.value = bookContainer.querySelector('td:first-child').textContent;
        authorInput.value = bookContainer.querySelector('td:nth-child(2)').textContent;
        isbnInput.value = bookContainer.querySelector('td:nth-child(3)').textContent;
    }

    function clearForm(){
        titleInput.value = '';
        authorInput.value = '';
        isbnInput.value = '';
    }

})();