import React , {useState,Fragment} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import theme from '../theme';
import Fab from '@material-ui/core/Fab';
import RefreshIcon from '@material-ui/icons/Refresh';
import { Paper } from '@material-ui/core';
import { FilterNone } from '@material-ui/icons';
import {TextField, InputBase} from '@material-ui/core';
import {ButtonBase} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1,
    height:"1500px",
    backgroundColor:"#ebedec"
  },
  title: {
    flexGrow: 1,
    color:"#1d4359",
    fontSize:"14px",
    fontWeight:"bold",
    paddingTop:"20px",
    fontStyle:"bold",
    paddingLeft:"0px",
    paddingRight:"430px"
  },
  bodyStyle:{
   marginLeft:"-100px !important",
  },
  inputStyle:{
      marginTop:"10px",
      borderRadius:"12px",
      fontWeight:"normal",
      textTransform:"none",
      cursor:"none",
      marginBottom:"20px",
      maxWidth:"460px",
      marginLeft:"-50px !important",
      textAlign:"left"
  },
  divButton:{
    display:"none",
  },
  gender:{
      marginLeft:"-270px",
  },
  AgeButton:{
     marginTop:"10px",
        borderRadius:"12px",
      fontWeight:"normal",
      textTransform:"none",
      cursor:"none",
      marginBottom:"20px",
      maxWidth:"460px",
      marginLeft:"-360px !important",
      textAlign:"left"
  },
  AgeInput:{
    borderBottom:"1px solid #30b085",
    width:"450px",
    marginLeft:"600px !important",
    paddingBottom:"5px",
  },
  ageDiv:{
    border:"1px solid grey",
    borderRadius:"12px",
    backgroundColor:"white",
    width:"100px",
  },
  buttonStyle:{
    marginRight:"5px",
    color:"#30b085",
    backgroundColor:"white",
    borderRadius:"8px",
    fontSize:"14px",
    padding:"10px 20px",
    fontWeight:"normal",
    fontStyle:"normal",
    textTransform:"none",
  },

  
}));



function CovidInput() {
  const classes = useStyles();

  const [isClicked,setClick]=useState(false);
  const [language, setlanguage]=useState("");
  const [age,setAge]=useState(0);
  const [isDone,setDone]=useState(false);
  const [genderClick,setGenderClick]=useState(false);
  const [getGender,setgender]=useState("");
  const [isTempClick,setTempClick]=useState(false);
  const [getTemp,setTemp]=useState("");
  const [haveSymptoms,SymptomsClick]=useState(false);
  const [getSymptom,setSymptom]=useState("");
  const [haveMoreSymptoms,moreSymptomsClick]=useState(false);
  const [getMoreSymptom,setMoreSymptom]=useState("");
  const [doSmoke,SmokeClick]=useState(false);
  const [getSmokeInfo,setSmokeInfo]=useState("");
  const [travelOptionClick,setTravelOption]=useState(false);
  const [getTravelDetails, setTravelDetails]=useState("");
  const [DiseaseOptionClick,setDiseaseOption]=useState(false);
  const [getDiseaseDetails,setDiseaseDetails]=useState("");
  const temp={
     value:"High Fever(>102°F)"
  }
  const handleTravel=(event)=>{
    setTravelOption(true);
    setTravelDetails(event.target.value);
  }
  const handleDisease=(event)=>{
    setDiseaseOption(true);
    setDiseaseDetails(event.target.value);
  }
  
  const handleSmoke=(event)=>{
    SmokeClick(true);
    setSmokeInfo(event.target.value);
  }
  
  const handleSymptoms=(event)=>{
    SymptomsClick(true);
    setSymptom(event.target.value);
  }
  const handleMoreSymptoms=(event)=>{
    moreSymptomsClick(true);
    setMoreSymptom(event.target.value);
  }
  const handleTemp=(event)=>{
    setTempClick(true);
    setTemp(event.target.value);
  }
  function setStates(event){
    setlanguage(event);
    setClick(true);
  }
  const handleChange=(event)=>{
    
    setAge(event.target.value);
  }
  const handleGender=(event)=>{
    setGenderClick(true);
    setgender(event.target.value)
  }
  console.log(language);
  
  return (
    <div className={classes.root}>
      <div>
      <AppBar position="static" style={{backgroundColor:"white", height:"75px"}}>
        <Toolbar>
            <img src={process.env.PUBLIC_URL + "/apollo_log.png"} width="60" height="60" style={{paddingLeft:"350px"}}  alt="apollo log" />
          <Typography variant="h6" className={classes.title}>
            CORONAVIRUS RISK SCAN
          </Typography>
        </Toolbar>
      </AppBar>
      </div>
      <div className={classes.bodyStyle}>
    
      <Button
      
      variant="contained" className={classes.inputStyle} color="primary">Hello, Please tell us which language you'd like to take this test in:</Button>
      { isClicked===false ? 
      <div>
      <ButtonBase variant="contained" value="English" className={classes.buttonStyle} onClick={(event)=>setStates(event.target.value)}>English</ButtonBase>
      <ButtonBase variant="contained" value="తెలుగు" className={classes.buttonStyle} onClick={(event)=>setStates(event)}>తెలుగు</ButtonBase>
      <ButtonBase variant="contained" value="हिंदी" className={classes.buttonStyle} onClick={(event)=>setStates(event)}>हिंदी</ButtonBase>
      <ButtonBase variant="contained"  value="தமிழ்" className={classes.buttonStyle} onClick={(event)=>setStates(event)}>தமிழ்</ButtonBase>
      <ButtonBase variant="contained" value="বাংলা" className={classes.buttonStyle} onClick={(event)=>setStates(event)}>বাংলা</ButtonBase>
      </div>
      : <div>
      <div>  
      <Button variant="contained" className={classes.buttonStyle} style={{color:"darkblue",fontSize:"14px",marginLeft:"630px"}} value={language}>{language}</Button>
        </div>
        <div>
        <Button variant="contained" className={classes.inputStyle} color="primary">
        Hi! Our coronavirus disease self assessment scan has been developed on the basis of guidelines from the WHO and MHFW, Government of India. This interaction should not be taken as expert medical advice. 
        Any information you share with us will be kept strictly confidential.
          </Button>
         </div>
         <div>
          <Button variant="contained" className={classes.AgeButton} color="primary">
          How old are you?
            </Button>
          </div> 
    

        
           {isDone === false ?
           <Fragment>
            <div className={classes.ageDiv}>
            <form>
    
              <InputBase
            id="standard-number"
            className={classes.AgeInput}
            type="number"
            required
            placeholder="Your age in years"
            onChange={handleChange}
            InputLabelProps={{
            shrink: true,
          }}
         />
            </form>
    
            </div>
            <Button variant="default" onClick={()=>setDone(true)} style={{backgroundColor:"orange",color:"white",borderRadius:"8px",marginTop:"5px",marginLeft:"630px",textTransform:"none",fontStyle:"normal"}}>Done</Button>
            </Fragment>

            : 
            <div>
              <div>
        <Button variant="contained" className={classes.buttonStyle} style={{color:"darkblue",fontSize:"14px",marginLeft:"630px"}} value={age}>{age}</Button>
        </div>
        <div className={classes.gender}>
        <div >
        <Button variant="contained" className={classes.inputStyle} color="primary">Please select your gender</Button>
        </div>
        </div>
        {genderClick===false ?
        <div>
        <div>
        <ButtonBase variant="contained" className={classes.buttonStyle} value="Male" onClick={handleGender}>Male</ButtonBase>
        <ButtonBase variant="contained" className={classes.buttonStyle} value="Female" onClick={handleGender}>Female</ButtonBase>
        <ButtonBase variant="contained" className={classes.buttonStyle} value="Others" onClick={handleGender}>Others</ButtonBase>
          </div>
          </div>
        :
           <div>
             <Button variant="contained" className={classes.buttonStyle} style={{color:"darkblue",fontSize:"14px",marginLeft:"630px"}} value={getGender}>{getGender}</Button>
            <div>
            <Button variant="contained" className={classes.inputStyle} color="primary">Please let us know your current body temperature in degree Fahrenheit (Normal body temperature is 98.6°F):</Button>
            </div>
            {isTempClick===false ?
            <div>
            <ButtonBase variant="contained" className={classes.buttonStyle} value="Normal(96°F-98.6°F)" onClick={handleTemp}>Normal(96°F-98.6°F)</ButtonBase>
        <ButtonBase variant="contained" className={classes.buttonStyle} value="Fever(98.6°F-120°F)" onClick={handleTemp}>Fever(98.6°F-120°F))</ButtonBase>
        <ButtonBase variant="contained" className={classes.buttonStyle} value={temp.value} onClick={handleTemp}>{temp.value}</ButtonBase>
        <ButtonBase variant="contained" className={classes.buttonStyle} value="Don't know" onClick={handleTemp}>Don't know</ButtonBase>
            </div>
          :
          <div>
            <Button variant="contained" className={classes.buttonStyle} style={{color:"darkblue",fontSize:"14px",marginLeft:"630px"}} value={getTemp}>{getTemp}</Button>
            <div>
            <Button variant="contained" className={classes.inputStyle} color="primary">Are you experiencing any of the symptoms below (mark all those applicable)</Button>
           
            </div>
            {haveSymptoms===false ?
            <div style={{marginLeft:"-300px !important"}}>
            <ButtonBase variant="contained" className={classes.buttonStyle}  value="Dry Cough" onClick={handleSymptoms}>Dry Cough</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value="Loss or Diminished Sense of Smell" onClick={handleSymptoms}>Loss or Diminished Sense of Smell</ButtonBase>
          <ButtonBase variant="contained" className={classes.buttonStyle} value="Sore Throat" onClick={handleSymptoms}>Sore Throat</ButtonBase>
         <ButtonBase variant="contained" className={classes.buttonStyle} value="Weakness" onClick={handleSymptoms}>Weakness</ButtonBase>
         <ButtonBase variant="contained" className={classes.buttonStyle} value="Change in Apetite" onClick={handleSymptoms}>Change in Apetite</ButtonBase>
         <Button variant="default" onClick={handleSymptoms} style={{backgroundColor:"orange",color:"white",borderRadius:"8px",marginTop:"5px",textTransform:"none",fontStyle:"normal"}}>None of These</Button>
            </div>
            :
            <div>
              <Button variant="contained" className={classes.buttonStyle}  style={{color:"darkblue",fontSize:"14px",marginLeft:"630px"}} value={getSymptom}>{getSymptom}</Button>
            <div>
            <Button variant="contained" className={classes.inputStyle} color="primary">Additionally, please verify if you are experiencing any of the symptoms below (mark all those applicable)</Button>
            </div>
            {haveMoreSymptoms===false ?
            <div style={{marginLeft:"-300px !important"}}>
            <ButtonBase variant="contained" className={classes.buttonStyle} value="Moderate to Severe Cough" onClick={handleMoreSymptoms}>Moderate to Severe Cough</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value="Feeling Breathless" onClick={handleMoreSymptoms}>Feeling Breathless</ButtonBase>
          <ButtonBase variant="contained" className={classes.buttonStyle} value="Difficulty in Breathing" onClick={handleMoreSymptoms}>Difficulty in Breathing</ButtonBase>
         <ButtonBase variant="contained" className={classes.buttonStyle} value="Drowsiness" onClick={handleMoreSymptoms}>Drowsiness</ButtonBase>
         <ButtonBase variant="contained" className={classes.buttonStyle} value="Persistant Pain and Pressure in Chest" onClick={handleMoreSymptoms}>Persistant Pain and Pressure in Chest</ButtonBase>
         <ButtonBase variant="contained" className={classes.buttonStyle} value="Severe Weakness<" onClick={handleMoreSymptoms}>Severe Weakness</ButtonBase>
         <Button variant="default" onClick={handleMoreSymptoms} style={{backgroundColor:"orange",color:"white",borderRadius:"8px",marginTop:"5px",textTransform:"none",fontStyle:"normal"}} value="None of These">None of These</Button>
            </div>
          :
              <div>
            <Button variant="contained" className={classes.buttonStyle}  style={{color:"darkblue",fontSize:"14px",marginLeft:"630px"}} value={getMoreSymptom}>{getMoreSymptom}</Button>
            <div>
            <Button variant="contained" className={classes.inputStyle} color="primary">We would like to know about your smoking history</Button>
            </div>
            {doSmoke===false ?
            <div>
            <ButtonBase variant="contained" className={classes.buttonStyle} value="Current Smoker" onClick={handleSmoke}>Current Smoker</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value="Previous Smoker(Before last 6 months)" onClick={handleSmoke}>Previous Smoker(Before last 6 months)</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value="Never Smoke" onClick={handleSmoke}>Never Smoke</ButtonBase>
            </div>
            :
            <div>
              <Button variant="contained" className={classes.buttonStyle} style={{color:"darkblue",fontSize:"14px",marginLeft:"630px"}} value={getSmokeInfo}>{getSmokeInfo}</Button>
            <div>
            <Button variant="contained" className={classes.inputStyle} color="primary">Please select your travel and exposure details</Button>
            </div>
            {travelOptionClick===false ?
            <div>
            <ButtonBase variant="contained" className={classes.buttonStyle}  value="No Travel History" onClick={handleTravel}>No Travel History</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle}  value="No contact with anyone with Symptoms" onClick={handleTravel}>No contact with anyone with Symptoms</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value="History of travel or meeting in affected geographical area in last 14 days" onClick={handleTravel}>History of travel or meeting in affected geographical area in last 14 days</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value="Close contact with a person with Fever and cough in last 14 days" onClick={handleTravel}>Close contact with a person with Fever and cough in last 14 days</ButtonBase>
            </div>
            :
            <div>
              <Button variant="contained" className={classes.buttonStyle} style={{color:"darkblue",fontSize:"14px",marginLeft:"630px"}} value={getTravelDetails}>{getTravelDetails}</Button>
            <div>
            <Button variant="contained" className={classes.inputStyle} color="primary">Do you have a history of any of these conditions (mark all those applicable)</Button>
            </div>
            <div>
            <ButtonBase variant="contained" className={classes.buttonStyle}  value="Diabetes" onClick={handleDisease}>Diabetes</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value="High Blood Pressure" onClick={handleDisease}>High Blood Pressure</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value="Heart Disease" onClick={handleDisease}>Heart Disease</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value="Kidney Disease" onClick={handleDisease}>Kidney Disease</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value="Lung Disease(Asthama,COPD,TB etc)" onClick={handleDisease}>Lung Disease(Asthama,COPD,TB etc)</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value="Stroke Disease<" onClick={handleDisease}>Stroke Disease</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value="Reduce Immunity" onClick={handleDisease}>Reduce Immunity</ButtonBase>
            <Button variant="contained" style={{backgroundColor:"orange",color:"white",borderRadius:"8px",marginTop:"5px",textTransform:"none",fontStyle:"normal"}}value="None of these" onClick={handleDisease}>None of These</Button>
            </div>
            </div>
               }
              </div>
               }
              </div>
            }
            </div>
            }
          </div>
            }
           </div>
        }
       </div>
        }
         
        </div>
      }
      <Fab style={{backgroundColor:"white",color:"#30b085",marginLeft:"1250px",marginTop:"450px"}} aria-label="refresh">
        <RefreshIcon />
      </Fab>
       </div>
  </div> 
  
  );
}
export default CovidInput;