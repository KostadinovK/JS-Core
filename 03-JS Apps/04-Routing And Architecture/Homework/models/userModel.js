const userModel = function () {

    const register = function (params) {
        let data = {
            username: params.username,
            password: params.password,
            teamId: 'undefined'
        };

        let url = `/user/${storage.appKey}`;

        let auth = btoa(`${storage.appKey}:${storage.appSecret}`);
        let authString = `Basic ${auth}`;

        let headers = {
            body: JSON.stringify(data),
            headers: {
                Authorization: authString
            }
        };
        storage.saveData('teamId', 'undefined');
        return requester.post(url, headers);
    };

    const login = function (params) {

        let url = `/user/${storage.appKey}/login`;

        let auth = btoa(`${params.username}:${params.password}`);
        let authString = `Basic ${auth}`;

        let headers = {
            headers: {
                Authorization: authString
            },
            body: JSON.stringify({...params})
        };
        
        return requester.post(url, headers);
    };

    const logout = function () {
    
        let url = `/user/${storage.appKey}/_logout`;
        let headers = {
            headers: {}
        };
        
        return requester.post(url, headers);
    };

    return {
        register,
        login,
        logout
    }
}();