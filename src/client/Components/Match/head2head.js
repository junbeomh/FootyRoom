import React from 'react';
import Paper from '@material-ui/core/Paper';
import Spinner from 'react-bootstrap/Spinner';
import { Divider, Header, Image, Segment } from 'semantic-ui-react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";

import {
    getHeadToHeadFixtures,
} from "../../../api"

const styles = theme => ({
    root: {
        minWidth: "30em",
        maxHeight: "10em",
        alignItems: "center",
        justify: "center",
        marginBottom: "1.5em"
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

class HeadToHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            homeId: this.props.homeId,
            awayId: this.props.awayId,
            fixtures: null
        }
    }

    async componentDidMount() {
        const h2hFixtures = await getHeadToHeadFixtures(this.state.homeId, this.state.awayId);
        Promise.all([h2hFixtures]).then((response) => {
            console.log(response);
            this.setState({
                fixtures: h2hFixtures,
                isLoading: false
            })
        })
        console.log(this.state.h2hFixtures);
    }

    render() {
        const { classes } = this.props;
        const { isLoading, homeId, awayId, fixture } = this.state;
        const fixtureStyle = {
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginBottom: "3em",
        };
        const timestampOffset = 28800;
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        console.log('home: ' + homeId);
        console.log('away: ' + awayId);

        if (isLoading)
            return <Spinner
                as="span"
                animation="border"
                size="xlg"
                role="status"
                aria-hidden="true" />
        else
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
                        {this.state.fixtures.map((fixture, index) => (

                            <Grid style={{paddingTop: "1.5em"}} key={index}>
                                <Card className={classes.root}>
                                    <CardHeader
                                        className={classes.header}
                                        subheader={months[new Date((fixture.timeStamp - timestampOffset) * 1000).getMonth()] + "."
                                            + new Date((fixture.timeStamp - timestampOffset) * 1000).getDate() + " "
                                            + new Date((fixture.timeStamp - timestampOffset) * 1000).getFullYear() + ", "
                                            + new Date((fixture.timeStamp) * 1000).getHours() + ":"
                                            + ("0" + new Date((fixture.timeStamp - timestampOffset) * 1000).getMinutes()).substr(-2) + " PST"
                                            + "  -  " + (fixture.statusLong == "Time to be defined" ? "TBD" : fixture.statusLong)}
                                    />
                                    <CardContent>
                                        <div style={fixtureStyle} index={index}>
                                            <Image src={fixture.homeTeam.logo} style={{ height: "50px", width: "50px", }} centered />

                                            <div style={{ display: "inline-block", }}>
                                                <span className="" style={{ fontSize: "1.75em", }}> {fixture.goalsHome ? fixture.goalsHome: "0"} </span>

                                                {fixture.status == "FT" ? <span className="" style={{ fontSize: "1.15em", marginLeft: "4em", marginRight: "4em", color: "rgb(56, 0, 60)" }}> FT </span> :
                                                    fixture.status == "NS" || fixture.status == "TBD" || fixture.status == "PST" ? <span className="" style={{ fontSize: "1.15em", marginLeft: "4em", marginRight: "4em", color: "black" }}> VS </span> :
                                                        fixture.status == "HT" ? <span className="" style={{ fontSize: "1.15em", marginLeft: "4em", marginRight: "4em", color: "green" }}> HT </span> :
                                                            fixture.status == "1H" || fixture.status == "2H" ? <span className="" style={{ fontSize: "1.15em", marginLeft: "4em", marginRight: "4em", color: "green" }}> {fixture.elapsed + "'"} </span> :
                                                                <span className="" style={{ fontSize: "1.15em", marginLeft: "4em", marginRight: "4em", color: "green" }}> </span>
                                                }



                                                <span className="" style={{ fontSize: "1.75em", }}> {fixture.goalsAway ? fixture.goalsAway: "0"} </span>
                                            </div>

                                            <Image src={fixture.awayTeam.logo} style={{ height: "50px", width: "50px", }} centered />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            );
    }
}

export default withStyles(styles, { withTheme: true })(HeadToHead);