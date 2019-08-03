const notifier = function(){
    const notify = function(type, message){
        let element;
        switch(type){
            case "info":
                element = document.getElementById('infoBox');
                element.style.backgroundColor = 'green';
                break;
            case "error":
                element = document.getElementById('errorBox');
                element.style.backgroundColor = 'red';
                break;
            case "load":
                element = document.getElementById('loadingBox');
                element.style.backgroundColor = 'cyan'; 
                break;
        }

        element.style.display = 'block';
        element.innerHTML = message;
    }

    return {
        notify
    };
}();