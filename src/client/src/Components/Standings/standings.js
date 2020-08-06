// import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles({
//     table: {
//         minWidth: 650,
//     },
// });

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }


// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// class Standings extends React.Component {
//     constructor(props) {
//         super(props);

//     }
// componentWillMount() {
//     fetch('http://127.0.0.1:8000/allowances')
//     .then(data=>{  

//         return data.json();      

//     }).then(data=> {          

//         this.setState({allowances : data});

//         console.log("allowance state",this.state.allowances);
//     })
// }

//     render() {

//         return (

//             <TableContainer component={Paper}>
//                 <Table className={classes.table} size="small" aria-label="a dense table">
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Dessert (100g serving)</TableCell>
//                             <TableCell align="right">Calories</TableCell>
//                             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//                             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//                             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {rows.map((row) => (
//                             <TableRow key={row.name}>
//                                 <TableCell component="th" scope="row">
//                                     {row.name}
//                                 </TableCell>
//                                 <TableCell align="right">{row.calories}</TableCell>
//                                 <TableCell align="right">{row.fat}</TableCell>
//                                 <TableCell align="right">{row.carbs}</TableCell>
//                                 <TableCell align="right">{row.protein}</TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         );
//     }
// }

// export default Standings;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
    getLeagueStandings,
    getTeamsStandingData
} from "../../../api"


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


// function createData(club, mp, w, d, l, gf, ga, gd, pts, forme) {
//     return { club, mp, w, d, l, gf, ga, gd, pts, forme };
// }
// const rows = [
//     createData('Liverpool', 38, 32, 3, 3, 85, 33, 52, 99,),
//     createData('Man City', 38, 26, 3, 9, 102, 35, 67, 81),
//     createData('Man United', 38, 18, 12, 8, 66, 36, 30, 66),
//     createData('Chelsea', 38, 20, 6, 12, 69, 54, 15, 66),
//     createData('Leicester City', 38, 18, 8, 12, 67, 41, 26, 62),
// ];

class Standings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: []
        };
    }

    async componentWillMount() {
        const leagueStandings = await getLeagueStandings();
        console.log(leagueStandings.data.api.standings);
        this.setState({
            rows: getTeamsStandingData(leagueStandings.data.api.standings["0"]),
        })

        // const standings = getTeamStandingData(leagueStandings.data.api.standings)
        // console.log(standings);
        // rows.forEach((item, i) => {
        //     rows.push(createData(item.id, item.category_name, item.category_details));
        // });
        console.log(this.state.rows);
    }

    render() {
        const { classes } = this.props;

        return (
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell> </TableCell>
                            <TableCell>Club</TableCell>
                            <TableCell align="right">MP</TableCell>
                            <TableCell align="right">W</TableCell>
                            <TableCell align="right">D</TableCell>
                            <TableCell align="right">L</TableCell>
                            <TableCell align="right">GF</TableCell>
                            <TableCell align="right">GA</TableCell>
                            <TableCell align="right">GD</TableCell>
                            <TableCell align="right">Pts</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>
                                    <div>
                                        <img
                                            alt="Away"
                                            src={row.logo}
                                            style={{ height: "30px", width: "30px" }}
                                        />
                                    </div>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.rank + " " + row.name}
                                </TableCell>
                                <TableCell align="right">{row.data.matchsPlayed}</TableCell>
                                <TableCell align="right">{row.data.win}</TableCell>
                                <TableCell align="right">{row.data.draw}</TableCell>
                                <TableCell align="right">{row.data.lose}</TableCell>
                                <TableCell align="right">{row.data.goalsFor}</TableCell>
                                <TableCell align="right">{row.data.goalsAgainst}</TableCell>
                                <TableCell align="right">{row.goalsDiff}</TableCell>
                                <TableCell align="right">{row.pts}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default Standings;


// export default function Standings() {
//     const classes = useStyles();
//     // this.state.rows.forEach((item, i) => {
//     //     rows.push(createData(item.id, item.category_name, item.category_details));
//     // });

//     // async function componentWillMount() {
//     //     const leagueStandings = await getLeagueStandings();
//     //     console.log(leagueStandings.data.api.standings); 

//     //     const standings = getTeamStandingData(leagueStandings.data.api.standings)
//     //     console.log(standings);
//     //     rows.forEach((item, i) => {
//     //         rows.push(createData(item.id, item.category_name, item.category_details));
//     //     });
//     //     console.log(rows);
//     // }
//     // componentWillMount();

//     // console.log(getTeamStandingData(leagueStandings.data.api.standings));

//     return (
//         <TableContainer component={Paper}>
//             <Table className={classes.table} size="small" aria-label="a dense table">
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>Club</TableCell>
//                         <TableCell align="right">MP</TableCell>
//                         <TableCell align="right">W</TableCell>
//                         <TableCell align="right">D</TableCell>
//                         <TableCell align="right">L</TableCell>
//                         <TableCell align="right">GF</TableCell>
//                         <TableCell align="right">GA</TableCell>
//                         <TableCell align="right">GD</TableCell>
//                         <TableCell align="right">Pts</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {rows.map((row) => (
//                         <TableRow key={row.id}>
//                             <TableCell component="th" scope="row">
//                                 {row.club}
//                             </TableCell>
//                             <TableCell align="right">{row.matchsPlayed}</TableCell>
//                             <TableCell align="right">{row.win}</TableCell>
//                             <TableCell align="right">{row.draw}</TableCell>
//                             <TableCell align="right">{row.lose}</TableCell>
//                             <TableCell align="right">{row.goalsFor}</TableCell>
//                             <TableCell align="right">{row.goalsAgainst}</TableCell>
//                             <TableCell align="right">{row.goalsDiff}</TableCell>
//                             <TableCell align="right">{row.pts}</TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// }