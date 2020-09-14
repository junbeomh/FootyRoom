import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [

                {
                    "player_id": 18788,
                    "player_name": "J. Vardy",
                    "firstname": "Jamie",
                    "lastname": "Vardy",
                    "position": "Attacker",
                    "nationality": "England",
                    "team_id": 46,
                    "team_name": "Leicester",
                    "games": {
                        "appearences": 35,
                        "minutes_played": 3034
                    },
                    "goals": {
                        "total": 23,
                        "assists": 5,
                        "conceded": null,
                        "saves": null
                    },
                    "shots": {
                        "total": 89,
                        "on": 43
                    },
                    "penalty": {
                        "won": 1,
                        "commited": null,
                        "success": 4,
                        "missed": 1,
                        "saved": null
                    },
                    "cards": {
                        "yellow": 2,
                        "second_yellow": 0,
                        "red": 0
                    }
                },
                {
                    "player_id": 18955,
                    "player_name": "D. Ings",
                    "firstname": "Daniel William John",
                    "lastname": "Ings",
                    "position": "Attacker",
                    "nationality": "England",
                    "team_id": 41,
                    "team_name": "Southampton",
                    "games": {
                        "appearences": 38,
                        "minutes_played": 2815
                    },
                    "goals": {
                        "total": 22,
                        "assists": 2,
                        "conceded": null,
                        "saves": null
                    },
                    "shots": {
                        "total": 93,
                        "on": 38
                    },
                    "penalty": {
                        "won": 2,
                        "commited": null,
                        "success": 1,
                        "missed": 1,
                        "saved": null
                    },
                    "cards": {
                        "yellow": 3,
                        "second_yellow": 0,
                        "red": 0
                    }
                },
                {
                    "player_id": 1465,
                    "player_name": "Pierre-Emerick Aubameyang",
                    "firstname": "Pierre-Emerick",
                    "lastname": "Aubameyang",
                    "position": "Attacker",
                    "nationality": "Gabon",
                    "team_id": 42,
                    "team_name": "Arsenal",
                    "games": {
                        "appearences": 36,
                        "minutes_played": 3139
                    },
                    "goals": {
                        "total": 22,
                        "assists": 3,
                        "conceded": null,
                        "saves": null
                    },
                    "shots": {
                        "total": 93,
                        "on": 42
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "success": 2,
                        "missed": 0,
                        "saved": null
                    },
                    "cards": {
                        "yellow": 3,
                        "second_yellow": 0,
                        "red": 1
                    }
                },
                {
                    "player_id": 645,
                    "player_name": "Raheem Shaquille Sterling",
                    "firstname": "Raheem Shaquille",
                    "lastname": "Sterling",
                    "position": "Attacker",
                    "nationality": "England",
                    "team_id": 50,
                    "team_name": "Manchester City",
                    "games": {
                        "appearences": 33,
                        "minutes_played": 2659
                    },
                    "goals": {
                        "total": 20,
                        "assists": 1,
                        "conceded": null,
                        "saves": null
                    },
                    "shots": {
                        "total": 99,
                        "on": 38
                    },
                    "penalty": {
                        "won": 3,
                        "commited": null,
                        "success": 0,
                        "missed": 2,
                        "saved": null
                    },
                    "cards": {
                        "yellow": 5,
                        "second_yellow": 0,
                        "red": 0
                    }
                },
                {
                    "player_id": 306,
                    "player_name": "Mohamed  Salah Ghaly",
                    "firstname": "Mohamed",
                    "lastname": "Salah Ghaly",
                    "position": "Attacker",
                    "nationality": "Egypt",
                    "team_id": 40,
                    "team_name": "Liverpool",
                    "games": {
                        "appearences": 34,
                        "minutes_played": 2888
                    },
                    "goals": {
                        "total": 19,
                        "assists": 10,
                        "conceded": null,
                        "saves": null
                    },
                    "shots": {
                        "total": 132,
                        "on": 59
                    },
                    "penalty": {
                        "won": 1,
                        "commited": null,
                        "success": 3,
                        "missed": 0,
                        "saved": null
                    },
                    "cards": {
                        "yellow": 1,
                        "second_yellow": 0,
                        "red": 0
                    }
                },
                {
                    "player_id": 304,
                    "player_name": "Sadio Mané",
                    "firstname": "Sadio",
                    "lastname": "Mané",
                    "position": "Attacker",
                    "nationality": "Senegal",
                    "team_id": 40,
                    "team_name": "Liverpool",
                    "games": {
                        "appearences": 35,
                        "minutes_played": 2755
                    },
                    "goals": {
                        "total": 18,
                        "assists": 7,
                        "conceded": null,
                        "saves": null
                    },
                    "shots": {
                        "total": 77,
                        "on": 36
                    },
                    "penalty": {
                        "won": 2,
                        "commited": null,
                        "success": 0,
                        "missed": 0,
                        "saved": null
                    },
                    "cards": {
                        "yellow": 3,
                        "second_yellow": 0,
                        "red": 0
                    }
                },
                {
                    "player_id": 184,
                    "player_name": "Harry Kane",
                    "firstname": "Harry",
                    "lastname": "Kane",
                    "position": "Attacker",
                    "nationality": "England",
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "games": {
                        "appearences": 29,
                        "minutes_played": 2590
                    },
                    "goals": {
                        "total": 18,
                        "assists": 2,
                        "conceded": null,
                        "saves": null
                    },
                    "shots": {
                        "total": 81,
                        "on": 37
                    },
                    "penalty": {
                        "won": 1,
                        "commited": null,
                        "success": 2,
                        "missed": 0,
                        "saved": null
                    },
                    "cards": {
                        "yellow": 4,
                        "second_yellow": 0,
                        "red": 0
                    }
                },
                {
                    "player_id": 908,
                    "player_name": "Anthony Martial",
                    "firstname": "Anthony",
                    "lastname": "Martial",
                    "position": "Attacker",
                    "nationality": "France",
                    "team_id": 33,
                    "team_name": "Manchester United",
                    "games": {
                        "appearences": 32,
                        "minutes_played": 2640
                    },
                    "goals": {
                        "total": 17,
                        "assists": 6,
                        "conceded": null,
                        "saves": null
                    },
                    "shots": {
                        "total": 80,
                        "on": 40
                    },
                    "penalty": {
                        "won": 1,
                        "commited": null,
                        "success": 0,
                        "missed": 1,
                        "saved": null
                    },
                    "cards": {
                        "yellow": 1,
                        "second_yellow": 0,
                        "red": 0
                    }
                },
                {
                    "player_id": 2887,
                    "player_name": "Raúl Alonso Jiménez Rodríguez",
                    "firstname": "Raúl Alonso",
                    "lastname": "Jiménez Rodríguez",
                    "position": "Attacker",
                    "nationality": "Mexico",
                    "team_id": 39,
                    "team_name": "Wolves",
                    "games": {
                        "appearences": 38,
                        "minutes_played": 3252
                    },
                    "goals": {
                        "total": 17,
                        "assists": 6,
                        "conceded": null,
                        "saves": null
                    },
                    "shots": {
                        "total": 118,
                        "on": 44
                    },
                    "penalty": {
                        "won": 1,
                        "commited": null,
                        "success": 4,
                        "missed": 0,
                        "saved": null
                    },
                    "cards": {
                        "yellow": 3,
                        "second_yellow": 0,
                        "red": 0
                    }
                },
                {
                    "player_id": 909,
                    "player_name": "M. Rashford",
                    "firstname": "Marcus",
                    "lastname": "Rashford",
                    "position": "Attacker",
                    "nationality": "England",
                    "team_id": 33,
                    "team_name": "Manchester United",
                    "games": {
                        "appearences": 31,
                        "minutes_played": 2655
                    },
                    "goals": {
                        "total": 17,
                        "assists": 7,
                        "conceded": null,
                        "saves": null
                    },
                    "shots": {
                        "total": 95,
                        "on": 44
                    },
                    "penalty": {
                        "won": 4,
                        "commited": null,
                        "success": 6,
                        "missed": 2,
                        "saved": null
                    },
                    "cards": {
                        "yellow": 3,
                        "second_yellow": 0,
                        "red": 0
                    }
                },
                {
                    "player_id": 642,
                    "player_name": "S. Agüero",
                    "firstname": "Sergio Leonel",
                    "lastname": "Agüero del Castillo",
                    "position": "Attacker",
                    "nationality": "Argentina",
                    "team_id": 50,
                    "team_name": "Manchester City",
                    "games": {
                        "appearences": 24,
                        "minutes_played": 1456
                    },
                    "goals": {
                        "total": 16,
                        "assists": 3,
                        "conceded": null,
                        "saves": null
                    },
                    "shots": {
                        "total": 76,
                        "on": 28
                    },
                    "penalty": {
                        "won": 2,
                        "commited": null,
                        "success": 2,
                        "missed": 1,
                        "saved": null
                    },
                    "cards": {
                        "yellow": 1,
                        "second_yellow": 0,
                        "red": 0
                    }
                },
                {
                    "player_id": 19194,
                    "player_name": "T. Abraham",
                    "firstname": "Tammy",
                    "lastname": "Bakumo-Abraham",
                    "position": "Attacker",
                    "nationality": "England",
                    "team_id": 49,
                    "team_name": "Chelsea",
                    "games": {
                        "appearences": 34,
                        "minutes_played": 2221
                    },
                    "goals": {
                        "total": 15,
                        "assists": 3,
                        "conceded": null,
                        "saves": null
                    },
                    "shots": {
                        "total": 88,
                        "on": 40
                    },
                    "penalty": {
                        "won": 1,
                        "commited": null,
                        "success": 0,
                        "missed": 0,
                        "saved": null
                    },
                    "cards": {
                        "yellow": 2,
                        "second_yellow": 0,
                        "red": 0
                    }
                },
                {
                    "player_id": 643,
                    "player_name": "Gabriel Jesus",
                    "firstname": "Gabriel Fernando",
                    "lastname": "de Jesus",
                    "position": "Attacker",
                    "nationality": "Brazil",
                    "team_id": 50,
                    "team_name": "Manchester City",
                    "games": {
                        "appearences": 34,
                        "minutes_played": 2026
                    },
                    "goals": {
                        "total": 14,
                        "assists": 7,
                        "conceded": null,
                        "saves": null
                    },
                    "shots": {
                        "total": 101,
                        "on": 48
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "success": 0,
                        "missed": 1,
                        "saved": null
                    },
                    "cards": {
                        "yellow": 3,
                        "second_yellow": 0,
                        "red": 0
                    }
                },
                {
                    "player_id": 18931,
                    "player_name": "C. Wood",
                    "firstname": "Chris",
                    "lastname": "Wood",
                    "position": "Attacker",
                    "nationality": "New Zealand",
                    "team_id": 44,
                    "team_name": "Burnley",
                    "games": {
                        "appearences": 32,
                        "minutes_played": 2446
                    },
                    "goals": {
                        "total": 14,
                        "assists": 1,
                        "conceded": null,
                        "saves": null
                    },
                    "shots": {
                        "total": 65,
                        "on": 31
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "success": 1,
                        "missed": 0,
                        "saved": null
                    },
                    "cards": {
                        "yellow": 1,
                        "second_yellow": 0,
                        "red": 0
                    }
                },
                {
                    "player_id": 2413,
                    "player_name": "Richarlison",
                    "firstname": "Richarlison",
                    "lastname": "de Andrade",
                    "position": "Attacker",
                    "nationality": "Brazil",
                    "team_id": 45,
                    "team_name": "Everton",
                    "games": {
                        "appearences": 35,
                        "minutes_played": 2991
                    },
                    "goals": {
                        "total": 13,
                        "assists": 3,
                        "conceded": null,
                        "saves": null
                    },
                    "shots": {
                        "total": 86,
                        "on": 32
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "success": 0,
                        "missed": 0,
                        "saved": null
                    },
                    "cards": {
                        "yellow": 7,
                        "second_yellow": 0,
                        "red": 0
                    }
                },
                {
                    "player_id": 18766,
                    "player_name": "D. Calvert-Lewin",
                    "firstname": "Dominic",
                    "lastname": "Calvert-Lewin",
                    "position": "Attacker",
                    "nationality": "England",
                    "team_id": 45,
                    "team_name": "Everton",
                    "games": {
                        "appearences": 35,
                        "minutes_played": 2610
                    },
                    "goals": {
                        "total": 13,
                        "assists": 1,
                        "conceded": null,
                        "saves": null
                    },
                    "shots": {
                        "total": 85,
                        "on": 38
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "success": 0,
                        "missed": 0,
                        "saved": null
                    },
                    "cards": {
                        "yellow": 9,
                        "second_yellow": 0,
                        "red": 0
                    }
                },
                {
                    "player_id": 629,
                    "player_name": "Kevin De Bruyne",
                    "firstname": "Kevin",
                    "lastname": "De Bruyne",
                    "position": "Midfielder",
                    "nationality": "Belgium",
                    "team_id": 50,
                    "team_name": "Manchester City",
                    "games": {
                        "appearences": 35,
                        "minutes_played": 2800
                    },
                    "goals": {
                        "total": 13,
                        "assists": 20,
                        "conceded": null,
                        "saves": null
                    },
                    "shots": {
                        "total": 99,
                        "on": 31
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "success": 2,
                        "missed": 0,
                        "saved": null
                    },
                    "cards": {
                        "yellow": 3,
                        "second_yellow": 0,
                        "red": 0
                    }
                },
                {
                    "player_id": 186,
                    "player_name": "Heung-Min Son",
                    "firstname": "Heung-Min",
                    "lastname": "Son",
                    "position": "Attacker",
                    "nationality": "Korea Republic",
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "games": {
                        "appearences": 30,
                        "minutes_played": 2485
                    },
                    "goals": {
                        "total": 11,
                        "assists": 10,
                        "conceded": null,
                        "saves": null
                    },
                    "shots": {
                        "total": 81,
                        "on": 38
                    },
                    "penalty": {
                        "won": 1,
                        "commited": null,
                        "success": 0,
                        "missed": 1,
                        "saved": null
                    },
                    "cards": {
                        "yellow": 0,
                        "second_yellow": 0,
                        "red": 2
                    }
                },
                {
                    "player_id": 635,
                    "player_name": "Riyad Mahrez",
                    "firstname": "Riyad",
                    "lastname": "Mahrez",
                    "position": "Attacker",
                    "nationality": "Algeria",
                    "team_id": 50,
                    "team_name": "Manchester City",
                    "games": {
                        "appearences": 33,
                        "minutes_played": 1941
                    },
                    "goals": {
                        "total": 11,
                        "assists": 9,
                        "conceded": null,
                        "saves": null
                    },
                    "shots": {
                        "total": 74,
                        "on": 32
                    },
                    "penalty": {
                        "won": 5,
                        "commited": null,
                        "success": 1,
                        "missed": 0,
                        "saved": null
                    },
                    "cards": {
                        "yellow": 0,
                        "second_yellow": 0,
                        "red": 0
                    }
                },
                {
                    "player_id": 19085,
                    "player_name": "T. Pukki",
                    "firstname": "Teemu",
                    "lastname": "Pukki",
                    "position": "Attacker",
                    "nationality": "Finland",
                    "team_id": 71,
                    "team_name": "Norwich",
                    "games": {
                        "appearences": 36,
                        "minutes_played": 2894
                    },
                    "goals": {
                        "total": 11,
                        "assists": 3,
                        "conceded": null,
                        "saves": null
                    },
                    "shots": {
                        "total": 80,
                        "on": 35
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "success": 2,
                        "missed": 0,
                        "saved": null
                    },
                    "cards": {
                        "yellow": 3,
                        "second_yellow": 0,
                        "red": 0
                    }
                }
            ]
        }
    }
        


render() {
    const statStyle = {
        fontSize: "2em",
        padding: "0.25em"
    };
    const columnStyle = { width: "1em" };


    return (
        // <div style={{
        //     display: 'grid',
        //     justifyContent: 'center',
        //     flexDirection: "column",
        //     justifyContent: "space-around",
        // }}>
        //     <div style={statStyle}>Shots</div>
        //     <div style={statStyle}>Shots on target</div>
        //     <div style={statStyle}>Possession</div>
        //     <div style={statStyle}>Passess</div>
        // </div>

        <TableContainer component={Paper} style={{ paddingTop: "3em", paddingBottom: "3em" }}>
            <Table stickyHeader size="small" aria-label="collapsible  table" style={{ borderBottom: "none" }}>
                <TableHead>
                    <TableRow hover>
                        <TableCell align="center" style={columnStyle}> 1 </TableCell>
                        <TableCell align="center" style={columnStyle}> TEAM STATS </TableCell>
                        <TableCell align="center" style={columnStyle}> 3 </TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableCell align="center"> 3 </TableCell>
                    <TableCell align="center"> Shots on target </TableCell>
                    <TableCell align="center"> 1  </TableCell>
                </TableBody>
                <TableBody>
                    <TableCell align="center"> 3 </TableCell>
                    <TableCell align="center"> Shots on target </TableCell>
                    <TableCell align="center"> 1  </TableCell>
                </TableBody>
                <TableBody>
                    <TableCell align="center"> 53% </TableCell>
                    <TableCell align="center"> Possession </TableCell>
                    <TableCell align="center"> 47%  </TableCell>
                </TableBody>
                <TableBody>
                    <TableCell align="center"> 53% </TableCell>
                    <TableCell align="center"> Possession </TableCell>
                    <TableCell align="center"> 47%  </TableCell>
                </TableBody>
                <TableBody>
                    <TableCell align="center"> 53% </TableCell>
                    <TableCell align="center"> Possession </TableCell>
                    <TableCell align="center"> 47%  </TableCell>
                </TableBody>
                <TableBody>
                    <TableCell align="center"> 53% </TableCell>
                    <TableCell align="center"> Possession </TableCell>
                    <TableCell align="center"> 47%  </TableCell>
                </TableBody>
                <TableBody>
                    <TableCell align="center"> 53% </TableCell>
                    <TableCell align="center"> Possession </TableCell>
                    <TableCell align="center"> 47%  </TableCell>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
}

export default Stats