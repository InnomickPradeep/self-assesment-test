import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { ButtonBase } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import {useParams} from 'react-router';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow:1,
      maxHeight:"auto",
      backgroundColor:"#ebedec"
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
        marginLeft:"400px",
        border:"1px solid #ebedec",
        borderRadius:"16px",
        backgroundColor:"#ebedec",
        marginRight:"400px",
        paddingLeft:"10px",
        marginTop:"30px",
        boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
    result:{
        marginLeft:"400px",
        border:"1px solid white",
        borderRadius:"16px",
        backgroundColor:"white",
        marginRight:"400px",
        paddingLeft:"10px",
        marginTop:"30px",
    },
    downloadButton:{
        border:"1px solid white",
        backgroundColor:"orange",
        marginLeft:"200px",
        marginRight:"200px",
        marginBottom:"20px",
        color:"white",
        padding:"16px 40px",
        borderRadius:"16px"
    
    },
    accordian:{
        border:"1px solid white",
        borderRadius:"16px",
        backgroundColor:"white",
        paddingLeft:"10px",
        margin:"30px",
       
    }
}));



function Results(){
    const classes = useStyles();
    const name=useParams();
    console.log(name.report);
    return(
        <div className={classes.root}>
         <div>
          <AppBar position="static" style={{backgroundColor:"white", height:"75px"}}>
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
            <p style={{fontSize:"24px",color:"green"}}>LOW</p>
            <p style={{fontSize:"18px",color:"#567da6",fontWeight:"500"}}>Respiratory illness</p>
            </div>

            <div className={classes.result}>
            <p style={{fontSize:"18px"}}>We suggest you take a <span style={{color:"orange"}}>COUGH SCAN</span></p>
            </div>

            <div className={classes.result}>
            <p style={{fontSize:"18px"}}>Based on your inputs, Apollo 247 advises the following:</p>
            <p style={{fontSize:"18px",color:"#567da6",fontWeight:"500"}}>
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
            <p style={{fontSize:"24px",color:"Orange"}}>Medium</p>
            <p style={{fontSize:"18px",color:"#567da6",fontWeight:"500"}}>Respiratory illness</p>
            </div>

            <div className={classes.result}>
            <p style={{fontSize:"18px"}}>We recommend you take a <span style={{color:"orange"}}>COUGH SCAN</span></p>
            </div>

            <div className={classes.result}>
            <p style={{fontSize:"18px"}}>Based on your inputs, Apollo 247 advises the following:</p>
            <p style={{fontSize:"18px",color:"#567da6",fontWeight:"500"}}>
             1. You can <span style={{color:"orange"}}> CONSULT ONLINE </span> here to speak to a physician immediately<br/>
             2.<span style={{color:"orange"}}> Virtual Consult </span><br/>
           3. Prevention and precautions <span style={{color:"orange"}}> SEE BELOW </span><br/>
           4. Laboratory tests and imaging may be needed as per your physician's advise<br/>
           4. COVID 19 testing may be required at your physician’s advise<br/>
           5. Monitor your symptoms and get medical attention if your situation worsens<br/>
            </p>
            </div>


             </div>
             :
             <div>

            <div className={classes.result}>
            <p style={{fontSize:"24px",color:"Red"}}>HIGH</p>
            <p style={{fontSize:"18px",color:"#567da6",fontWeight:"500"}}>Respiratory illness</p>
            </div>

            <div className={classes.result}>
            <p style={{fontSize:"18px"}}>We recommend you take a <span style={{color:"orange"}}>COUGH SCAN</span></p>
            </div>

            <div className={classes.result}>
            <p style={{fontSize:"18px"}}>Based on your inputs, Apollo 247 advises the following:</p>
            <p style={{fontSize:"18px",color:"#567da6",fontWeight:"500"}}>
             1. Urgent Consult - Please contact your nearest Apollo Hospital for further evaluation<br/>
             2.Please visit a physician as there may be a requirement for further care
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

            <div className={classes.result}>
            <p style={{fontSize:"22px",color:"black",fontWeight:"500"}}>Your health matters to us <br/>
            <span style={{color:"#567da6",fontSize:"18px"}}>If you have more questions, call the Corona Helpline number on the Apollo 247 App. Buy Corona care products on the Apollo 247 App</span></p>
            <p><ButtonBase className={classes.downloadButton}>DOWNLOAD APOLLO247 APP</ButtonBase></p>
            </div>

            <div className={classes.greydiv}>
            <p style={{fontSize:"24px",color:"black",fontWeight:"600"}}>COVID19 Testing Guidelines<br/>
            <span style={{color:"grey",fontSize:"14px"}}>By The Government of India</span></p>
            <p>Individuals falling under any of these categories are advised to get themselves tested for COVID19:</p>
       
                 <div className={classes.accordian}>
                 <div style={{fontSize:"18px",color:"#567da6",fontWeight:"500"}}>
               <p> 1. All symptomatic individuals who have undertaken international travel in the last 14 days</p>
                <p>2. All symptomatic contacts of laboratory confirmed cases</p>
               <p> 3. All symptomatic health care workers</p>
               <p> 4. All patients with Severe Acute Respiratory Illness (fever AND cough and/or shortness of breath)</p>
               <p> 5. Asymptomatic direct and high-risk contacts of a confirmed case should be tested once between day 5 and day 14 of coming in his/her contact</p>
               </div>
                </div>
            </div>

            <div  className={classes.greydiv} style={{marginBottom:"100px"}}>
            <p style={{fontSize:"24px",color:"black",fontWeight:"600"}}>Preventions and Precautions<br/>
            <span style={{color:"grey",fontSize:"14px"}}>Basic Protective Measures</span></p>
            <p>Be aware or Educate yourself with the latest updates on the following websites : WHO & MoHFW </p>

            <p>Most people who become infected experience mild illness and recover, but it can be more severe for others.</p>

            <p>Take care of your health and protect others by doing the following:</p>
            
       
                 <div className={classes.accordian}>
                 <div style={{fontSize:"18px",color:"#567da6",fontWeight:"400"}}>
                 <h4  style={{color:"#567da6"}}>Wash your hands frequently</h4>
                 <p  style={{color:"#567da6"}}>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.</p>

                <h4 style={{color:"#567da6"}}>Maintain social distancing</h4>
                <p style={{color:"#567da6"}}>Maintain at least 2 metre (6 feet) distance between yourself and anyone who is coughing or sneezing.</p>

                <h4 style={{color:"#567da6"}}>Avoid touching eyes, nose and mouth</h4>
                <p style={{color:"#567da6"}}>Our hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth.</p>
               </div>
                </div>
            </div>

        </div>
      </div>
    )



}
export default Results;