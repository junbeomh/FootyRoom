import React, { Component } from 'react';
import { useHistory } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import RemoveCircleRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

import {
    getLeagueStandings,
    getTeamsStandingData
} from "../../../api"
import "../../styles/index.css"

export class Standings extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isLoading: true,
            rows: []
        };
    }

    async componentWillMount() {
        const leagueStandings = await getLeagueStandings();
        Promise.all([leagueStandings]).then((response)=> {
            console.log(response);
            this.setState({
                rows: leagueStandings,
                isLoading: false
            });
        })

        console.log(this.state.rows);
    }

    handleClick = (name) => {
        return (event) => {
            console.log(`You clicked on ${name}.`);
        }
    }


    render() {
        const { classes } = this.props;
        const { isLoading } = this.state;
        const columnStyle = { width: '0.0 1%', };
        const championsStatus = { width: '0.01%', background: "rgb(67, 133, 244)" }; // #4385f4};
        const europaStatus = { width: '0.01%', background: "rgb(250, 123, 22)" }; //#fab16};
        const europaQualStatus = { width: '0.01%', background: "rgb(52, 168, 83)" }; // #34a853};
        const relegStatus = { width: '0.01%', background: "rgb(233, 68, 54)", }; // #e94436};
        const winGameStyle = { width: "20px", height: "20px", color: "rgb(59, 167, 86)" };
        const drawGameStyle = { width: "20px", height: "20px", color: "rgb(154, 160, 166) " };
        const looseGameStyle = { width: "20px", height: "20px", color: "rgb(234, 68, 53)" };

        if (isLoading)
            return <Spinner
                as="span"
                animation="border"
                size="xlg"
                role="status"
                aria-hidden="true"
            />
        else
            return (
                <TableContainer component={Paper} style={{ padding: "2em" }}>
                    <Table stickyHeader size="small" aria-label="collapsible  table" >
                        <TableHead>
                            <TableRow hover>
                                <TableCell align="left" style={columnStyle}> </TableCell>
                                <TableCell align="left"> <b>Club</b> </TableCell>
                                <TableCell align="right" style={columnStyle}><b>MP</b></TableCell>
                                <TableCell align="right" style={columnStyle}><b>W</b></TableCell>
                                <TableCell align="right" style={columnStyle}><b>D</b></TableCell>
                                <TableCell align="right" style={columnStyle}><b>L</b></TableCell>
                                <TableCell align="right" style={columnStyle}><b>GF</b></TableCell>
                                <TableCell align="right" style={columnStyle}><b>GA</b></TableCell>
                                <TableCell align="right" style={columnStyle}><b>GD</b></TableCell>
                                <TableCell align="right" style={columnStyle}><b>Pts</b></TableCell>
                                <TableCell align="center" ><b>Last 5</b></TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.rows.map((row) => (
                                <TableRow hover key={row.id}>
                                    <TableCell
                                        onClick={this.handleClick(row.name)}
                                        style={
                                            row.rank <= 4 ? championsStatus :
                                                row.rank == 5 ? europaStatus :
                                                    row.rank == 6 ? europaQualStatus :
                                                        row.rank >= 18 ? relegStatus : columnStyle}></TableCell>
                                    <TableCell onClick={this.handleClick(row.name)} component="th" scope="row" align="left" >
                                        <div>
                                            <b>  {row.rank} </b>
                                            <img
                                                alt="Away"
                                                src={row.logo}
                                                style={{ height: "30px", width: "30px", verticalAlign: "middle", marginLeft: "1em", marginRight: "1em" }}
                                            />
                                            <b>  {row.name.includes("Manchester") ? row.name.replace("Manchester", "Man") :
                                                row.name
                                            } </b>
                                        </div>
                                    </TableCell>
                                    <TableCell onClick={this.handleClick(row.name)} align="right" style={columnStyle}>{row.data.matchsPlayed}</TableCell>
                                    <TableCell onClick={this.handleClick(row.name)} align="right" style={columnStyle}>{row.data.win}</TableCell>
                                    <TableCell onClick={this.handleClick(row.name)} align="right" style={columnStyle}>{row.data.draw}</TableCell>
                                    <TableCell onClick={this.handleClick(row.name)} align="right" style={columnStyle}>{row.data.lose}</TableCell>
                                    <TableCell onClick={this.handleClick(row.name)} align="right" style={columnStyle}>{row.data.goalsFor}</TableCell>
                                    <TableCell onClick={this.handleClick(row.name)} align="right" style={columnStyle}>{row.data.goalsAgainst}</TableCell>
                                    <TableCell onClick={this.handleClick(row.name)} align="right" style={columnStyle}>{row.goalsDiff}</TableCell>
                                    <TableCell onClick={this.handleClick(row.name)} align="right" style={columnStyle}>{row.pts}</TableCell>
                                    <TableCell>
                                        {/* <div className="box">
                                        {

                                                            row.forme.split("").map(character =>
                                                                character == "W" ? <CheckCircleRoundedIcon style={winGameStyle}> </CheckCircleRoundedIcon> :
                                                                    character == "D" ? <RemoveCircleRoundedIcon style={drawGameStyle} > </RemoveCircleRoundedIcon> :
                                                                        character == "L" ? <CancelRoundedIcon style={looseGameStyle} > </CancelRoundedIcon> :
                                                                            <RadioButtonUncheckedIcon style={{ color: "grey" }}> </RadioButtonUncheckedIcon>)
                                        }
                                    </div> */}
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            );
    }
}

export default Standings;
