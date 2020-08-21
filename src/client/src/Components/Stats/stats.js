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
import SportsSoccerTwoToneIcon from '@material-ui/icons/SportsSoccerTwoTone';
import PanToolTwoToneIcon from '@material-ui/icons/PanToolTwoTone';
import SportsKabaddiTwoToneIcon from '@material-ui/icons/SportsKabaddiTwoTone';

const useStyles = makeStyles({
    table: {
        maxWidth: 300,
    },
});


function createData(name, stat) {
    return { name, stat };
}
const rows = [
    createData('Raheem Sterling', 38),
    createData('Messi', 38,),
    createData('Dybala', 38,),
    createData('Werner', 38),
    createData('Kai Havertz', 38,),
];

class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: []
        };
    }

    // async componentWillMount() {
    //     const leagueStandings = await getLeagueStandings();
    //     console.log(leagueStandings.data.api.standings);
    //     this.setState({
    //         rows: getTeamsStandingData(leagueStandings.data.api.standings["0"]),
    //     })
    //     console.log(this.state.rows);
    // }

    render() {
        const { classes } = this.props;

        const styles = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "#fff",
            color: "#000",
            overflowY: "scroll",
            paddingTop: "2em",
            textAlign: "center"
          };

          const styles2 = {
          };


        return (
            <div style={styles}>
                <br></br>
                <div>
                    <span> Most Goals </span>
                    <SportsSoccerTwoToneIcon> </SportsSoccerTwoToneIcon>
                </div>
                <div>
                    <TableContainer component={Paper} style={{styles2} }>
                        <Table size="small" aria-label="a dense table" >
                            <TableHead>
                                <TableRow> 
                                    <TableCell>Player</TableCell>
                                    <TableCell align="right">Goals</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.stat}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <br></br>
                <div>
                    <span> Most Assist </span>
                    <SportsKabaddiTwoToneIcon> </SportsKabaddiTwoToneIcon>
                </div>
                <div>
                    <TableContainer component={Paper}  >
                        <Table size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Player</TableCell>
                                    <TableCell>Goals</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.stat}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <br></br>
                <div>
                    <span> Most Clean Sheets </span>
                    <PanToolTwoToneIcon> </PanToolTwoToneIcon>
                </div>
                <div>
                    <TableContainer component={Paper} >
                        <Table size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Player</TableCell>
                                    <TableCell>Goals</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.stat}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        );
    }
}

export default Stats;