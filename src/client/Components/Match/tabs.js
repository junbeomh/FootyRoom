import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TimeLine from './timeline';
import LineUp from './lineup';
import Stats from './stats';
import HeadToHead from './head2head';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function MatchTabs(props) {
    const classes = useStyles();
    const { fixture } = props;
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="secondary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="LINE UP" {...a11yProps(0)} />
                    <Tab label="STATISTICS" {...a11yProps(1)} />
                    <Tab label="TIME LINE" {...a11yProps(2)} />
                    <Tab label="HEAD TO HEAD" {...a11yProps(3)} />

                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <LineUp home={fixture.lineups == null ? null : fixture.lineups[fixture.homeTeam.team_name]}
                        homeLogo={fixture.homeTeam.logo}
                        away={fixture.lineups == null ? null : fixture.lineups[fixture.awayTeam.team_name]}
                        awayLogo={fixture.awayTeam.logo}
                    ></LineUp>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Stats stats={fixture.statistics} home={fixture.homeTeam} away={fixture.awayTeam}> </Stats>

                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <TimeLine events={fixture.events == null ? null : fixture.events}
                        homeLogo={fixture.homeTeam.logo}
                        homeName={fixture.homeTeam.team_name}
                        homeLineUp={fixture.lineups == null ? null : fixture.lineups[fixture.homeTeam.team_name]}
                        awayLogo={fixture.awayTeam.logo}
                        awayName={fixture.awayTeam.team_name}
                        awayLineUp={fixture.lineups == null ? null : fixture.lineups[fixture.awayTeam.team_name]}>
                    </TimeLine>
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <HeadToHead homeId={fixture.homeTeam.team_id} awayId={fixture.awayTeam.team_id}> </HeadToHead>

                </TabPanel>
            </SwipeableViews>
        </div>
    );
}


export default MatchTabs;


