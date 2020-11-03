import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/core/Icon';
import ItenaryTables from './itenaryTable/itenaryTable';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function CourseItenary(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // console.log(props.courseItenaryData, "+++++++++++++++++++++++++++++++++++++++++++here++++++++++++++");
  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>{props.courseItenaryData.accordian1.head}</Typography>
          <Typography className={classes.secondaryHeading}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul style={{ paddingLeft: "7px" }}>
            {/* {props.courseItenaryData.accordian1.map((data) => {
              return (
                  <li>
                    {data}
                  </li>
              );
            })} */}
              <ol>
                {props.courseItenaryData.accordian1.p1}
              </ol>
              <ol>
                {props.courseItenaryData.accordian1.p2}
              </ol>
              <ol>
                {props.courseItenaryData.accordian1.p3}                
              </ol>
              
              </ul>
            {/* use the below component to add the iTenary Table */}
          {/* <ItenaryTables></ItenaryTables> */}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>{props.courseItenaryData.accordian2.head}</Typography>
          <Typography className={classes.secondaryHeading}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul style={{paddingLeft:"7px"}}>
            <ol>
                {props.courseItenaryData.accordian2.p1}
              </ol>
              <ol>
                {props.courseItenaryData.accordian2.p2}
              </ol>
              <ol>
                {props.courseItenaryData.accordian2.p3}                
              </ol>
            </ul>
            {/* Comming Soon told so! */}
            {/* <ItenaryTables></ItenaryTables> */}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>{props.courseItenaryData.accordian3.head}</Typography>
          <Typography className={classes.secondaryHeading}>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul style={{paddingLeft:"7px"}}>
            <ol>
                {props.courseItenaryData.accordian3.p1}
              </ol>
              <ol>
                {props.courseItenaryData.accordian3.p2}
              </ol>
              <ol>
                {props.courseItenaryData.accordian3.p3}                
              </ol>
            </ul>
          {/* <ItenaryTables></ItenaryTables> */}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>{props.courseItenaryData.accordian4.head}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul style={{paddingLeft:"7px"}}>
            <ol>
                {props.courseItenaryData.accordian4.p1}
              </ol>
              <ol>
                {props.courseItenaryData.accordian4.p2}
              </ol>
              <ol>
                {props.courseItenaryData.accordian4.p3}                
              </ol>
            </ul>
          {/* <ItenaryTables></ItenaryTables> */}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>{props.courseItenaryData.accordian5.head}</Typography>
          <Typography className={classes.secondaryHeading}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul style={{paddingLeft:"7px"}}>
            <ol>
                {props.courseItenaryData.accordian5.p1}
              </ol>
              <ol>
                {props.courseItenaryData.accordian5.p2}
              </ol>
              <ol>
                {props.courseItenaryData.accordian5.p3}                
              </ol>
            </ul>
          {/* <ItenaryTables></ItenaryTables> */}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography className={classes.heading}>{props.courseItenaryData.accordian6.head}</Typography>
          <Typography className={classes.secondaryHeading}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul style={{paddingLeft:"7px"}}>
            <ol>
                {props.courseItenaryData.accordian6.p1}
              </ol>
              <ol>
                {props.courseItenaryData.accordian6.p2}
              </ol>
              <ol>
                {props.courseItenaryData.accordian6.p3}                
              </ol>
            </ul>
          {/* <ItenaryTables></ItenaryTables> */}
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography className={classes.heading}>General settings</Typography>
          <Typography className={classes.secondaryHeading}>I am an accordion</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ItenaryTables></ItenaryTables>
          </Typography>
        </AccordionDetails>
      </Accordion> */}
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography className={classes.heading}>{props.courseItenaryData.accordian7.head}</Typography>
          <Typography className={classes.secondaryHeading}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul style={{paddingLeft:"7px"}}>
            <ol>
                {props.courseItenaryData.accordian7.p1}
              </ol>
              <ol>
                {props.courseItenaryData.accordian7.p2}
              </ol>
              <ol>
                {props.courseItenaryData.accordian7.p3}                
              </ol>
            </ul>
          {/* <ItenaryTables></ItenaryTables> */}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}