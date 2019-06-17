function encodeAndDecodeMessages() {
    let encodedMessageArea = document.querySelectorAll('textarea')[1];
    let encodeBtn = document.querySelectorAll('button')[0];
    let decodeBtn = document.querySelectorAll('button')[1];

    encodeBtn.addEventListener('click', () => {
        encodedMessageArea.value = encode(document.querySelectorAll('textarea')[0].value);
        document.querySelectorAll('textarea')[0].value = '';
    });
    
    decodeBtn.addEventListener('click', () => encodedMessageArea.value = decode(encodedMessageArea.value));

    function encode(message){
        let result = '';
        for (let char of message) {
            result += String.fromCharCode(char.charCodeAt() + 1);
        }

        return result;
    }

    function decode(message){
        let result = '';
        for (let char of message) {
            result += String.fromCharCode(char.charCodeAt() - 1);
        }

        return result;
    }
}