import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AssessmentIcon from '@material-ui/icons/Assessment';

class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stats: this.props.stats,
            home: this.props.home,
            away: this.props.away,
            order: [
                "Total Shots",
                "Shots on Goal",
                "Shots insidebox",
                "Shots off Goal",
                "Shots outsidebox",
                "Ball Possession",
                "Total passes",
                "Passes accurate",
                "Passes %",
                "Fouls",
                "Yellow Cards",
                "Red Cards",
                "Offsides",
                "Corner Kicks",
                "Goalkeeper Saves",
                "Blocked Shots",
            ]
        }
    }



    render() {
        const columnStyle = { width: "1em", fontSize: "1em" };
        const { stats, home, away } = this.state;

        if (stats == null) {
            return (
                <div >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}> <AssessmentIcon style={{ width: "1.75em", height: "1.75em", color: "grey" }}> </AssessmentIcon> </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}> <p style={{ color: "grey" }}>  Match statistics will be posted when the match starts  </p> </div>
                </div>
            )
        } else
            return (
                <TableContainer component={Paper} style={{ paddingTop: "3em", paddingBottom: "3em" }}>
                    <Table stickyHeader size="small" aria-label="collapsible  table" style={{ borderBottom: "none" }}>
                        <TableHead>
                            <TableRow hover>
                                <TableCell align="left" style={columnStyle}>
                                    <div>
                                        <img
                                            alt="Away"
                                            src={home.logo}
                                            style={{ height: "35px", width: "35px", verticalAlign: "middle", marginLeft: "1em", marginRight: "1em" }}
                                        />
                                    </div>
                                </TableCell>
                                <TableCell align="center" style={columnStyle}> TEAM STATS </TableCell>
                                <TableCell align="right" style={columnStyle}>
                                    <div>
                                        <img
                                            alt="Away"
                                            src={away.logo}
                                            style={{ height: "35px", width: "35px", verticalAlign: "middle", marginLeft: "1em", marginRight: "1em" }}
                                        />
                                    </div>
                                </TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {stats == null ? console.log(stats) :
                                this.state.order.map((order, index) => (
                                    <TableRow key={index}>
                                        <TableCell align="left" style={{ fontSize: "1em" }}>
                                            <p style={{ marginLeft: "2em" }}>   {!stats[order].home ? 0 : stats[order].home}  </p>
                                        </TableCell>
                                        <TableCell align="center" style={{ fontSize: "1em" }}>  <p> {order} </p></TableCell>
                                        <TableCell align="right" style={{ fontSize: "1em" }}>
                                            <p style={{ marginRight: "2em" }}>   {!stats[order].away ? 0 : stats[order].away}  </p>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            );
    }
}

export default Stats