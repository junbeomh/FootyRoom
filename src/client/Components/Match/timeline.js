import React from 'react';
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import ImportExportTwoToneIcon from '@material-ui/icons/ImportExportTwoTone';
import StopIcon from '@material-ui/icons/Stop';
import CancelIcon from '@material-ui/icons/Cancel';
import TimerIcon from '@material-ui/icons/Timer';
import Divider from '@material-ui/core/Divider';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import { withStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';

const styles = theme => ({
    root: {
        minWidth: "25em",
        alignItems: "center",
        justify: "center",
        marginBottom: "1.75em"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    header: {
        fontSize: 9,

    },
    title: {
        fontSize: 9,
    },
    pos: {
        marginBottom: 12,
    },
});

export class TimeLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            events: this.props.events,
            homeName: this.props.homeName,
            homeLineUp: this.props.homeLineUp,
            awayLineUp: this.props.awayLineUp,
            awayName: this.props.awayName,
            status: null
        }
    }


    async getPlayerInfo(player) {
        try {
            return await axios.get('https://api-football-v1.p.rapidapi.com/v2/players/search/' + player, {
                headers:
                {
                    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
                    'x-rapidapi-key': '7d7bfee0e3msh97516a39f39c002p13b4eejsn257543e6dca4'
                }
            }).then((response) => console.log(response.data.api.players['0'].position))

        } catch (e) {
            console.log(e);
        }
        return null;
    }


    render() {
        const { classes, homeLogo, awayLogo } = this.props;
        const { events, homeName, awayName, homeLineUp, awayLineUp } = this.state;
        const bull = <span className={classes.bullet}>•</span>;
        const styles = {
            headerLeft: {
                float: 'left',
                justify: "space-between"

            },
            headerRight: {
                float: 'right',
                justify: "space-between"

            },
        }
        if (events == null) {
            return (
                <div >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}> <TimerIcon style={{ width: "1.75em", height: "1.75em", color: "grey" }}> </TimerIcon> </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}> <p style={{ color: "grey" }}> The time-line will be posted when the match starts </p> </div>
                </div>
            )
        } else
            return (
                <div>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center"
                        style={{}}
                    >
                        {events.reverse().map((event, index) => (

                            <Grid style={{ paddingTop: "1.5em" }} key={index}>
                                <Card className={classes.root}>

                                    <CardHeader
                                        className={classes.header}
                                        subheader={
                                            <div>
                                                <div style={styles.headerLeft}>
                                                    {event.type == "subst" ? <div> <ImportExportTwoToneIcon style={{ color: "green" }}> </ImportExportTwoToneIcon> <b> SUBSTITUTION </b> </div> :
                                                        event.type == "Goal" && event.detail == "Missed Penalty" ? <div> <CancelIcon style={{ color: "red" }}> </CancelIcon>  <b> {event.detail.toUpperCase()} </b> </div> :
                                                            event.type == "Goal" && (event.detail == "Normal Goal" || event.detail == "Penalty") ? <div> <SportsSoccerIcon style={{ color: "black" }}> </SportsSoccerIcon> <b> GOAL!!! </b> </div> :
                                                                event.type == "Card" && event.detail == "Yellow Card" ? <div> <StopIcon style={{ color: "yellow" }}> </StopIcon> <b> {event.detail.toUpperCase()} </b> </div> :
                                                                    event.type == "Card" && event.detail == "Red Card" ? <div> <StopIcon style={{ color: "red" }}> </StopIcon> <b> {event.detail.toUpperCase()} </b> </div> :
                                                                        ""}
                                                </div>
                                                <div style={styles.headerRight}>
                                                    <b> {event.elapsed + "' " + (event.elapsed_plus != null ? "+ " + event.elapsed_plus + "'" : "")} </b>
                                                </div>
                                            </div>
                                        } />

                                    <CardContent>
                                        {event.type == "subst" ?
                                            <div>
                                                <div>
                                                    <div>
                                                        <span style={{ color: "green", fontSize: "12px" }}> IN </span>
                                                        <p style={{ fontSize: "16px" }}> {event.player} </p>
                                                    </div>

                                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                                        <img
                                                            alt="Away"
                                                            src={event.teamName == homeName ? homeLogo : awayLogo}
                                                            style={{ height: "16px", width: "16px", marginRight: "0.5em" }}
                                                        />
                                                        <p> {event.teamName} </p>
                                                    </div>
                                                </div>
                                                {"\n"}
                                                <div style={{ marginTop: "1em" }}>
                                                    <div>
                                                        <span style={{ color: "red", fontSize: "12px", }}> OUT </span>
                                                        <p style={{ fontSize: "16px" }}> {event.assist} </p>
                                                    </div>

                                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                                        <img
                                                            alt="Away"
                                                            src={event.teamName == homeName ? homeLogo : awayLogo}
                                                            style={{ height: "16px", width: "16px", marginRight: "0.5em" }}
                                                        />
                                                        <p> {event.teamName} </p>

                                                    </div>
                                                </div>
                                            </div> :
                                            <div>
                                                <div>
                                                    <p style={{ fontSize: "16px" }}> {event.player} </p>
                                                </div>

                                                <div style={{ display: "flex", flexDirection: "row", }}>
                                                    <img
                                                        alt="Away"
                                                        src={event.teamName == homeName ? homeLogo : awayLogo}
                                                        style={{ height: "16px", width: "16px", marginRight: "0.5em" }}
                                                    />
                                                    <p> {event.teamName} </p>
                                                </div>
                                            </div>
                                        }

                                        {event.comments ?
                                            <div>
                                                <Divider style={{ marginTop: "1em", marginBottom: "1em" }} />
                                                <Typography style={{ fontSize: "14px" }}> {bull} {event.player + " was booked for " + event.comments.toLowerCase() + "."} </Typography>
                                            </div>
                                            :
                                            ""
                                        }

                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div >
            );
    }
}

export default withStyles(styles, { withTheme: true })(TimeLine);