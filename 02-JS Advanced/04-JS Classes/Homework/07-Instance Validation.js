class CheckingAccount{
    constructor(clientId, email, firstName, lastName){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }

    get clientId(){
        return this._clientId;
    }

    set clientId(id){
        let validPattern = /^[0-9]{6}$/g;

        if(!validPattern.test(id)){
            throw new TypeError('Client ID must be a 6-digit number');
        }

        this._clientId = id; 
    }

    get email(){
        return this._email;
    }

    set email(email){
        let validPattern = /^[a-z0-9A-Z]+@[a-zA-Z.]+$/g;

        if(!validPattern.test(email)){
            throw new TypeError('Invalid e-mail');
        }

        this._email = email;
    }

    get firstName(){
        return this._firstName;
    }

    set firstName(name){
        if(name.length < 3 || name.length > 20){
            throw new TypeError('First name must be between 3 and 20 characters long');
        }

        if([...name].find(l => !this._isLatinLetter(l))){
            throw new TypeError('First name must contain only Latin characters');
        }

        this._firstName = name;
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(name){
        if(name.length < 3 || name.length > 20){
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }

        if([...name].find(l => !this._isLatinLetter(l))){
            throw new TypeError('Last name must contain only Latin characters');
        }

        this._lastName = name;
    }

    _isLatinLetter(letter){
        return (letter >= 'a' && letter <= 'z') || (letter >= 'A' && letter <= 'Z');
    }
}

//let acc1 = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
//let acc2 = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
let acc3 = new CheckingAccount('423414', 'petkan@another.co.uk', 'Петкан', 'Dragomir');