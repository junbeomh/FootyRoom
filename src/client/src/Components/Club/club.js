import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import {
    getLeagueStandings,
    getTeamsStandingData
} from "../../../api"
import "../../styles/index.css"

export class Club extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        <p> Club Screen </p>
    }

}

export default Club;
