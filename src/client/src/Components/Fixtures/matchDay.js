import React, { Component } from 'react';
import { Grid, Card, Icon, Image, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

class FixtureCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            matchDay: this.props.matchDay,
            fixtures: [
                {
                    date: "2020/07/14",
                    homeLogo: "https://media.api-sports.io/football/teams/49.png",
                    homeName: "Chelsea",
                    homeScore: "1",
                    awayLogo: "https://media.api-sports.io/football/teams/71.png",
                    awayName: "Norwich City",
                    awayScore: "0",
                    isFinished: false,
                    isStarted: false

                },
                {
                    date: "2020/07/15",
                    homeLogo: "https://media.api-sports.io/football/teams/44.png",
                    homeName: "Burnley",
                    homeScore: "1",
                    awayLogo: "https://media.api-sports.io/football/teams/39.png",
                    awayName: "Wolves",
                    awayScore: "1",
                    isFinished: false,
                    isStarted: true


                },
                {
                    date: "2020/07/15",
                    homeLogo: "https://media.api-sports.io/football/teams/50.png",
                    homeName: "Man. City",
                    homeScore: "2",
                    awayLogo: "https://media.api-sports.io/football/teams/35.png",
                    awayName: "Bournemouth",
                    awayScore: "1",
                    isFinished: true,
                    isStarted: true


                },
                {
                    date: "2020/07/15",
                    homeLogo: "https://media.api-sports.io/football/teams/34.png",
                    homeName: "Newcastle",
                    homeScore: "1",
                    awayLogo: "https://media.api-sports.io/football/teams/47.png",
                    awayName: "Tottenham",
                    awayScore: "3",
                    isFinished: true,
                    isStarted: true


                },
                {
                    date: "2020/07/15",
                    homeLogo: "https://media.api-sports.io/football/teams/42.png",
                    homeName: "Arsenal",
                    homeScore: "2",
                    awayLogo: "https://media.api-sports.io/football/teams/40.png",
                    awayName: "Liverpool",
                    awayScore: "1",
                    isFinished: true,
                    isStarted: true


                },
                {
                    date: "2020/07/15",
                    homeLogo: "https://media.api-sports.io/football/teams/45.png",
                    homeName: "Everton",
                    homeScore: "1",
                    awayLogo: "https://media.api-sports.io/football/teams/66.png",
                    awayName: "Aston Villa",
                    awayScore: "1",
                    isFinished: true,
                    isStarted: true


                },
                {
                    date: "2020/07/15",
                    homeLogo: "https://media.api-sports.io/football/teams/46.png",
                    homeName: "Leicester City",
                    homeScore: "2",
                    awayLogo: "https://media.api-sports.io/football/teams/62.png",
                    awayName: "Sheffield United",
                    awayScore: "0",
                    isFinished: true,
                    isStarted: true


                },
                {
                    date: "2020/07/15",
                    homeLogo: "https://media.api-sports.io/football/teams/41.png",
                    homeName: "Southhampton",
                    homeScore: "1",
                    awayLogo: "https://media.api-sports.io/football/teams/51.png",
                    awayName: "Brighton",
                    awayScore: "1",
                    isFinished: true,
                    isStarted: true


                },
                {
                    date: "2020/07/15",
                    homeLogo: "https://media.api-sports.io/football/teams/52.png",
                    homeName: "Crystal Palace",
                    homeScore: "0",
                    awayLogo: "https://media.api-sports.io/football/teams/33.png",
                    awayName: "Man. United",
                    awayScore: "2",
                    isFinished: true,
                    isStarted: true

                },
                {
                    date: "2020/07/15",
                    homeLogo: "https://media.api-sports.io/football/teams/48.png",
                    homeName: "West Ham",
                    homeScore: "3",
                    awayLogo: "https://media.api-sports.io/football/teams/38.png",
                    awayName: "Watford",
                    awayScore: "1",
                    isFinished: true,
                    isStarted: true

                },
            ]
        }
    }



    handleClick = (fixture) => {
        return (event) => {
            console.log(`Clicked ${fixture.homeName} vs. ${fixture.awayName} on ${fixture.date}`);
            this.setState({ redirect: true });
        }
    }

    renderItems() {
        const cardStyle = {
            width: '20em',
            marginBottom: "2em",
            marginTop: "0.5em"
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

        return this.state.fixtures.map((fixture, index) => (
            <Grid.Column key={index}>
                <Card.Group itemsPerRow={2} onClick={this.handleClick(fixture)}>
                    <Card style={cardStyle}>
                        <Card.Content header={fixture.date} style={{ fontSize: "0.75em", fontStyle: "italic", justifyContent: "space-around", alignItems: "center", }} />
                        <div style={fixtureStyle}>
                            <img
                                alt="Home"
                                src={fixture.homeLogo}
                                style={{ height: "50px", width: "50px", marginTop: "1em" }}
                            />
                            <div style={{ display: "inline-block", verticalAlign: "top", marginTop: "1.5em" }}>
                                <span className="" style={{ fontSize: "1.5em", marginLeft: "0.5em" }}> {fixture.homeScore} </span>
                                {/* <span className="" style={{ fontSize: "1.25em", marginLeft: "1.25em", marginRight: "1.25em", color: "rgb(0, 0, 0, 0.7)"}}> FT </span> */}
                                <span className="" style={{ fontSize: "1.15em", marginLeft: "1.25em", marginRight: "1.25em", color: "green" }}> 45' </span>
                                {/* <span className="" style={{ fontSize: "1.25em", marginLeft: "1.25em", marginRight: "1.25em", color: "green" }}> VS </span> */}

                                <span className="" style={{ fontSize: "1.5em", marginRight: "0.5em" }}> {fixture.awayScore} </span>

                            </div>
                            <img
                                alt="Away"
                                src={fixture.awayLogo}
                                style={{ height: "50px", width: "50px", marginTop: "1em" }}
                            />
                        </div>
                        <Progress
                            theme={{
                                success: {
                                    symbol: '   ‍',
                                    color: 'blue'
                                },
                                active: {
                                    symbol: '  ',
                                    color: 'green'
                                },

                                default: {
                                    symbol: '  ',
                                    color: 'orange'
                                }
                            }}
                            style={{ marginLeft: "1em", marginBottom:"" }}
                            percent={50} />

                    </Card>
                </Card.Group>
            </Grid.Column >
        ));
    }


    render() {
        if (this.state.redirect) {
            return <Redirect to='/fixture' />;
        }

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
                paddingLeft: '13em',
                paddingRight: '11em',
                paddingTop: '2em',
                paddingBottom: '4em',
                backgroundColor: 'rgba(40, 40, 40, 0.1)',
                display: "absolute",
                justifyContent: "space-around",
                alignItems: "center",

            }
        }

        return (
            <div style={styles.mainContainer}>
                <h3 style={{ marginBottom: "2em" }}> Matchday {this.state.matchDay} of 38 </h3>
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