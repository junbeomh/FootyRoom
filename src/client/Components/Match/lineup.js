import React from 'react';
import SoccerLineUp from 'react-soccer-lineup';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class LineUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            home: this.props.home,
            away: this.props.away,
            homeLogo: this.props.homeLogo,
            awayLogo: this.props.awayLogo,
        }
    }
    buildHomeTeam = (home) => {

        const gk = {};
        return {
            squad: {
                gk: {
                    name: "Hugo Lloris",
                    number: 14
                },
                df: [{
                    number: 2
                }, {
                    number: 4
                }, {
                    number: 5,
                }, {
                    number: 3
                }],
                cm: [{
                    number: 6
                }, {
                    number: 8
                }],
                cam: [{
                    number: 11
                }, {
                    number: 10
                }, {
                    number: 7
                }],
                fw: [{
                    number: 9
                }]
            }
        }
    }

    buildAwayTeam = (away) => {
        return {
            color: 'lightblue',
            squad: {
                gk: {
                    number: 1
                },
                df: [{
                    number: 2
                }, {
                    number: 4
                }, {
                    number: 5,
                },],
                cm: [{
                    number: 7
                }, {
                    number: 8
                }, {
                    number: 6
                }, {
                    number: 10
                },
                {
                    number: 3
                }],
                fw: [{
                    number: 9
                }, {
                    number: 11
                }]
            }
        }
    }

    render() {
        const { home, away, homeLogo, awayLogo } = this.state;
        const columnStyle = { width: "1em", fontSize: "1em" };

        console.log(this.state.home);
        console.log(this.state.away);
        console.log(this.state.homeLogo);
        console.log(this.state.awayLogo);

        return (
            <div>
                <div>
                    <SoccerLineUp
                        size={"responsive"}
                        color={"#588f58"}
                        pattern={"lines"}
                        homeTeam={this.buildHomeTeam(home)}
                        awayTeam={this.buildAwayTeam(away)} />
                </div>
                <TableContainer component={Paper} style={{}}>
                    <Table stickyHeader size="small" aria-label="collapsible  table" style={{ borderBottom: "none" }}>
                        <TableHead>
                            <TableRow hover>
                                <TableCell align="left" style={columnStyle}>
                                    <div>
                                        <img
                                            alt="Home"
                                            src={homeLogo}
                                            style={{ height: "35px", width: "35px", verticalAlign: "middle", marginLeft: "1em", marginRight: "1em" }}
                                        />
                                        <span> {home.formation} </span>
                                    </div>
                                </TableCell>
                                <TableCell align="center" style={columnStyle}> STARTING XI </TableCell>
                                <TableCell align="right" style={columnStyle}>
                                    <div>
                                        <span> {away.formation} </span>
                                        <img
                                            alt="Away"
                                            src={awayLogo}
                                            style={{ height: "35px", width: "35px", verticalAlign: "middle", marginLeft: "1em", marginRight: "1em" }}
                                        />
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {home.startXI == null ? "" :
                                home.startXI.map((order, index) => (
                                    <TableRow key={index}>
                                        <TableCell align="left" style={{ fontSize: "1em" }}>
                                            <p style={{ marginLeft: "2em" }}> {home.startXI[index].number + ". " + home.startXI[index].player}  </p>
                                        </TableCell>
                                        <TableCell align="center" style={columnStyle}></TableCell>
                                        <TableCell align="right" style={{ fontSize: "1em" }}>
                                            <p style={{ marginRight: "2em" }}>  {away.startXI[index].player + " " + away.startXI[index].number}  </p>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>

                </TableContainer>
                <TableContainer component={Paper}>
                    <Table stickyHeader size="small" aria-label="collapsible  table" style={{ borderBottom: "none" }}>
                        <TableHead>
                            <TableRow hover>
                                <TableCell align="left" style={columnStyle}>
                                    <div>
                                        <img
                                            alt="Home"
                                            src={homeLogo}
                                            style={{ height: "35px", width: "35px", verticalAlign: "middle", marginLeft: "1em", marginRight: "1em" }}
                                        />
                                    </div>
                                </TableCell>
                                <TableCell align="center" style={columnStyle}> SUBSITTUTES</TableCell>
                                <TableCell align="right" style={columnStyle}>
                                    <div>
                                        <img
                                            alt="Away"
                                            src={awayLogo}
                                            style={{ height: "35px", width: "35px", verticalAlign: "middle", marginLeft: "1em", marginRight: "1em" }}
                                        />
                                    </div>
                                </TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {home.substitutes == null ? "" :
                                home.substitutes.map((order, index) => (
                                    <TableRow key={index}>
                                        <TableCell align="left" style={{ fontSize: "1em" }}>
                                            <p style={{ marginLeft: "2em" }}> {home.substitutes[index].number + ". " + home.substitutes[index].player}  </p>
                                        </TableCell>
                                        <TableCell align="center" style={columnStyle}></TableCell>
                                        <TableCell align="right" style={{ fontSize: "1em" }}>
                                            <p style={{ marginRight: "2em" }}>  {away.substitutes[index].player + " " + away.substitutes[index].number}  </p>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                
                <TableContainer component={Paper} style={{ paddingBottom: "3em" }}>
                    <Table stickyHeader size="small" aria-label="collapsible  table" style={{ borderBottom: "none" }}>
                        <TableHead>
                            <TableRow hover>
                                <TableCell align="left" style={columnStyle}>
                                    <div>
                                        <img
                                            alt="Home"
                                            src={homeLogo}
                                            style={{ height: "35px", width: "35px", verticalAlign: "middle", marginLeft: "1em", marginRight: "1em" }}
                                        />
                                    </div>
                                </TableCell>
                                <TableCell align="center" style={columnStyle}> MANAGER </TableCell>
                                <TableCell align="right" style={columnStyle}>
                                    <div>
                                        <img
                                            alt="Away"
                                            src={awayLogo}
                                            style={{ height: "35px", width: "35px", verticalAlign: "middle", marginLeft: "1em", marginRight: "1em" }}
                                        />
                                    </div>
                                </TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <TableRow>
                                <TableCell align="left" style={{ fontSize: "1em" }}>
                                    <p style={{ marginLeft: "2em" }}> {home.coach}   </p>
                                </TableCell>
                                <TableCell align="center" style={columnStyle}></TableCell>
                                <TableCell align="right" style={{ fontSize: "1em" }}>
                                    <p style={{ marginRight: "2em" }}>  {away.coach}  </p>
                                </TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default LineUp