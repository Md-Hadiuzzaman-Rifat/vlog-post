import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { BsArrowDown } from "react-icons/bs";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  return (
    <div>
      <Accordion style={{backgroundColor:"#1f1f1f", borderBottom:"1px solid gray", color:"white"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
          <div style={{marginRight:"5rem"}}><BsArrowDown/></div><Typography style={{fontSize:"1rem"}}>Website & Mobile App Design</Typography>  
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:"0.75rem", fontWeight:"bold"}}>
          Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{backgroundColor:"#1f1f1f", borderBottom:"1px solid gray", color:"white"}}  expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" >
          <div style={{marginRight:"5rem"}}><BsArrowDown/></div><Typography style={{fontSize:"1rem"}}>Motion Graphics & Animation</Typography> 
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:"0.75rem", fontWeight:"bold"}}>
          Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  style={{backgroundColor:"#1f1f1f", borderBottom:"1px solid gray", color:"white"}}  expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" >
          <div style={{marginRight:"5rem"}}><BsArrowDown/></div><Typography style={{fontSize:"1rem"}}>User Experience</Typography> 
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:"0.75rem", fontWeight:"bold"}}>
          Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}