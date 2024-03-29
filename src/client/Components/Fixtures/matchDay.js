import React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import { Progress } from 'react-sweet-progress';
import Spinner from 'react-bootstrap/Spinner';
import "react-sweet-progress/lib/style.css";
import {
    getRoundFixtures,
} from "../../../api"

class FixtureCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            index: this.props.index,
            matchDay: this.props.matchDay,
            isLoading: true,
            onClickId: null,
            fixtures: []
        }
    }

    async componentDidMount() {
        console.log("START CDM " + this.state.matchDay)
        const roundFixtures = await getRoundFixtures(this.props.matchDay);
        Promise.all([roundFixtures]).then((response) => {
            this.setState({
                fixtures: roundFixtures,
                isLoading: false
            });
        })
        console.log("END CDM " + this.state.matchDay)
    }


    handleClick = (fixture) => {
        return (event) => {
            console.log(`Clicked ${fixture.homeName} vs. ${fixture.awayName} on ${fixture.date}`);
            this.setState({ onClickId: fixture.id, redirect: true });
        }
    }

    renderItems() {
        console.log(this.state.fixtures);
        const cardStyle = {
            width: '20em',
            marginBottom: "1em",
            // marginTop: "0.5em"
        }
        const fixtureStyle = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            alignSelf: "center",
            marginBottom: "1em",
            width: "16em",
            height: "3em",
            color: "black",
        }
        const timestampOffset = 28800;
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return this.state.fixtures.map((fixture, index) => (
            <Grid.Column onClick={this.handleClick(fixture)} mobile={16} tablet={8} computer={4}>
                <Card style={cardStyle}>
                    <Card.Content header={
                        months[new Date((fixture.timeStamp - timestampOffset) * 1000).getMonth()] + "."
                        + new Date((fixture.timeStamp - timestampOffset) * 1000).getDate() + " "
                        + new Date((fixture.timeStamp - timestampOffset) * 1000).getFullYear() + ", "
                        + new Date((fixture.timeStamp) * 1000).getHours() + ":"
                        + ("0" + new Date((fixture.timeStamp - timestampOffset) * 1000).getMinutes()).substr(-2) + " PST"
                        + "  -  " + (fixture.statusLong == "Time to be defined" ? "TBD" : fixture.statusLong)
                    } style={{ fontSize: "0.65em", justifyContent: "space-around", alignItems: "center", }} />

                    <div style={fixtureStyle}>
                        <img
                            alt="Home"
                            src={fixture.homeTeam.logo}
                            style={{ height: "40px", width: "40px", marginTop: "1em" }}
                        />
                        <div style={{ display: "inline-block", verticalAlign: "top", marginTop: "1.5em" }}>
                            <span className="" style={{ fontSize: "1.5em", marginLeft: "0.5em" }}> {fixture.goalsHome} </span>

                            {/*
                                TBD : Time To Be Defined
                                NS : Not Started
                                1H : First Half, Kick Off
                                HT : Halftime
                                2H : Second Half, 2nd Half Started
                                ET : Extra Time
                                P : Penalty In Progress
                                FT : Match Finished
                                PST: Match Postponed */}
                            {
                                fixture.status == "FT" ? <span className="" style={{ fontSize: "1.15em", marginLeft: "1.25em", marginRight: "1.25em", color: "rgb(56, 0, 60)" }}> FT </span> :
                                    fixture.status == "NS" || fixture.status == "TBD" || fixture.status == "PST" ? <span className="" style={{ fontSize: "1.15em", marginLeft: "1.25em", marginRight: "1.25em", color: "black" }}> VS </span> :
                                        fixture.status == "HT" ? <span className="" style={{ fontSize: "1.15em", marginLeft: "1.25em", marginRight: "1.25em", color: "green" }}> HT </span> :
                                            fixture.status == "1H" || fixture.status == "2H" ? <span className="" style={{ fontSize: "1.15em", marginLeft: "1.25em", marginRight: "1.25em", color: "green" }}> {fixture.elapsed + "'"} </span> :
                                                <span className="" style={{ fontSize: "1.15em", marginLeft: "1.25em", marginRight: "1.25em", color: "green" }}> </span>
                            }


                            <span className="" style={{ fontSize: "1.5em", marginRight: "0.5em" }}> {fixture.goalsAway} </span>
                        </div>
                        <img
                            alt="Away"
                            src={fixture.awayTeam['logo']}
                            style={{ height: "40px", width: "40px", marginTop: "1em" }}
                        />
                    </div>
                    <Progress
                        theme={{
                            success: {
                                symbol: '   ‍',
                                color: 'rgb(56, 0, 60)'
                            },
                            active: {
                                symbol: '  ',
                                color: 'rgb(59, 167, 86)'
                            },

                            default: {
                                symbol: '  ',
                                color: 'orange'
                            }
                        }}
                        style={{ marginLeft: "1em", marginBottom: "" }}
                        percent={(fixture.elapsed / 90) * 100} />

                </Card>
            </Grid.Column>
        ));
    }


    render() {
        const { isLoading } = this.state;
        const styles = {
            mainContainer: {
                flex: 1,
                flexWrap: 'wrap',
                flexDirection: 'row',
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                paddingTop: '1em',


            },
            containerStyle: {
                paddingLeft: '11em',
                paddingRight: '11em',
                paddingTop: '2em',
                paddingBottom: '4em',
                backgroundColor: 'rgba(215,33, 116, 0.5)',
                display: "absolute",
                justifyContent: "space-around",
                alignItems: "center",

            }
        }
        console.log("rendering " + this.state.matchDay)
        if (this.state.redirect) {

            return <Redirect to={{ pathname: '/fixture', state: { matchId: this.state.onClickId } }} />;
        }

        if (isLoading)
            return (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "16em"}}>
                    <Spinner
                        as="span"
                        animation="border"
                        size="xlg"
                        role="status"
                        aria-hidden="true"
                    />
                </div>
            )
        else
            return (
                <div style={styles.mainContainer}>
                    <h3 style={{ marginBottom: "1em", fontSize: "1.25em" }}> Matchday {this.state.matchDay.replace("Regular_Season_-_", "")} of 38 </h3>
                    <Grid columns={'two'} >
                        <Grid.Row style={styles.containerStyle}>
                            {this.renderItems()}
                        </Grid.Row>
                    </Grid>
                </div>
            );
    }
}

export default FixtureCard