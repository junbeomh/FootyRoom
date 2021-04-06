import axios from "axios";

// All available Fixture Rounds 
export const getAllRounds = async () => {
    try {
        return await axios.get('https://api-football-v1.p.rapidapi.com/v2/fixtures/rounds/2790', {
            headers:
            {
                'x-rapidapi-host': API_HOST,
                'x-rapidapi-key': API_KEY,
            }
        }).then((response) => response.data.api.fixtures)

    } catch (e) {
        console.log(e);
    }
    return null;
}

// All avaiable fixtures of a round
export const getRoundFixtures = async (round) => {
    console.log('Fetching data for ' + round);
    try {
        return await axios.get('https://api-football-v1.p.rapidapi.com/v2/fixtures/league/2790/' + round, {
            headers:
            {
                'x-rapidapi-host': API_HOST,
                'x-rapidapi-key': API_KEY,
            }
        }).then((response) => getFixturesData(response.data.api.fixtures))

    } catch (e) {
        console.log(e);
    }
    return null;
}

export const getFixturesData = games =>
    games.map(game => ({
        homeTeam: getTeamData(game, "homeTeam"),
        awayTeam: getTeamData(game, "awayTeam"),
        goalsHome: game['goalsHomeTeam'],
        goalsAway: game['goalsAwayTeam'],
        referee: game['referee'],
        stadium: game['venue'],
        id: game['fixture_id'],
        date: game['event_date'],
        round: game['round'],
        status: game['statusShort'],
        statusLong: game['status'],
        venue: game['venue'],
        elapsed: game['elapsed'],
        timeStamp: game['event_timestamp'],
        firstHalfStart: game['firstHalfStart'],
        secondHalfStart: game['SecondHalfStart']
    }));

export const getTeamData = (game, key) => ({
    name: game[key]['team_name'],
    teamId: game[key]['team_id'],
    logo: game[key]['logo'],
});


// One fixture information
export const getFixture = async (fixtureId) => {
    try {
        return await axios.get('https://api-football-v1.p.rapidapi.com/v2/fixtures/id/' + fixtureId, {
            headers:
            {
                'x-rapidapi-host': API_HOST,
                'x-rapidapi-key': API_KEY,
            }
        })

    } catch (e) {
        console.log(e);
    }
    return null;
}

// Head-to-Head fixtures information
export const getHeadToHeadFixtures = async (homeId, awayId) => {
    try {
        return await axios.get('https://api-football-v1.p.rapidapi.com/v2/fixtures/h2h/' + homeId + '/' + awayId, {
            headers:
            {
                'x-rapidapi-host': API_HOST,
                'x-rapidapi-key': API_KEY,
            }
        }).then((response) => getFixturesData(response.data.api.fixtures));

    } catch (e) {
        console.log(e);
    }
    return null;
}

export const getHeadToHeadData = fixtures =>
    fixtures.map(fixture => ({
        goalsHome: fixture['goalsHomeTeam'],
        goalsAway: fixture['goalsAwayTeam'],
    })); 


// League Standing
export const getLeagueStandings = async () => {
    try {
        return await axios.get('https://api-football-v1.p.rapidapi.com/v2/leagueTable/2790', {
            headers:
            {
                'x-rapidapi-host': API_HOST,
                'x-rapidapi-key': API_KEY,
            }
        }).then((response) => getTeamsStandingData(response.data.api.standings["0"]))

    } catch (e) {
        console.log(e);
    }
    return null;
}

export const getTeamsStandingData = teams =>
    teams.map(team => ({
        data: getTeamStandingData(team, "all"),
        name: team['teamName'],
        goalsDiff: team['goalsDiff'],
        pts: team['points'],
        id: team['team_id'],
        rank: team['rank'],
        logo: team['logo'],
        forme: team['forme']
    }));


export const getTeamStandingData = (team, key) => ({
    matchsPlayed: team[key]['matchsPlayed'],
    win: team[key]['win'],
    draw: team[key]['draw'],
    lose: team[key]['lose'],
    goalsFor: team[key]['goalsFor'],
    goalsAgainst: team[key]['goalsAgainst'],
});




// League Top Scorer 
export const getTopScorersAPI = async () => {
    try {
        return await axios.get('https://api-football-v1.p.rapidapi.com/v2/topscorers/2790', {
            headers:
            {
                'x-rapidapi-host': API_HOST,
                'x-rapidapi-key': API_KEY,
            }
        }).then((response) => getTopScorersData(response.data.api.topscorers))

    } catch (e) {
        console.log(e);
    }
    return null;
}

export const getTopScorersData = players =>
    players.map(player => ({
        id: player['player_id'],
        name: player['player_name'],
        firstName: player['firstname'],
        lastName: player['lastname'],
        nationality: player['nationality'],
        teamName: player['team_name'],
        position: player['position'],
        stat: { goal: player['goals']['total'], assist: player['goals']['assists'] },
        games: { appearances: player['games']['appearences'], minPlayed: player['games']['minutes_played'] },
        shots: { total: player['shots']['total'], on: player['shots']['on'] },
        penalty: { won: player['penalty']['won'], success: player['penalty']['success'], missed: player['penalty']['missed'] }
    }));

// League Teams 
export const getTeamsData = teams =>
    teams.map(team => ({
        id: team['team_id'],
        name: team['name'],
        logo: team['logo'],
        venue_name: team['venue_name'],
        venue_address: team['venue_address'],
    }));

export const getTeams = async () => {
    try {
        return await axios.get("https://api-football-v1.p.rapidapi.com/v2/teams/league/2790", {
            headers:
            {
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
                'x-rapidapi-key': '7d7bfee0e3msh97516a39f39c002p13b4eejsn257543e6dca4'
            }
        }).then((teams) => getTeamsData(teams.data.api.teams)

        )
    } catch (e) {
        console.log(e);
    }
    return null;
}
