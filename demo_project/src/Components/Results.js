import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';
import { ButtonBase } from '@material-ui/core';
import {useParams} from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow:1,
      maxHeight:"3700px !important",
      backgroundColor:"#ebedec",
      width:"100%",
      height:"100%",
      backgroundAttachment:"fixed",
      backgroundSize:"100%"
      
    },
    title: {
      flexGrow: 1,
      color:"#1d4359",
      fontSize:"16px",
      fontWeight:"bold",
      paddingTop:"20px",
      fontStyle:"bold",
      paddingLeft:"185px",
      paddingRight:"430px"
      
    },
    greydiv:{
        marginLeft:"350px",
        border:"1px solid #ebedec",
        borderRadius:"16px",
        backgroundColor:"#ebedec",
        marginRight:"350px",
        paddingLeft:"10px",
        marginTop:"30px",
        boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
    result:{
        marginLeft:"350px",
        border:"1px solid white",
        borderRadius:"16px",
        backgroundColor:"white",
        marginRight:"350px",
        paddingLeft:"10px",
        marginTop:"30px",
    },
    style1:{
      fontSize:"18px",
      color:"#567da6",
      fontWeight:"500"
    },
    downloadButton:{
        border:"1px solid white",
        backgroundColor:"orange",
        marginLeft:"150px",
        marginRight:"150px",
        marginBottom:"20px",
        color:"white",
        padding:"16px 40px",
        borderRadius:"16px"
    
    },
    preventionStyle:{
      fontSize:"24px",
      color:"black",
      fontWeight:"600"
    },
    lastStyle:{
      color:"#567da6",
      fontSize:"18px",
    },
    accordian:{
        border:"1px solid white",
        borderRadius:"16px",
        backgroundColor:"white",
        paddingLeft:"10px",
        margin:"30px",
       
    },
    healthStyle:{
      fontSize:"24px",
      color:"black",
      fontWeight:"500"
    },
    lastDiv:{
      fontSize:"18px",
      color:"#567da6",
      fontWeight:"400"
    },
    appBarStyle:{
      backgroundColor:"white", 
      height:"75px"
    },
    position1:{
      position:"relative",
      marginTop:"70px",
    },
    spanStyle:{
      color:"#567da6",
      fontSize:"18px"
    },
    testingStyle:{
      fontSize:"24px",
      color:"black",
      fontWeight:"600"
    },
    image:{
      position:"absolute",
      borderRadius:"50%",
      marginLeft:"530px",
      marginTop:"-40px",
    },
    guage:{
      position:"absolute",
      marginLeft:"380px",
      marginBottom:"10px",
     
    },
    govtStyle:{
      color:"grey",
      fontSize:"14px"
    }
}));




const Accordion = withStyles({
  root: {
    border:'none',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
   fontSize:"18px",
   marginLeft:"150px",
   marginRight:"250px",
    color:"orange",
    border:"none",
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);


//this is the function that shows the entire results page based on the user selected options. It will render low,
//medium or high illness results page based on user entered values
function Results(){
    const classes = useStyles();
    const name=useParams();

    return(
        <div className={classes.root}>
         <div>
          <AppBar position="static" className={classes.appBarStyle}>
          <Toolbar>
            <img src={process.env.PUBLIC_URL + "/apollo_log.png"} width="60" height="60" style={{paddingLeft:"370px"}}  alt="apollo log" />
            <Typography variant="h6" className={classes.title}>
            COVID RISK RESULT
            </Typography>
         </Toolbar>
         </AppBar>
        </div>
        <div className={classes.body}>
           {name.report === "low" ?
           <div>
            <div className={classes.result}>
            <p style={{fontSize:"24px",color:"green",position:"relative"}}>LOW
            <img src={process.env.PUBLIC_URL + "/lowguage.jpg"} width="150" height="80" alt="women log" className={classes.guage}/></p>
            <p className={classes.style1}>Respiratory illness</p>
            </div>

            <div className={classes.result}>
            <p style={{fontSize:"18px"}}>We suggest you take a <span style={{color:"orange"}}>COUGH SCAN</span></p>
            </div>

            <div className={classes.result}>
            <p style={{fontSize:"18px"}}>Based on your inputs, Apollo 247 advises the following:</p>
            <p className={classes.style1}>
             1. Self Care<br/>
           2. Prevention and precautions <span style={{color:"orange"}}> SEE BELOW </span><br/>
           3. Laboratory tests and imaging are optional <span style={{color:"black",fontStyle:"normal"}}>(and as per your physician’s advise)</span><br/>
           4. COVID 19 testing may be required at your physician’s advise<br/>
           5. Monitor your symptoms and get medical attention if your situation worsens<br/>
            </p>
            </div>
           </div>
           :
           <div>
           {name.report==="Moderate" ?
           <div>
             <div className={classes.result}>
            <p style={{fontSize:"24px",color:"#86db37"}}>Medium
            <img src={process.env.PUBLIC_URL + "/mediumguage.jpg"} width="150" height="80" alt="women log" className={classes.guage}/></p>
            <p className={classes.style1}>Respiratory illness</p>
            </div>

            <div className={classes.result}>
            <p style={{fontSize:"18px"}}>We recommend you take a <span style={{color:"orange"}}>COUGH SCAN</span></p>
            </div>

            <div className={classes.result}>
            <p style={{fontSize:"18px"}}>Based on your inputs, Apollo 247 advises the following:</p>
            <p className={classes.style1}>
             1. You can <span style={{color:"orange"}}> CONSULT ONLINE </span> here to speak to a physician immediately<br/>
             2.<span style={{color:"orange"}}> Virtual Consult </span><br/>
           3. Prevention and precautions <span style={{color:"orange"}}> SEE BELOW </span><br/>
           4. Laboratory tests and imaging may be needed as per your physician's advise<br/>
           5. COVID 19 testing may be required at your physician’s advise<br/>
           6. Monitor your symptoms and get medical attention if your situation worsens<br/>
            </p>
            </div>


             </div>
             :
             <div>

            <div className={classes.result}>
            <p style={{fontSize:"24px",color:"Red",fontWeight:"500"}}>HIGH
            <img src={process.env.PUBLIC_URL + "/highguage.jpg"} width="150" height="80" alt="women log" className={classes.guage}/></p>
            <p className={classes.style1}>Respiratory illness</p>
            </div>

            <div className={classes.result}>
            <p style={{fontSize:"18px"}}>We recommend you take a <span style={{color:"orange"}}>COUGH SCAN</span></p>
            </div>

            <div className={classes.result}>
            <p style={{fontSize:"18px"}}>Based on your inputs, Apollo 247 advises the following:</p>
            <p className={classes.style1}>
             1. Urgent Consult - Please contact your nearest Apollo Hospital for further evaluation<br/>
             2.Please visit a physician as there may be a requirement for further care<br/>
           3. Prevention and precautions <span style={{color:"orange"}}> SEE BELOW </span><br/>
           4. Laboratory tests and imaging may be needed as per your physician's advise<br/>
           5. COVID 19 testing may be required at your physician’s advise<br/>
           6. Monitor your symptoms and isolate yourself<br/>
           7.You can <span style={{color:"orange"}}> CONSULT ONLINE </span> here to speak to a physician immediately
            </p>
            </div>
               </div>
             }
               </div>
          }
            <div className={classes.position1}>
            <div className={classes.result}>
            <img src={process.env.PUBLIC_URL + "/women_img1.png"} width="75" height="75" alt="women log" className={classes.image}/>
            <p className={classes.healthStyle}>Your health matters to us <br/>
            <span className={classes.spanStyle}>If you have more questions, call the Corona Helpline number on the Apollo 247 App. Buy Corona care products on the Apollo 247 App</span></p>
            <p><ButtonBase className={classes.downloadButton}>DOWNLOAD APOLLO247 APP</ButtonBase></p>
            </div>
            </div>

            <div className={classes.greydiv}>
            <p className={classes.testingStyle}>COVID19 Testing Guidelines<br/>
            <span className={classes.govtStyle}>By The Government of India</span></p>
            <p>Individuals falling under any of these categories are advised to get themselves tested for COVID19:</p>
       
                 <div className={classes.accordian}>
                 <div className={classes.lastStyle}>
               <p className={classes.lastStyle}> 1. All symptomatic individuals who have undertaken international travel in the last 14 days</p>
                <p className={classes.lastStyle}>2. All symptomatic contacts of laboratory confirmed cases</p>
               <p className={classes.lastStyle}> 3. All symptomatic health care workers</p>
               <p className={classes.lastStyle}> 4. All patients with Severe Acute Respiratory Illness (fever AND cough and/or shortness of breath)</p>
               <p className={classes.lastStyle}> 5. Asymptomatic direct and high-risk contacts of a confirmed case should be tested once between day 5 and day 14 of coming in his/her contact</p>
               <div>
               <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>View more</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <p>In hotspots/cluster (as per MoHFW) and in large migration gatherings/ evacuees centres,
         <br/>
         <p className={classes.lastStyle}>6.All symptomatic ILI (fever, cough, sore throat, runny nose)<br/>a. Within 7 days of illness – rRT-PCR
        <br/>b. After 7 days of illness – Antibody test (If negative, confirmed by rRT-PCR)</p> </p>
        </AccordionDetails>
      </Accordion>

                 </div>
               </div>
                </div>
            </div>

            <div  className={classes.greydiv} style={{marginBottom:"100px"}}>
            <p className={classes.preventionStyle}>Preventions and Precautions<br/>
            <span className={classes.govtStyle}>Basic Protective Measures</span></p>
            <p>Be aware or Educate yourself with the latest updates on the following websites : <span style={{textDecoration:"underline"}}>WHO & MoHFW </span></p>

            <p>Most people who become infected experience mild illness and recover, but it can be more severe for others.</p>

            <p>Take care of your health and protect others by doing the following:</p>
            
       
                 <div className={classes.accordian}>
                 <div className={classes.lastDiv}>
                 <h4  className={classes.lastStyle}>Wash your hands frequently</h4>
                 <p  className={classes.lastStyle}>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.</p>

                <h4 className={classes.lastStyle}>Maintain social distancing</h4>
                <p className={classes.lastStyle}>Maintain at least 2 metre (6 feet) distance between yourself and anyone who is coughing or sneezing.</p>

                <h4 className={classes.lastStyle}>Avoid touching eyes, nose and mouth</h4>
                <p className={classes.lastStyle}>Our hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth.</p>

              <Accordion>
        <AccordionSummary
          expandIcon={< ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >View more</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
        <p>
        <h4 className={classes.lastStyle}>Practice respiratory hygiene</h4>
        <p className={classes.lastStyle}>Make sure you and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.</p>
        </p>
        

        <p>
        <h4 className={classes.lastStyle}>If you have fever, cough and difficulty in breathing, seek medical care early</h4>
        <p className={classes.lastStyle}>Stay home if you feel unwell. If you have a high fever, moderate to severe cough and difficulty in breathing and it is worsening in short period of time, seek medical asistance and call in advance.</p>
        </p>

        <p>
        <h4 className={classes.lastStyle}>Use a mask/face-cloth</h4>
        <p className={classes.lastStyle}>Masks or cloth face coverings should be worn in public places and when going out of home where other social distancing measures are difficult to maintain. It should fit properly and comfortably against the side of the face, be secured with ties or ear loops and allow for breathing without restriction. Use of Masks or Cloth face coverings should not be placed on young children, those who have trouble breathing or otherwise unable to remove the mask without assistance.</p>
        </p>
          </p>

        
        </AccordionDetails>
      </Accordion>


               </div>
    
                </div>
            </div>

        </div>
        <div>
          <div style={{visibility:"hidden"}}>
                <p>COVID RISK ASSESMENT AND SURVEY </p>
                <p>Developed using React and Material UI</p>
                <p>---------------</p>
                <p>-------------</p>
              </div>
          </div>
      </div>
       
    )



}
export default Results;