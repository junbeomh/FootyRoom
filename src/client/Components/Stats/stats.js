import React, {useEffect} from 'react';
import NavBar from '../Nav/nav.js';
import Spinner from 'react-bootstrap/Spinner';
import countries from 'i18n-iso-countries';
import Flag from 'react-world-flags'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
    getTopScorersAPI,
} from "../../../api"
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

// Row.propTypes = {
//     row: PropTypes.shape({
//         calories: PropTypes.number.isRequired,
//         carbs: PropTypes.number.isRequired,
//         fat: PropTypes.number.isRequired,
//         history: PropTypes.arrayOf(
//             PropTypes.shape({
//                 amount: PropTypes.number.isRequired,
//                 customerId: PropTypes.string.isRequired,
//                 date: PropTypes.string.isRequired,
//             }),
//         ).isRequired,
//         name: PropTypes.string.isRequired,
//         price: PropTypes.number.isRequired,
//         protein: PropTypes.number.isRequired,
//     }).isRequired,
// };

function createData(name, calories, fat, carbs, protein, price) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            { date: '2020-01-05', customerId: '11091700', amount: 3 },
            { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
        ],
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
    countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
    // console.log(
    //     "South Korea => " +
    //     countries.getAlpha2Code("South Korea", "en")
    // );
    return (
        <React.Fragment>
            <TableRow align="center" className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {props.index + 1}
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.firstName + " " + row.lastName}
                </TableCell>
                <TableCell align="center">{row.position}</TableCell>
                <TableCell align="center">{row.teamName.includes("Manchester") ? row.teamName.replace("Manchester", "Man") :
                    row.teamName}</TableCell>
                <TableCell align="center"><Flag fallback={<span>{row.nationality}</span>} code={countries.getAlpha3Code(row.nationality == "England" ? "United Kingdom" : row.nationality == "Korea Republic" ? "South Korea" : row.nationality, "en")} /></TableCell>
                {/* <TableCell align="center">{row.stat.assist}</TableCell> */}
                <TableCell align="center"> <b> {row.stat.goal} </b></TableCell>

            </TableRow>

            {/* {expandable contents} */}
            <TableRow align="center" style={{ backgroundColor: "rgba(215,33, 116, 0.05)" }}>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={4}>
                            <Typography variant="h6" gutterBottom component="div">
                                <h6> Details </h6>
                            </Typography>
                            <Table align="center" size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Games played</TableCell>
                                        <TableCell>Mins Played</TableCell>
                                        <TableCell>Total Shots</TableCell>
                                        <TableCell>Goals per 90</TableCell>
                                        <TableCell>Mins per Goal</TableCell>
                                        <TableCell>Goal conversion</TableCell>
                                        <TableCell>Shot Accuracy</TableCell>
                                        <TableCell>Assists</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {1}
                                        </TableCell>
                                        <TableCell>{2}</TableCell>
                                        <TableCell>{3}</TableCell>
                                        <TableCell> {4} </TableCell>
                                        <TableCell>{5}</TableCell>
                                        <TableCell>{6}</TableCell>
                                        <TableCell>{7}</TableCell>
                                        <TableCell>{8}</TableCell>

                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
            {/* {expandable contents} */}

        </React.Fragment>
    );
}

export default function CollapsibleTable() {
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    console.log("isLoading " + isLoading);
    useEffect(() => {
        getTopScorersAPI().then((response) => setData(response)).then(setIsLoading(false));
    }, []);
    console.log("isLoading " + isLoading);
    console.log(data)
    console.log("rendering...")
    if (isLoading)
        return <Spinner
            as="span"
            animation="border"
            size="xlg"
            role="status"
            aria-hidden="true"
        />
    else
        return (
            <div style={{ display: "internal" }}>
            <NavBar> </NavBar>
                {/* <div>
                <SportsSoccerTwoToneIcon> </SportsSoccerTwoToneIcon>
                <span> Most Goals </span>  </div> */}

                <TableContainer component={Paper}
                    style={{
                        padding: "2em",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        marginTop: "1em",
                        paddingLeft: '5em',
                        paddingRight: '5em'

                    }}>
                    <Table aria-label="collapsible table" >
                        <TableHead>
                            <TableRow>
                                <TableCell>  Rank </TableCell>
                                <TableCell> Player</TableCell>
                                <TableCell align="center"> Position</TableCell>
                                <TableCell align="center"> Club </TableCell>
                                <TableCell align="center"> Nationality </TableCell>
                                <TableCell align="center"> Goals</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row, index) => (
                                <Row key={row.name} row={row} index={index} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
}