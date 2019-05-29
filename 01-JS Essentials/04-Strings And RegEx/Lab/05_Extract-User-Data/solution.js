function solve() {

    let input = JSON.parse(document.getElementById('arr').value);
    let result = document.getElementById('result');

    extractUserData(input);

    function extractUserData(input) {
        let pattern =
            /^([A-Z][a-z]* [A-Z][a-z]*) (\+359 [0-9] [0-9]{3} [0-9]{3}|\+359-[0-9]-[0-9]{3}-[0-9]{3}) ([a-z0-9]+@[a-z]+\.[a-z]{2,3})$/;

        let match;

        for (let data of input) {
            match = pattern.exec(data);
            
            if (match) {
                let nameElement = document.createElement('p');
                result.appendChild(nameElement);
                nameElement.textContent = `Name: ${match[1]}`;

                let phoneNumberElement = document.createElement('p');
                result.appendChild(phoneNumberElement);
                phoneNumberElement.textContent = `Phone Number: ${match[2]}`;

                let emailElement = document.createElement('p');
                result.appendChild(emailElement);
                emailElement.textContent = `Email: ${match[3]}`;

            } else {
                let errorElement = document.createElement('p');
                result.appendChild(errorElement);
                errorElement.textContent = 'Invalid data';
            }

            let separator = document.createElement('p');
            result.appendChild(separator);
            separator.textContent = '- - -';
            
        }
    }
   
}