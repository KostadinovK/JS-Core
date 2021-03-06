let teamsService = (() => {
    function loadTeams() {
        // Request teams from db
        const url = `https://baas.kinvey.com/appdata/${storage.appKey}/teams`;
        let headers = {
            headers: {
                Authorization: `Kinvey ${storage.getData('authToken')}`
            }
        };

        return requester.get(url, headers);
    }

    function loadTeamDetails(teamId) {
        const url = `https://baas.kinvey.com/appdata/${storage.appKey}/teams/${teamId.slice(1)}`;

        let headers = {
            headers: {
                Authorization: `Kinvey ${storage.getData('authToken')}`
            }
        };

        return requester.get(url, headers);
    }

    function edit(teamId, name, description) {
        let teamData = {
            name: name,
            comment: description,
            author: sessionStorage.getItem('username')
        };

        return requester.update('appdata', 'teams/' + teamId, 'kinvey', teamData);
    }

    function createTeam(name, comment) {
        const url = `/appdata/${storage.appKey}/teams`;
        
        let teamData = {
            name: name,
            comment: comment
        };

        let headers = {
            headers: {
                Authorization: `Kinvey ${storage.getData('authToken')}`
            },
            body: JSON.stringify(teamData)
        };

        return requester.post(url, headers);
    }


    function joinTeam(teamId) {
        let userData = {
            username: JSON.parse(storage.getData('userInfo')).username,
            teamId: teamId
        };

        const url = `https://baas.kinvey.com/appdata/${storage.appKey}/teams/${teamId.slice(1)}`;

        let headers = {
            headers: {
                Authorization: `Kinvey ${storage.getData('authToken')}`
            },
            body: JSON.stringify(userData)
        };

        return requester.patch(url, headers);
    }

    function leaveTeam() {
        let userData = {
            username: sessionStorage.getItem('username'),
            teamId: ''
        };

       return requester.update('user', sessionStorage.getItem('userId'), userData, 'kinvey');
    }


    return {
        loadTeams,
        loadTeamDetails,
        edit,
        createTeam,
        joinTeam,
        leaveTeam
    }
})()