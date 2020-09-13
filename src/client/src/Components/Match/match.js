import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Divider, Header, Image, Segment } from 'semantic-ui-react'
import 'react-vertical-timeline-component/style.min.css';
import Paper from '@material-ui/core/Paper';
import { Tab } from 'semantic-ui-react'
import TimeLine from './timeline';
import LineUp from './lineup';
import Stats from './stats';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import IconButton from '@material-ui/core/IconButton';



class Fixture extends React.Component {
    constructor(props) {
        super(props);
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this); // you are missing this line
        this.state = {
            fixture:
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

        }
    }

    handleNext() {
        this.props.history.push('/page2');
    }

    handleBack() {
        this.props.history.push('/');
    }


    render() {
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
            marginBottom: "1em",
            height: "4em",
        }

        const panes = [
            {
                menuItem: 'TIMELINE',
                render: () => <TimeLine> </TimeLine>,
            },
            {
                menuItem: 'LINEUP',
                render: () => <LineUp> </LineUp>
            },
            {
                menuItem: 'STATS',
                render: () => <Stats> </Stats>
            },
            {
                menuItem: 'HEAD TO HEAD',
                render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
            },
        ]

        return (

            <Paper style={{ width: "90%", marginLeft: "3em", marginTop: "3em", }}>
                <div style={{ marginBottom: "2em" }}>
                    <IconButton
                        children={<ArrowBackOutlinedIcon> </ArrowBackOutlinedIcon>}
                        color='secondary'
                        onClick={this.handleBack}
                        variant="secondary">
                    </IconButton>
                    <span> Premier Leauge </span>
                    <span style={{ marginLeft: "1em" }}> 07/26 </span>

                </div>

                <Segment basic textAlign='center'>
                    <div style={fixtureStyle}>
                        {/* <img
                            alt="Home"
                            src={this.state.fixture.homeLogo}
                            style={{ height: "80px", width: "80px", marginTop: "1em" }}
                        /> */}
                        <Segment basic >
                            <Image src={this.state.fixture.homeLogo} style={{ height: "80px", width: "80px", marginTop: "1em" }} centered />
                            <b style={{ fontSize: "1.25em", }}> CHELSEA </b>
                        </Segment>
                        <div style={{ display: "inline-block", marginTop: "1em" }}>
                            <span className="" style={{ fontSize: "3em", }}> {this.state.fixture.homeScore} </span>
                            {/* <span className="" style={{ fontSize: "1.25em", marginLeft: "1.25em", marginRight: "1.25em", color: "rgb(0, 0, 0, 0.7)"}}> FT </span> */}
                            <span className="" style={{ display: "inline-block", verticalAlign: "top", fontSize: "1.15em", marginLeft: "4em", marginRight: "4em", color: "green" }}> 45' </span>
                            {/* <span className="" style={{ fontSize: "1.25em", marginLeft: "1.25em", marginRight: "1.25em", color: "green" }}> VS </span> */}
                            <span className="" style={{ fontSize: "3em", }}> {this.state.fixture.awayScore} </span>
                        </div>
                        <Segment basic style={{ marginBottom: "1em" }}>
                            <Image src={this.state.fixture.awayLogo} style={{ height: "80px", width: "80px", }} centered />
                            <b style={{ fontSize: "1.25em", }}> NORWICH </b>
                        </Segment>
                        {/* <img
                            alt="Away"
                            src={this.state.fixture.awayLogo}
                            style={{ height: "80px", width: "80px", marginTop: "1em" }}
                        /> */}
                    </div>

                    <Divider section style={{ marginTop: "2.5em" }} />
                </Segment>

                <Tab defaultindex={2} panes={panes} />

            </Paper >
        )
    }

}

export default Fixture;
