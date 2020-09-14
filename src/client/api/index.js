import axios from "axios";

// API-FOOTBALL beta version:
// key: 02c73d826723d3e02b2f338e71363d62
// host: v3.football.api-sports.io

// All available Fixture Rounds 
export const getAllRounds = async () => {
    try {
        return await axios.get('https://api-football-v1.p.rapidapi.com/v2/fixtures/rounds/2790', {
            headers:
            {
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
                'x-rapidapi-key': '7d7bfee0e3msh97516a39f39c002p13b4eejsn257543e6dca4'
            }
        }).then((response) => response.data.api.fixtures)

    } catch (e) {
        console.log(e);
    }
    return null;
}

// League Fixtures
export const getRoundFixtures = async (round) => {
    console.log('Fetching data for ' + round);
    try {
        return await axios.get('https://api-football-v1.p.rapidapi.com/v2/fixtures/league/2790/' + round, {
            headers:
            {
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
                'x-rapidapi-key': '7d7bfee0e3msh97516a39f39c002p13b4eejsn257543e6dca4'
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
        referee: game['referee'],
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


// League Standing
export const getLeagueStandings = async () => {
    try {
        return await axios.get('https://api-football-v1.p.rapidapi.com/v2/leagueTable/2790', {
            headers:
            {
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
                'x-rapidapi-key': '7d7bfee0e3msh97516a39f39c002p13b4eejsn257543e6dca4'
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
        return await axios.get('https://api-football-v1.p.rapidapi.com/v2/topscorers/524', {
            headers:
            {
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
                'x-rapidapi-key': '7d7bfee0e3msh97516a39f39c002p13b4eejsn257543e6dca4'
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


// const getGeoInfo = async () => {
//     axios.get('https://ipapi.co/json/').then((response) => {
//         let data = response.data;
//         this.setState({
//             countryName: data.country_name,
//             countryCode: data.country_calling_code
//         });
//     }).catch((error) => {
//         console.log(error);
//     });
// };

// League Teams 
export const getTeamsData = teams =>
    teams.map(team => ({
        id: team['team_id'],
        name: team['name'],
        logo: team['logo'],
        venue_name: team['venue_name'],
        venue_address: team['venue_address'],
        // latLng: reverseGeocode(team['venue_name'], team['venue_addresss'])
    }));

// function reverseGeocode(name, address) {
//     Geocode.fromAddress(name + " " + address).then(
//         response => {
//             const lat = response.results[0].geometry.location.lat;
//             const lng = response.results[0].geometry.location.lng;
//             console.log(lat + ", " + lng);
//             return response.results[0].geometry.location
//         },
//         error => {
//             console.error(error);
//         }
//     )
// }

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