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
        let teamData = {
            name: name,
            comment: comment
        };

        return requester.post('appdata', 'teams', 'kinvey', teamData);
    }


    function joinTeam(teamId) {
        let userData = {
            username: sessionStorage.getItem('username'),
            teamId: teamId
        };

        return requester.update('user', sessionStorage.getItem('userId'), 'kinvey', userData);
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