import React from 'react';
import Paper from '@material-ui/core/Paper';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

export class TimeLine extends React.Component {


    render() {
        return (
            <Paper>
                {/* <VerticalTimeline>
                    <VerticalTimelineElement
                        position='left'
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', height: "4em" }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        style={{ width: '20em' }}
                        icon={<SportsSoccerIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">11'</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        position={'right'}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', height: "4em" }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: 'yellow' }}
                        style={{ width: '20em' }}
                        icon={<CheckBoxOutlineBlankIcon style={{ color: "yellow" }} />}
                    >
                        <h3 className="vertical-timeline-element-title">53' </h3>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', height: "4em" }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        style={{ width: '20em' }}
                        icon={<SportsSoccerIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">53' </h3>
                    </VerticalTimelineElement>
                </VerticalTimeline> */}
            </Paper>
        );
    }
}

export default TimeLine;