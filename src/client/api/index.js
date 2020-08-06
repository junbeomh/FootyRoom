import axios from "axios";

// League Fixtures API
export const getGameScores = async () => {
    try {
        return await axios.get('https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524/Regular_Season_-_38', {
            headers:
            {
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
                'x-rapidapi-key': '7d7bfee0e3msh97516a39f39c002p13b4eejsn257543e6dca4'
            }
        })

    } catch (e) {
        console.log(e);
    }
    return null;
}

export const getTeamData = (game, key) => ({
    name: game[key]['team_name'],
    teamId: game[key]['team_id'],
    logo: game[key]['logo'],
});

export const getFixturesData = games =>
    games.map(game => ({
        homeTeam: getTeamData(game, "homeTeam"),
        awayTeam: getTeamData(game, "awayTeam"),
        goalsHome: game['goalsHomeTeam'],
        goalsAway: game['goalsAwayTeam'],
        referee: game['referee'],
        stadium: game['venue'],
        id: game['fixture_id']
    }));

// League Standing API
export const getLeagueStandings = async () => {
    try {
        return await axios.get('https://api-football-v1.p.rapidapi.com/v2/leagueTable/524', {
            headers:
            {
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
                'x-rapidapi-key': '7d7bfee0e3msh97516a39f39c002p13b4eejsn257543e6dca4'
            }
        })

    } catch (e) {
        console.log(e);
    }
    return null;
}

export const getTeamStandingData = (team, key) => ({
    matchsPlayed: team[key]['matchsPlayed'],
    win: team[key]['win'],
    draw: team[key]['draw'],
    lose: team[key]['lose'],
    goalsFor: team[key]['goalsFor'],
    goalsAgainst: team[key]['goalsAgainst'],
});



export const getTeamsStandingData = teams =>
    teams.map(team => ({
        data: getTeamStandingData(team, "all"),
        name: team['teamName'],
        goalsDiff: team['goalsDiff'],
        pts: team['points'],
        id: team['team_id'],
        rank: team['rank'],
        logo: team['logo']
    }));