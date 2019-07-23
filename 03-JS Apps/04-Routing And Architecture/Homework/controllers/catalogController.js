const catalogController = function(){
    const getCatalog = function(context){
        context.loggedIn = storage.getData("userInfo") !== null;
        context.username = JSON.parse(storage.getData('userInfo')).username;
        context.hasNoTeam = JSON.parse(storage.getData('teamId')) === 'undefined';
        console.log(context.hasNoTeam);

        teamsService.loadTeams()
        .then(response => response.json())
        .then(teams => {
            context.teams = teams;
            context.loadPartials({
                header: '../views/common/header.hbs',
                footer: '../views/common/footer.hbs',
                team: '../views/catalog/team.hbs'
            })
            .then(function(){
                this.partial('../views/catalog/teamCatalog.hbs');
            });
        })
        .catch(err => console.log(err));
    }

    const getTeamDetails = function(context){
        context.loggedIn = storage.getData("userId") !== null;
        context.username = storage.getData('username');
        teamsService.loadTeamDetails(context.params.id)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                context.teamId = data._id;
                context.isAuthor = storage.getData('userId') === data._acl.creator;
                context.isOnTeam = storage.getData('teamId') === data._id;
                context.name = data.name;
                context.comment = data.comment;
                if (data.members) {
                    context.members = data.members;
                }
                context.loadPartials({
                    header: '../views/common/header.hbs',
                    footer: '../views/common/footer.hbs',
                    teamControls: '../views/catalog/teamControls.hbs',
                    teamMember: '../views/catalog/teamMember.hbs'
                }).then(function () {
                    this.partial('../views/catalog/details.hbs');
                });
            });
    }

    return {
        getCatalog,
        getTeamDetails
    };
}();