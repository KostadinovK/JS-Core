function validateRequest(request){

    validateMethod(request.method);
    validateUri(request.uri);
    validateVersion(request.version);
    validateMessage(request.message);

    return request;


    function validateMethod(method){
        if(method === undefined){
            throw new Error('Invalid request header: Invalid Method'); 
        }

        let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];

        if(!methods.includes(method)){
            throw new Error('Invalid request header: Invalid Method');
        }
    }

    function validateUri(uri){
        if(uri === undefined){
            throw new Error('Invalid request header: Invalid URI'); 
        }

        let uriPattern = /(\*)|(^[a-zA-Z0-9.]+$)/g;

        if(!uriPattern.test(uri)){
            throw new Error('Invalid request header: Invalid URI');
        }
    }

    function validateVersion(version){
        if(version === undefined){
            throw new Error('Invalid request header: Invalid Version'); 
        }

        let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

        if(!versions.includes(version)){
            throw new Error('Invalid request header: Invalid Version');
        }
    }

    function validateMessage(message){
        if(message === undefined){
            throw new Error('Invalid request header: Invalid Message'); 
        }

        let messagePattern = /^[^<>\\&'"]*$/g;

        if(!messagePattern.test(message)){
            throw new Error('Invalid request header: Invalid Message');
        }
    }

}

let obj = {
    method: 'GET',
    uri: '',
    version: 'HTTP/1.0',
    message: 'a>b'
};

let request = validateRequest(obj);

console.log(request);
