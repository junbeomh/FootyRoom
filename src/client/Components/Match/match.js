import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Divider, Image, Segment } from 'semantic-ui-react'
import MatchTabs from './tabs';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import HomeIcon from '@material-ui/icons/Home';
import SportsIcon from '@material-ui/icons/Sports';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import IconButton from '@material-ui/core/IconButton';
import {
    getFixture,
} from "../../../api"


class Fixture extends React.Component {
    constructor(props) {
        super(props);
        this.handleBack = this.handleBack.bind(this); // you are missing this line
        this.state = {
            isLoading: true,
            fixture: [],
            status: null
        }
    }

    async componentDidMount() {
        await this.fetchData();
    }


    async fetchData() {
        const fixtureData = await getFixture(this.props.location.state.matchId);
        Promise.all([fixtureData]).then((response) => {
            this.setState({
                fixture: response["0"].data.api.fixtures["0"],
                isLoading: false,
                status: response["0"].data.api.fixtures["0"].statusShort
            })
        }).then(() => {
            if (this.state.status == "1H" || this.state.status == "HT"
                || this.state.status == "2H" || this.state.status == "ET" || this.state.status == "P") {
                console.log("Match is live, fetching realtime data");
                this.interval = setInterval(() => {
                    this.fetchData();
                }, 15000); //fetch api data every 15sec
            }
        })
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleBack() {
        this.props.history.push('/');
    }


    render() {
        const { isLoading, fixture } = this.state;
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const timestampOffset = 28800;
        const styles = {
            mainContainer: {
                flex: 1,
                flexWrap: 'wrap',
                flexDirection: 'row',
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
            },
            containerStyle: {
                height: '100%',
                width: '80%',
                marginLeft: "6em",
                padding: '1em',
                display: "relative", justifyContent: "space-around", alignItems: "center",
            }
        }

        const fixtureStyle = {
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginBottom: "3em",
            height: "4em",
        }


        if (isLoading)
            return (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "16em" }}>
                    <Spinner
                        as="span"
                        animation="border"
                        size="xlg"
                        role="status"
                        aria-hidden="true"
                    />
                </div>);
        else
            return (
                <Paper style={{ width: "90%", marginLeft: "3em", marginTop: "1em", marginBottom: "1em" }}>
                    <div style={{ marginBottom: "3em" }}>

                        <IconButton
                            children={<ArrowBackOutlinedIcon> </ArrowBackOutlinedIcon>}
                            color='secondary'
                            onClick={this.handleBack}
                            variant="secondary">
                        </IconButton>

                        <span style={{ marginRight: "1em" }}>
                            <img
                                alt="logo"
                                src={fixture.league.logo}
                                style={{ height: "25px", width: "25px", verticalAlign: "middle", }}
                            />

                            <span> {fixture.round.replace("Regular Season - ", "EPL R")} </span>
                        </span>

                        <span style={{ marginRight: "1em" }}>
                            <CalendarTodayIcon style={{ color: "rgb(56, 0, 60)", marginRight: "0.25em" }}>  </CalendarTodayIcon>
                            {months[new Date((fixture.event_timestamp - timestampOffset) * 1000).getMonth()] + "."
                                + new Date((fixture.event_timestamp - timestampOffset) * 1000).getDate() + ", "
                                + new Date((fixture.event_timestamp) * 1000).getHours() + ":"
                                + ("0" + new Date((fixture.event_timestamp - timestampOffset) * 1000).getMinutes()).substr(-2) + " PST"
                            }
                        </span>


                        <span style={{ marginRight: "1em" }}>
                            <HomeIcon style={{ color: "rgb(56, 0, 60)", marginRight: "0.25em" }}> </HomeIcon>
                            {fixture.venue}
                        </span>

                        <span style={{ marginRight: "1em" }}>
                            <SportsIcon style={{ color: "rgb(56, 0, 60)", marginRight: "0.25em" }}>  </SportsIcon>
                            {fixture.referee != null ? fixture.referee : "TBD"}
                        </span>

                    </div>

                    <Segment basic textAlign='center'>
                        <div style={fixtureStyle}>
                            <Segment basic >
                                <div style={{ height: "80px", width: "80px", marginTop: "1em", marginBottom: "0.5em" }}>
                                    <Image src={fixture.homeTeam.logo} style={{}} centered />
                                </div>
                                <b style={{ fontSize: "1.25em", }}> {fixture.homeTeam.team_name} </b>
                            </Segment>

                            <div style={{ display: "inline-block", marginTop: "1em" }}>
                                <span className="" style={{ fontSize: "3em", }}> {fixture.goalsHomeTeam} </span>

                                {fixture.statusShort == "FT" ? <span className="" style={{ fontSize: "1.15em", marginLeft: "4em", marginRight: "4em", color: "rgb(56, 0, 60)" }}> FT </span> :
                                    fixture.statusShort == "NS" || fixture.statusShort == "TBD" || fixture.statusShort == "PST" ? <span className="" style={{ fontSize: "1.15em", marginLeft: "4em", marginRight: "4em", color: "black" }}> VS </span> :
                                        fixture.statusShort == "HT" ? <span className="" style={{ fontSize: "1.15em", marginLeft: "4em", marginRight: "4em", color: "green" }}> HT </span> :
                                            fixture.statusShort == "1H" || fixture.statusShort == "2H" ? <span className="" style={{ fontSize: "1.15em", marginLeft: "4em", marginRight: "4em", color: "green" }}> {fixture.elapsed + "'"} </span> :
                                                <span className="" style={{ fontSize: "1.15em", marginLeft: "4em", marginRight: "4em", color: "green" }}> </span>
                                }

                                <span className="" style={{ fontSize: "3em", }}> {fixture.goalsAwayTeam} </span>
                            </div>

                            <Segment basic style={{ marginBottom: "1em" }}>
                                <div style={{ height: "80px", width: "80px", marginBottom: "0.5em" }}>
                                    <Image src={fixture.awayTeam.logo} style={{}} centered />
                                </div>
                                <b style={{ fontSize: "1.25em", }}>  {fixture.awayTeam.team_name}  </b>
                            </Segment>
                        </div>

                        <Divider section style={{ marginTop: "2.5em" }} />

                        <div>
                            <TableContainer style={{ paddingLeft: "2em", paddingRight: "2em" }}>
                                <Table size="small" aria-label="a dense table">
                                    <TableBody>
                                        {fixture.events == null ? "" :
                                            fixture.events.map((event, index) => (
                                                event.type == "Goal" && event.detail != "Missed Penalty" && event.teamName == fixture.homeTeam.team_name ?
                                                    <TableRow key={index}>
                                                        <TableCell align="left" style={{ width: '0.01%', }}>
                                                            <p key={index}> {event.player + " " + event.elapsed + "'"} </p>                                                        </TableCell>
                                                        <TableCell align="center" style={{ width: '0.01%', }}> <SportsSoccerIcon> </SportsSoccerIcon> </TableCell>
                                                        <TableCell align="right" style={{ width: '0.01%', }}>
                                                        </TableCell>
                                                    </TableRow>
                                                    : event.type == "Goal" && event.detail != "Missed Penalty" && event.teamName == fixture.awayTeam.team_name ?
                                                        <TableRow key={index}>
                                                            <TableCell align="left" style={{ width: '0.01%', }}>
                                                            </TableCell>
                                                            <TableCell align="center" style={{ width: '0.01%', }}> <SportsSoccerIcon> </SportsSoccerIcon> </TableCell>
                                                            <TableCell align="right" style={{ width: '0.01%', }}>
                                                                <p key={index}> {event.player + " " + event.elapsed + "'"} </p>                                                            </TableCell>
                                                        </TableRow>
                                                        : null
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </Segment>

                    <MatchTabs fixture={this.state.fixture}> </MatchTabs>

                </Paper >
            )
    }

}

export default Fixture;
