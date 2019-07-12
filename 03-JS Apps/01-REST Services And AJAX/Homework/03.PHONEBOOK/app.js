function attachEvents() {
    let contactsList = document.getElementById('phonebook');
    let loadBtn = document.getElementById('btnLoad');
    let createBtn = document.getElementById('btnCreate');

    loadBtn.addEventListener('click', displayContacts);
    createBtn.addEventListener('click', createContact);

    function displayContacts(){
        contactsList.innerHTML = '';
        const url = 'https://phonebook-nakov.firebaseio.com/phonebook.json';

        fetch(url)
        .then(response => response.json())
        .then(data => {
            for (const key in data) {
               let contact = document.createElement('li');
               contactsList.appendChild(contact);
               contact.textContent = `${data[key].person}: ${data[key].phone}`; 

               let deleteBtn = document.createElement('button');
               contact.appendChild(deleteBtn);
               deleteBtn.textContent = "Delete";
               deleteBtn.addEventListener('click', () => {
                   fetch('https://phonebook-nakov.firebaseio.com/phonebook/' + `${key}.json`, {
                       method: 'delete'
                   })
                   .catch(err => console.log(err));

                   contactsList.removeChild(contact);
               });
            }
        })
        .catch(err => console.log(err));
    }

    function createContact(){
        const url = 'https://phonebook-nakov.firebaseio.com/phonebook.json';
        let name = document.getElementById('person').value;
        let phone = document.getElementById('phone').value;

        document.getElementById('person').value = '';
        document.getElementById('phone').value = '';

        let data = {person: name, phone};

        fetch(url, {
            method: "post",
            body: JSON.stringify(data)
        })
        .catch(err => console.log(err));
    }
}

attachEvents();