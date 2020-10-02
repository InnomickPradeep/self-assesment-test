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
import English from '../Translations/en.json';
import Hindi from '../Translations/hin.json';
import Telugu from '../Translations/tel.json';
import { setTranslations, setDefaultLanguage, setDefaultTranslations,useTranslation, getLanguage } from 'react-multi-lang'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1,
    maxHeight:"1500px",
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
  bodyStyle:{
   
  },
  inputStyle:{
      marginTop:"10px",
      borderRadius:"12px",
      fontWeight:"normal",
      textTransform:"none",
      cursor:"none",
      marginBottom:"20px",
      maxWidth:"470px",
      textAlign:"left",
      marginLeft:"400px !important",
  },
  divButton:{
    display:"none",
  },
  AgeInput:{
    borderBottom:"1px solid #30b085 !important",
    width:"450px",
    //marginLeft:"550px",
    margin:"10px 12px 8px 12px !important",
    color:"primary",

  },
  AgeButton:{
     marginTop:"10px",
        borderRadius:"12px",
      fontWeight:"normal",
      textTransform:"none",
      cursor:"none",
      marginBottom:"20px",
      maxWidth:"460px",
      textAlign:"left"
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
    marginTop:"8px",
  },
  AgeDiv:{
    border:"1px solid white",
    borderRadius:"14px",
    width:"500px",
    marginLeft:"550px",
    boxShadow:"2px 5px white",
    backgroundColor:"white",
    
  },
  firstButton:{
    marginRight:"5px",
    color:"#30b085",
    backgroundColor:"white",
    borderRadius:"8px",
    fontSize:"14px",
    padding:"10px 20px",
    fontWeight:"normal",
    fontStyle:"normal",
    textTransform:"none",
    marginLeft:"400px !important",
    marginTop:"8px",
  },
}));

setDefaultTranslations({Hindi,Telugu,English});

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
    setClick(true);
    if(event==="English"){
    setDefaultLanguage("English");
    }
    else if(event==="తెలుగు"){
      setDefaultLanguage("Telugu");
    }
    setlanguage(event);
    
  }
  const handleChange=(event)=>{
    
    setAge(event.target.value);
  }
  const handleGender=(event)=>{
    setGenderClick(true);
    setgender(event.target.value)
  }
  const t = useTranslation();
  
  return (
    <div className={classes.root}>
      <div>
      <AppBar position="static" style={{backgroundColor:"white", height:"75px"}}>
        <Toolbar>
            <img src={process.env.PUBLIC_URL + "/apollo_log.png"} width="60" height="60" style={{paddingLeft:"370px"}}  alt="apollo log" />
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
      <ButtonBase variant="contained" value="English" className={classes.firstButton} onClick={(event)=>setStates(event.target.value)}>English</ButtonBase>
      <ButtonBase variant="contained" value="తెలుగు" className={classes.buttonStyle} onClick={(event)=>setStates(event.target.value)}>తెలుగు</ButtonBase>
      <ButtonBase variant="contained" value="हिंदी" className={classes.buttonStyle} onClick={(event)=>setStates(event.target.value)}>हिंदी</ButtonBase>
      <ButtonBase variant="contained"  value="தமிழ்" className={classes.buttonStyle} onClick={(event)=>setStates(event.target.value)}>தமிழ்</ButtonBase>
      <ButtonBase variant="contained" value="বাংলা" className={classes.buttonStyle} onClick={(event)=>setStates(event.target.value)}>বাংলা</ButtonBase>
      </div>
      : <div>
      <div>  
      <Button variant="contained" className={classes.buttonStyle} style={{color:"darkblue",fontSize:"14px",marginLeft:"950px"}} value={language}>{language}</Button>
        </div>
        <div>
        <Button variant="contained" className={classes.inputStyle} color="primary">
        {t("COMMON.Appintro")}
          </Button>
         </div>
         <div>
          <Button variant="contained" className={classes.inputStyle} color="primary">
          {t("COMMON.AgeQuery")}
            </Button>
          </div> 
    

        
           {isDone === false ?
           <Fragment>
            <div className={classes.AgeDiv}>
            <form>
    
              <InputBase
            id="standard-number"
            className={classes.AgeInput}
            type="number"
            required
            placeholder={t("COMMON.Queryplaceholder")}
            onChange={handleChange}
            InputLabelProps={{
            shrink: true,
          }}
         />
            </form>
    
            </div>
            <div>
        <Button variant="default" onClick={()=>setDone(true)} style={{backgroundColor:"orange",color:"white",borderRadius:"8px",marginTop:"10px",marginLeft:"950px",textTransform:"none",fontStyle:"normal"}}>{t("COMMON.DoneButton")}</Button>
            </div>
            </Fragment>

            : 
            <div>
              <div>
        <Button variant="contained" className={classes.buttonStyle} style={{color:"darkblue",fontSize:"14px",marginTop:"5px",marginLeft:"950px"}} value={age}>{age}</Button>
        </div>
        <div>
        <div >
        <Button variant="contained" className={classes.inputStyle} color="primary">{t("COMMON.GenderQuery")}</Button>
        </div>
        </div>
        {genderClick===false ?
        <div>
        <div>
        <ButtonBase variant="contained" className={classes.firstButton} value={t("COMMON.genderOptions.Male")} onClick={handleGender}>{t("COMMON.genderOptions.Male")}</ButtonBase>
        <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.genderOptions.Female")} onClick={handleGender}>{t("COMMON.genderOptions.Female")}</ButtonBase>
        <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.genderOptions.Others")} onClick={handleGender}>{t("COMMON.genderOptions.Others")}</ButtonBase>
          </div>
          </div>
        :
           <div>
             <Button variant="contained" className={classes.buttonStyle} style={{color:"darkblue",fontSize:"14px",marginLeft:"950px"}} value={getGender}>{getGender}</Button>
            <div>
        <Button variant="contained" className={classes.inputStyle} color="primary">{t("COMMON.temperatureQuery")}</Button>
            </div>
            {isTempClick===false ?
            <div>
            <ButtonBase variant="contained" className={classes.firstButton} value={t("COMMON.temperatureOptions.Normal")} onClick={handleTemp}>{t("COMMON.temperatureOptions.Normal")}</ButtonBase>
        <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.temperatureOptions.Fever")} onClick={handleTemp}>{t("COMMON.temperatureOptions.Fever")}</ButtonBase>
        <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.temperatureOptions.High Fever")} onClick={handleTemp}>{t("COMMON.temperatureOptions.High Fever")}</ButtonBase>
        <div>
        <ButtonBase variant="contained" className={classes.firstButton}  value={t("COMMON.temperatureOptions.Don't Know")} onClick={handleTemp}>{t("COMMON.temperatureOptions.Don't Know")}</ButtonBase>
            </div>
            </div>
          :
          <div>
            <Button variant="contained" className={classes.buttonStyle} style={{color:"darkblue",fontSize:"14px",marginLeft:"950px"}} value={getTemp}>{getTemp}</Button>
            <div>
            <Button variant="contained" className={classes.inputStyle} color="primary">{t("COMMON.SymptomsQuery")}</Button>
           
            </div>
            {haveSymptoms===false ?
            <div>
            <ButtonBase variant="contained" className={classes.firstButton} value={t("COMMON.SymptomsOptions.DryCough")} onClick={handleSymptoms}>{t("COMMON.SymptomsOptions.DryCough")}</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.SymptomsOptions.loss or dim")} onClick={handleSymptoms}>{t("COMMON.SymptomsOptions.loss or dim")}</ButtonBase>
          <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.SymptomsOptions.Sore Throat")} onClick={handleSymptoms}>{t("COMMON.SymptomsOptions.Sore Throat")}</ButtonBase>
         <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.SymptomsOptions.Weakness")} onClick={handleSymptoms}>{t("COMMON.SymptomsOptions.Weakness")}</ButtonBase>
         <div>
         <ButtonBase variant="contained" className={classes.firstButton} value={t("COMMON.SymptomsOptions.Change in Appetite")} onClick={handleSymptoms}>{t("COMMON.SymptomsOptions.Change in Appetite")}</ButtonBase>
            <ButtonBase variant="default" onClick={handleSymptoms} style={{backgroundColor:"orange",color:"white",borderRadius:"8px",padding:"10px 20px",fontSize:"14px",marginTop:"5px",textTransform:"none",fontStyle:"normal"}} value={t("COMMON.SymptomsOptions.None of these")}>{t("COMMON.SymptomsOptions.None of these")}</ButtonBase>
         </div>
            </div>
            :
            <div>
              <Button variant="contained" className={classes.buttonStyle} style={{color:"darkblue",fontSize:"14px",marginLeft:"950px"}} value={getSymptom}>{getSymptom}</Button>
            <div>
            <Button variant="contained" className={classes.inputStyle} color="primary">{t("COMMON.MoreSymptomsQuery")}</Button>
            </div>
            {haveMoreSymptoms===false ?
            <div style={{marginLeft:"-300px !important"}}>
            <ButtonBase variant="contained" className={classes.firstButton} style={{marginLeft:"50px"}} value={t("COMMON.MoreSymptomsOptions.Moderate")} onClick={handleMoreSymptoms}>{t("COMMON.MoreSymptomsOptions.Moderate")}</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.MoreSymptomsOptions.Feeling Breathless")} onClick={handleMoreSymptoms}>{t("COMMON.MoreSymptomsOptions.Feeling Breathless")}</ButtonBase>
          <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.MoreSymptomsOptions.Difficulty")} onClick={handleMoreSymptoms}>{t("COMMON.MoreSymptomsOptions.Difficulty")}</ButtonBase>
          <div>
         <ButtonBase variant="contained" className={classes.firstButton} style={{marginLeft:"50px"}} value={t("COMMON.MoreSymptomsOptions.Drowsiness")} onClick={handleMoreSymptoms}>{t("COMMON.MoreSymptomsOptions.Drowsiness")}</ButtonBase>
        
         <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.MoreSymptomsOptions.Persistant")} onClick={handleMoreSymptoms}>{t("COMMON.MoreSymptomsOptions.Persistant")}</ButtonBase>
         <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.MoreSymptomsOptions.Severe Weakness")} onClick={handleMoreSymptoms}>{t("COMMON.MoreSymptomsOptions.Severe Weakness")}</ButtonBase>
         </div><div>
         <ButtonBase variant="default" onClick={handleMoreSymptoms} style={{backgroundColor:"orange",color:"white",borderRadius:"8px",padding:"10px 20px",fontSize:"14px",marginTop:"5px",marginLeft:"400px" ,textTransform:"none",fontStyle:"normal"}} value={t("COMMON.MoreSymptomsOptions.None of These")}>{t("COMMON.MoreSymptomsOptions.None of These")}</ButtonBase>
           </div>
            </div>
          :
              <div>
            <Button variant="contained" className={classes.buttonStyle}  style={{color:"darkblue",fontSize:"14px",marginLeft:"950px"}} value={getMoreSymptom}>{getMoreSymptom}</Button>
            <div>
            <Button variant="contained" className={classes.inputStyle} color="primary">{t("COMMON.SmokeQuery")}</Button>
            </div>
            {doSmoke===false ?
            <div>
            <ButtonBase variant="contained" className={classes.firstButton} value={t("COMMON.SmokeOptions.Current Smoker")} onClick={handleSmoke}>{t("COMMON.SmokeOptions.Current Smoker")}</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.SmokeOptions.Previous Smoker")} onClick={handleSmoke}>{t("COMMON.SmokeOptions.Previous Smoker")}</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.SmokeOptions.Never Smoke")} onClick={handleSmoke}>{t("COMMON.SmokeOptions.Never Smoke")}</ButtonBase>
            </div>
            :
            <div>
              <Button variant="contained" className={classes.buttonStyle} style={{color:"darkblue",fontSize:"14px",marginLeft:"950px"}} value={getSmokeInfo}>{getSmokeInfo}</Button>
            <div>
            <Button variant="contained" className={classes.inputStyle} color="primary">{t("COMMON.TravelQuery")}</Button>
            </div>
            {travelOptionClick===false ?
            <div>
            <ButtonBase variant="contained" className={classes.firstButton}  value={t("COMMON.TravelOptions.No Travel History")} onClick={handleTravel}>{t("COMMON.TravelOptions.No Travel History")}</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle}  value={t("COMMON.TravelOptions.No contact")} onClick={handleTravel}>{t("COMMON.TravelOptions.No contact")}</ButtonBase>
            <div>
            <ButtonBase variant="contained" className={classes.firstButton} value={t("COMMON.TravelOptions.History of travel")} onClick={handleTravel}>{t("COMMON.TravelOptions.History of travel")}</ButtonBase>
            </div>
            <div>
            <ButtonBase variant="contained" className={classes.firstButton} value={t("COMMON.TravelOptions.Close contact")} onClick={handleTravel}>{t("COMMON.TravelOptions.Close contact")}</ButtonBase>
            </div>
           </div>
            :
            <div>
              <Button variant="contained" className={classes.buttonStyle} style={{color:"darkblue",fontSize:"14px",marginLeft:"950px"}} value={getTravelDetails}>{getTravelDetails}</Button>
            <div>
            <Button variant="contained" className={classes.inputStyle} color="primary">{t("COMMON.DiseaseQuery")}</Button>
            </div>
            <div>
            <ButtonBase variant="contained" className={classes.firstButton}  value={t("COMMON.DiseaseOptions.Diabetes")} onClick={handleDisease}>{t("COMMON.DiseaseOptions.Diabetes")}</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.DiseaseOptions.HBP")} onClick={handleDisease}>{t("COMMON.DiseaseOptions.HBP")}</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.DiseaseOptions.Heart Disease")} onClick={handleDisease}>{t("COMMON.DiseaseOptions.Heart Disease")}</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.DiseaseOptions.Kidney Disease")} onClick={handleDisease}>{t("COMMON.DiseaseOptions.Kidney Disease")}</ButtonBase>
            <div>
            <ButtonBase variant="contained" className={classes.firstButton} value={t("COMMON.DiseaseOptions.Lung Disease")} onClick={handleDisease}>{t("COMMON.DiseaseOptions.Lung Disease")}</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.DiseaseOptions.Stroke")} onClick={handleDisease}>{t("COMMON.DiseaseOptions.Stroke")}</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.DiseaseOptions.Reduced Immunity")} onClick={handleDisease}>{t("COMMON.DiseaseOptions.Reduced Immunity")}</ButtonBase>
            </div>
            <div>
            <ButtonBase variant="default" onClick={handleDisease} style={{backgroundColor:"orange",color:"white",borderRadius:"8px",padding:"10px 20px",fontSize:"14px",marginTop:"5px",marginLeft:"400px" ,textTransform:"none",fontStyle:"normal"}} value={t("COMMON.DiseaseOptions.None of These")}>{t("COMMON.DiseaseOptions.None of These")}</ButtonBase>
            </div>
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