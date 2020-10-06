import React , {useState,Fragment} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import RefreshIcon from '@material-ui/icons/Refresh';
import { InputBase} from '@material-ui/core';
import {ButtonBase} from '@material-ui/core';
import English from '../Translations/en.json';
import Hindi from '../Translations/hin.json';
import Telugu from '../Translations/tel.json';
import {useHistory} from 'react-router-dom';
import { setDefaultLanguage, setDefaultTranslations,useTranslation} from 'react-multi-lang'


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
    margin:"10px 12px 8px 12px !important",
    color:"primary",

  },
  appBarStyle:{
    backgroundColor:"white", 
    height:"75px"
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
  buttonStyleright:{
    color:"darkblue",
    fontSize:"14px",
    marginLeft:"950px",
    marginRight:"5px",
    backgroundColor:"white",
    borderRadius:"8px",
    padding:"10px 20px",
    fontWeight:"normal",
    fontStyle:"normal",
    textTransform:"none",
    marginTop:"8px",
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
  doneStyle:{
    backgroundColor:"orange",
    color:"white",
    borderRadius:"8px",
    marginTop:"10px",
    marginLeft:"950px",
    textTransform:"none",
    fontStyle:"normal"
  },
  optionalButton:{
    backgroundColor:"orange",
    color:"white",
    borderRadius:"8px",
    padding:"10px 20px",
    fontSize:"14px",
    marginTop:"5px",
    textTransform:"none",
    fontStyle:"normal"
  },
  optionalButton2:{
    backgroundColor:"orange",
    color:"white",
    borderRadius:"8px",
    padding:"10px 20px",
    fontSize:"14px",
    marginTop:"5px",
    textTransform:"none",
    fontStyle:"normal",
    marginLeft:"400px"
  },
  fabStyle:{
    backgroundColor:"white",
    color:"#30b085",
    marginLeft:"1250px",
    marginTop:"450px"
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
  const [isConfirmSymptoms,setConfirm]=useState(false);
  const [getConfirmedSymptoms,setConfirmedSymptoms]=useState([]);
  const [isConfirmMoreSymptoms,setConfirmMore]=useState(false);
  const [getConfirmedMoreSymptoms,setConfirmedMoreSymptoms]=useState([]);
  const [isDiseaseConfirm,setDiseaseConfirm]=useState(false);
  const [getConfirmedDisease,setConfirmedDisease]=useState([]);
  const [lastConfirmClick,setLastConfirmClick]=useState(false);
  const [getLastConfirm,setLastConfirm]=useState("");



const history=useHistory();
const handleResults=(arg)=>{
  const path="/Results/".concat(arg);
  history.push(path);
}
  const handleLastConfirm=(event)=>{
    setLastConfirmClick(true);
    setLastConfirm(event.target.value);
  }
  const handleTravel=(event)=>{
    setTravelOption(true);
    setTravelDetails(event.target.value);
  }
  const selectSymptoms=(event)=>{
    if(getConfirmedSymptoms.includes(event.target.value)===true){
        let removeSymptom=event.target.value;
        let res=getConfirmedSymptoms.filter(item =>item !==removeSymptom);
        setConfirmedSymptoms(res);
     }
     else{
      let addSymptom=event.target.value;
      let res1=getConfirmedSymptoms.concat(addSymptom);
      setConfirmedSymptoms(res1);
      
     }
  }

  const selectMoreSymptoms=(event)=>{
    if(getConfirmedMoreSymptoms.includes(event.target.value)===true){
      // let res1=getConfirmedSymptoms.replace(event.target.value,'');
        //setConfirmedSymptoms(res1);
        let removeSymptom=event.target.value;
        let res=getConfirmedMoreSymptoms.filter(item =>item !==removeSymptom);
        setConfirmedMoreSymptoms(res);
     }
     else{
      // let res=getConfirmedSymptoms.concat(event.target.value);
      //setConfirmedSymptoms(res);
     
      let addSymptom=event.target.value;
      let res1=getConfirmedMoreSymptoms.concat(addSymptom);
      setConfirmedMoreSymptoms(res1);
      
     }
  }


  const selectDiseases=(event)=>{
    if(getConfirmedDisease.includes(event.target.value)===true){
      // let res1=getConfirmedSymptoms.replace(event.target.value,'');
        //setConfirmedSymptoms(res1);
        let removeSymptom=event.target.value;
        let res=getConfirmedDisease.filter(item =>item !==removeSymptom);
        setConfirmedDisease(res);
     }
     else{
      // let res=getConfirmedSymptoms.concat(event.target.value);
      //setConfirmedSymptoms(res);
     
      let addSymptom=event.target.value;
      let res1=getConfirmedDisease.concat(addSymptom);
      setConfirmedDisease(res1);
      
     }
  }
  const confirmDisease=()=>{
    setDiseaseConfirm(true);
  }
  const confirmMoreSymptoms=()=>{
    setConfirmMore(true);
  }
  const confirmSymptoms=()=>{
    setConfirm(true);
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
  const handleRouting=()=>{
    if ((getTemp === t("COMMON.temperatureOptions.Normal") || getTemp=== t("COMMON.temperatureOptions.Don't Know"))
    &&
    getConfirmedSymptoms.length=== 0
    &&
    getConfirmedMoreSymptoms.length ===0
    &&
    getSmokeInfo=== t("COMMON.SmokeOptions.Current Smoker") 
    &&
    getTravelDetails !== t("COMMON.TravelOptions.No Travel History")
    &&
    getConfirmedDisease.length ===0
    ){  
        handleResults("Moderate");
    }
    else if ( (getTemp === t("COMMON.temperatureOptions.Normal") || getTemp=== t("COMMON.temperatureOptions.Don't Know"))
    &&
    getConfirmedSymptoms.length=== 0
    &&
    getConfirmedMoreSymptoms.length ===0
    &&
    getSmokeInfo
    &&
    getTravelDetails
    &&
    getConfirmedDisease.length ===0
    ){
     
      handleResults("low");
    }
  }

  const handlelastRouting=()=>{
    if ((getTemp===t("COMMON.temperatureOptions.Normal") || getTemp===t("COMMON.temperatureOptions.Don't Know") )
    &&
    getConfirmedSymptoms.length <=1
    &&
    getConfirmedMoreSymptoms.length <=1
    &&
    getConfirmedDisease.length <=1 
    &&
   ( getLastConfirm === t("COMMON.SymptomsCheckOptions.Improved") || getLastConfirm === t("COMMON.SymptomsCheckOptions.No Change"))
    ){
      
      handleResults("low");
    }
     else  if ((getTemp !==t("COMMON.temperatureOptions.Normal") || getTemp !==t("COMMON.temperatureOptions.Don't Know"))
      &&
      getConfirmedSymptoms.length >=3
      &&
      getConfirmedMoreSymptoms.length >=3
      &&
      getTravelDetails !== t("COMMON.TravelOptions.No Travel History")
      &&
      getConfirmedDisease.length >=3 
      ){  
          handleResults("High");
      }
      else{
            handleResults("Moderate");
      }
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
      <AppBar position="static" className={classes.appBarStyle}>
        <Toolbar>
            <img src={process.env.PUBLIC_URL + "/apollo_log.png"} width="60" height="60" style={{paddingLeft:"370px"}}  alt="apollo log" />
          <Typography variant="h6" className={classes.title}>
            CORONAVIRUS RISK SCAN
          </Typography>
        </Toolbar>
      </AppBar>
      </div>
      <div className={classes.bodyStyle}>
      
      <Button variant="contained" className={classes.inputStyle} color="primary">Hello, Please tell us which language you'd like to take this test in:</Button>
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
      <Button variant="contained" className={classes.buttonStyleright}  value={language}>{language}</Button>
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
         <Button variant="default" onClick={()=>setDone(true)} className={classes.doneStyle}> {t("COMMON.DoneButton")}</Button>
            </div>
            </Fragment>

            : 
            <div>
              <div>
        <Button variant="contained" className={classes.buttonStyleright}  value={age}>{age}</Button>
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
             <Button variant="contained" className={classes.buttonStyleright} value={getGender}>{getGender}</Button>
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
            <Button variant="contained" className={classes.buttonStyleright} value={getTemp}>{getTemp}</Button>
            <div>
            <Button variant="contained" className={classes.inputStyle} color="primary">{t("COMMON.SymptomsQuery")}</Button>
           
            </div>
            { (haveSymptoms || isConfirmSymptoms)  ===false ?
            <div>
            <ButtonBase variant="contained" className={classes.firstButton} value={t("COMMON.SymptomsOptions.DryCough")} onClick={selectSymptoms}>{t("COMMON.SymptomsOptions.DryCough")}</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.SymptomsOptions.loss or dim")} onClick={selectSymptoms}>{t("COMMON.SymptomsOptions.loss or dim")}</ButtonBase>
          <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.SymptomsOptions.Sore Throat")} onClick={selectSymptoms}>{t("COMMON.SymptomsOptions.Sore Throat")}</ButtonBase>
         <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.SymptomsOptions.Weakness")} onClick={selectSymptoms}>{t("COMMON.SymptomsOptions.Weakness")}</ButtonBase>
         <div>
         <ButtonBase variant="contained" className={classes.firstButton} value={t("COMMON.SymptomsOptions.Change in Appetite")} onClick={selectSymptoms}>{t("COMMON.SymptomsOptions.Change in Appetite")}</ButtonBase>
            { getConfirmedSymptoms.length !==0 ?
              <ButtonBase variant="default" onClick={confirmSymptoms} className={classes.optionalButton} value={t("COMMON.SymptomsOptions.Confirm")}>{t("COMMON.SymptomsOptions.Confirm")}</ButtonBase>
            :
            <ButtonBase variant="default" onClick={handleSymptoms}  className={classes.optionalButton} value={t("COMMON.SymptomsOptions.None of these")}>{t("COMMON.SymptomsOptions.None of these")}</ButtonBase>
            }
            </div>
            </div>
          :
            <div>
              {haveSymptoms ===true ?
              <div>
              <Button variant="contained" className={classes.buttonStyleright}  value={getSymptom}>{getSymptom}</Button>
              </div>
              :
              <div>
              <Button variant="contained" className={classes.buttonStyleright} value={getConfirmedSymptoms}>{getConfirmedSymptoms}</Button>
              </div>
              }
            <div>
            <Button variant="contained" className={classes.inputStyle} color="primary">{t("COMMON.MoreSymptomsQuery")}</Button>
            </div>
            { (haveMoreSymptoms || isConfirmMoreSymptoms) ===false ?
            <div>
            <ButtonBase variant="contained" className={classes.firstButton} style={{marginLeft:"50px"}} value={t("COMMON.MoreSymptomsOptions.Moderate")} onClick={selectMoreSymptoms}>{t("COMMON.MoreSymptomsOptions.Moderate")}</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.MoreSymptomsOptions.Feeling Breathless")} onClick={selectMoreSymptoms}>{t("COMMON.MoreSymptomsOptions.Feeling Breathless")}</ButtonBase>
          <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.MoreSymptomsOptions.Difficulty")} onClick={selectMoreSymptoms}>{t("COMMON.MoreSymptomsOptions.Difficulty")}</ButtonBase>
          <div>
         <ButtonBase variant="contained" className={classes.firstButton} style={{marginLeft:"50px"}} value={t("COMMON.MoreSymptomsOptions.Drowsiness")} onClick={selectMoreSymptoms}>{t("COMMON.MoreSymptomsOptions.Drowsiness")}</ButtonBase>
        
         <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.MoreSymptomsOptions.Persistant")} onClick={selectMoreSymptoms}>{t("COMMON.MoreSymptomsOptions.Persistant")}</ButtonBase>
         <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.MoreSymptomsOptions.Severe Weakness")} onClick={selectMoreSymptoms}>{t("COMMON.MoreSymptomsOptions.Severe Weakness")}</ButtonBase>
         </div><div>
           {getConfirmedMoreSymptoms.length ===0 ?
         <ButtonBase variant="default" onClick={handleMoreSymptoms} className={classes.optionalButton2} value={t("COMMON.MoreSymptomsOptions.None of These")}>{t("COMMON.MoreSymptomsOptions.None of These")}</ButtonBase>
         :
         <ButtonBase variant="default" onClick={confirmMoreSymptoms} className={classes.optionalButton2} value={t("COMMON.MoreSymptomsOptions.Confirm")}>{t("COMMON.MoreSymptomsOptions.Confirm")}</ButtonBase>
           }  
         </div>
            </div>
          :
              <div>
                {haveMoreSymptoms === true ?
            <Button variant="contained" className={classes.buttonStyleright}  value={getMoreSymptom}>{getMoreSymptom}</Button>
           :
           <Button variant="contained" className={classes.buttonStyleright}  value={getConfirmedMoreSymptoms}>{getConfirmedMoreSymptoms}</Button>
          }
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
              <Button variant="contained" className={classes.buttonStyleright} value={getSmokeInfo}>{getSmokeInfo}</Button>
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
              <Button variant="contained" className={classes.buttonStyleright} value={getTravelDetails}>{getTravelDetails}</Button>
            <div>
            <Button variant="contained" className={classes.inputStyle} color="primary">{t("COMMON.DiseaseQuery")}</Button>
            </div>
            { (DiseaseOptionClick || isDiseaseConfirm) === false  ?
            <div>
            <ButtonBase variant="contained" className={classes.firstButton}  value={t("COMMON.DiseaseOptions.Diabetes")} onClick={selectDiseases}>{t("COMMON.DiseaseOptions.Diabetes")}</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.DiseaseOptions.HBP")} onClick={selectDiseases}>{t("COMMON.DiseaseOptions.HBP")}</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.DiseaseOptions.Heart Disease")} onClick={selectDiseases}>{t("COMMON.DiseaseOptions.Heart Disease")}</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.DiseaseOptions.Kidney Disease")} onClick={selectDiseases}>{t("COMMON.DiseaseOptions.Kidney Disease")}</ButtonBase>
            <div>
            <ButtonBase variant="contained" className={classes.firstButton} value={t("COMMON.DiseaseOptions.Lung Disease")} onClick={selectDiseases}>{t("COMMON.DiseaseOptions.Lung Disease")}</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.DiseaseOptions.Stroke")} onClick={selectDiseases}>{t("COMMON.DiseaseOptions.Stroke")}</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} value={t("COMMON.DiseaseOptions.Reduced Immunity")} onClick={selectDiseases}>{t("COMMON.DiseaseOptions.Reduced Immunity")}</ButtonBase>
            </div>
            <div>
              {getConfirmedDisease.length ===0 ?
            <ButtonBase variant="default" onClick={(event)=>{
              handleDisease(event)
              handleRouting() 
             }} className={classes.optionalButton2}   value={t("COMMON.DiseaseOptions.None of These")}>{t("COMMON.DiseaseOptions.None of These")}</ButtonBase>
           :
            <ButtonBase variant="default" onClick={confirmDisease} className={classes.optionalButton2}  value={t("COMMON.DiseaseOptions.Confirm")}>{t("COMMON.DiseaseOptions.Confirm")}</ButtonBase>
            }
            </div>
            </div>
            : 
            <div>
              {DiseaseOptionClick ===true ?
              <Button variant="contained" className={classes.buttonStyleright}  value={getDiseaseDetails}>{getDiseaseDetails}</Button>
              :
              <Button variant="contained" className={classes.buttonStyleright}  value={getConfirmedDisease}>{getConfirmedDisease}</Button>
               }
              <div>
              <Button variant="contained" className={classes.inputStyle} color="primary">{t("COMMON.SymptomsCheck")}</Button>
                </div>
            <div style={{marginBottom:"50px"}}>
            <ButtonBase variant="contained" className={classes.firstButton}  onClick={(event)=>{
              handleLastConfirm(event)
              handlelastRouting()
            }} value={t("COMMON.SymptomsCheckOptions.Improved")}>{t("COMMON.SymptomsCheckOptions.Improved")}</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} onClick={(event)=>{
              handleLastConfirm(event)
              handlelastRouting()
              }} value={t("COMMON.SymptomsCheckOptions.No Change")}>{t("COMMON.SymptomsCheckOptions.No Change")}</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} onClick={(event)=>{
              handleLastConfirm(event)
              handlelastRouting()}}  value={t("COMMON.SymptomsCheckOptions.Worsened")}>{t("COMMON.SymptomsCheckOptions.Worsened")}</ButtonBase>
            <ButtonBase variant="contained" className={classes.buttonStyle} onClick={(event)=>{
              handleLastConfirm(event)
              handlelastRouting()}}  value={t("COMMON.SymptomsCheckOptions.WorsenedMore")}>{t("COMMON.SymptomsCheckOptions.WorsenedMore")}</ButtonBase>
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
         
        </div>
      }
      <Fab onClick={()=>window.location.reload()} className={classes.fabStyle} aria-label="refresh">
        <RefreshIcon />
      </Fab>
       </div>
  </div> 
  );
}
export default CovidInput;