import React from 'react';
import SoccerLineUp from 'react-soccer-lineup';


class LineUp extends React.Component {

    buildHomeTeam = () => {
        return {
            color: 'lightcoral',
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

    buildAwayTeam = () => {
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
                }, {
                    number: 3
                }],
                cam: [{
                    number: 7
                }, {
                    number: 8
                }, {
                    number: 6
                }, {
                    number: 10
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
        return (
            <SoccerLineUp
                size={"responsive"}
                color={"#588f58"}
                pattern={"lines"}
                homeTeam={this.buildHomeTeam()}
                awayTeam={this.buildAwayTeam()} />
        );
    }
}

export default LineUp