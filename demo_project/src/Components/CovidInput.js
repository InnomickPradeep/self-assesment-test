import React , {useState,useEffect,Fragment} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import RefreshIcon from '@material-ui/icons/Refresh';
import { InputBase} from '@material-ui/core';
import {ButtonBase} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import firebase from '../firebase';
import './covidInput.css';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1,
    maxHeight:"2300px !important",
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
  selectedButtonStyle:{
    marginRight:"5px",
   color:"white",
    backgroundColor:"#30b085",
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
    backgroundColor:"orange !important",
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
    marginTop:"390px"
    
  },
}));


function CovidInput() {
  const classes = useStyles();
  //State variables to store the clickable events and some boolean values
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
  const [querysList,setquery]=useState([]);
  const [drycough,setDrycough]=useState(false);
  const [lod,setLOD]=useState(false);
  const [soreThroat,setSoreThroat]=useState(false);
  const [weak,setWeak]=useState(false);
  const [Appetite,setAppetite]=useState(false);
  const [Moderate,setModerate]=useState(false);
  const [FB,setFB]=useState(false);
  const [Difficulty,setDifficulty]=useState(false);
  const [Drowsiness,setDrowsiness]=useState(false);
  const [Persistant,setPersistant]=useState(false);
  const [Severe,setSevere]=useState(false);
  const [Diabetes,setDiabetes]=useState(false);
  const [BP,setBP]=useState(false);
  const [HD,setHD]=useState(false);
  const [KD,setKD]=useState(false);
  const [LD,setLD]=useState(false);
  const [Stroke,setStroke]=useState(false);
  const [Immunity,setImmunity]=useState(false);
  const [lang,setlang]=useState("English");

  //function to handle routing to results page
const history=useHistory();
const handleResults=(arg)=>{
  let  path="/Results/".concat(arg);
  history.push(path);
}




// functions that handles the events when a button is clicked and store their values
  const handleLastConfirm=(event)=>{
    setLastConfirmClick(true);
    setLastConfirm(event.target.value);
  }
  const handleTravel=(event)=>{
    setTravelOption(true);
    setTravelDetails(event.target.value);
  }

  //function that provides functionality to select multiple options 
  const selectSymptoms=(event)=>{
    querysList.map(data=>{
      var langObject;
    if (lang ==="English") {
      langObject=data.English;
    }
    else if(lang==="Telugu"){
      langObject=data.Telugu;
    }
    else if(lang==="Hindi"){
      langObject=data.Hindi;
    }
    else if(lang==="Tamil"){
      langObject=data.Tamil;
    }
    else if(lang==="Bengali"){
    langObject=data.Bengali;
    }


    if(getConfirmedSymptoms.includes(event.target.value)===true){
        if(event.target.value===langObject.SymptomsOptions.DryCough){
          setDrycough(false);
        }
        else if(event.target.value===langObject.SymptomsOptions.lossordim){
          setLOD(false);
        }
        else if(event.target.value===langObject.SymptomsOptions.SoreThroat){
          setSoreThroat(false);
        }
        else if(event.target.value===langObject.SymptomsOptions.Weakness){
          setWeak(false);
        }
        else if(event.target.value===langObject.SymptomsOptions.ChangeInAppetite){
          setAppetite(false);
        }
        let removeSymptom=event.target.value;
        let res=getConfirmedSymptoms.filter(item =>item !==removeSymptom);
        setConfirmedSymptoms(res);
     }
     else{
      if(event.target.value===langObject.SymptomsOptions.DryCough){
        setDrycough(true);
      }
      else if(event.target.value===langObject.SymptomsOptions.lossordim){
        setLOD(true);
      }
      else if(event.target.value===langObject.SymptomsOptions.SoreThroat){
        setSoreThroat(true);
      }
      else if(event.target.value===langObject.SymptomsOptions.Weakness){
        setWeak(true);
      }
      else if(event.target.value===langObject.SymptomsOptions.ChangeInAppetite){
        setAppetite(true);
      }
      let addSymptom=event.target.value;
      let res1=getConfirmedSymptoms.concat(addSymptom);
      setConfirmedSymptoms(res1);
      
     }
  })
}


  const selectMoreSymptoms=(event)=>{

    querysList.map(data=>{
      var langObject;
    if (lang ==="English") {
      langObject=data.English;
    }
    else if(lang==="Telugu"){
      langObject=data.Telugu;
    }
    else if(lang==="Hindi"){
      langObject=data.Hindi;
    }
    else if(lang==="Tamil"){
      langObject=data.Tamil;
    }
    else if(lang==="Bengali"){
    langObject=data.Bengali;
    }


    if(getConfirmedMoreSymptoms.includes(event.target.value)===true){
      // let res1=getConfirmedSymptoms.replace(event.target.value,'');
        //setConfirmedSymptoms(res1);
        if(event.target.value===langObject.MoreSymptomsOptions.Moderate){
          setModerate(false);
        }
        else if(event.target.value===langObject.MoreSymptomsOptions.FeelingBreathless){
          setFB(false);
        }
        else if(event.target.value===langObject.MoreSymptomsOptions.Difficulty){
          setDifficulty(false);
        }
        else if(event.target.value===langObject.MoreSymptomsOptions.Drowsiness){
          setDrowsiness(false);
        }
        else if(event.target.value===langObject.MoreSymptomsOptions.Persistant){
          setPersistant(false);
        }
        else if(event.target.value===langObject.MoreSymptomsOptions.SevereWeakness){
          setSevere(false);
        }
        let removeSymptom=event.target.value;
        let res=getConfirmedMoreSymptoms.filter(item =>item !==removeSymptom);
        setConfirmedMoreSymptoms(res);
     }
     else{
      // let res=getConfirmedSymptoms.concat(event.target.value);
      //setConfirmedSymptoms(res);
     
      if(event.target.value===langObject.MoreSymptomsOptions.Moderate){
        setModerate(true);
      }
      else if(event.target.value===langObject.MoreSymptomsOptions.FeelingBreathless){
        setFB(true);
      }
      else if(event.target.value===langObject.MoreSymptomsOptions.Difficulty){
        setDifficulty(true);
      }
      else if(event.target.value===langObject.MoreSymptomsOptions.Drowsiness){
        setDrowsiness(true);
      }
      else if(event.target.value===langObject.MoreSymptomsOptions.Persistant){
        setPersistant(true);
      }
      else if(event.target.value===langObject.MoreSymptomsOptions.SevereWeakness){
        setSevere(true);
      }
      let addSymptom=event.target.value;
      let res1=getConfirmedMoreSymptoms.concat(addSymptom);
      setConfirmedMoreSymptoms(res1);
      
     }
    })
  }


  const selectDiseases=(event)=>{

    querysList.map(data=>{
      var langObject;
    if (lang ==="English") {
      langObject=data.English;
    }
    else if(lang==="Telugu"){
      langObject=data.Telugu;
    }
    else if(lang==="Hindi"){
      langObject=data.Hindi;
    }
    else if(lang==="Tamil"){
      langObject=data.Tamil;
    }
    else if(lang==="Bengali"){
    langObject=data.Bengali;
    }
    if(getConfirmedDisease.includes(event.target.value)===true){
      // let res1=getConfirmedSymptoms.replace(event.target.value,'');
        //setConfirmedSymptoms(res1);
        if(event.target.value===langObject.DiseaseOptions.Diabetes){
          setDiabetes(false);
        }
        else if(event.target.value===langObject.DiseaseOptions.HBP){
          setBP(false);
        }
        else if(event.target.value===langObject.DiseaseOptions.HeartDisease){
          setHD(false);
        }
        else if(event.target.value===langObject.DiseaseOptions.KidneyDisease){
          setKD(false);
        }
        else if(event.target.value===langObject.DiseaseOptions.LungDisease){
          setLD(false);
        }
        else if(event.target.value===langObject.DiseaseOptions.Stroke){
          setStroke(false);
        }
        else if(event.target.value===langObject.DiseaseOptions.ReducedImmunity){
          setImmunity(false);
        }
        let removeSymptom=event.target.value;
        let res=getConfirmedDisease.filter(item =>item !==removeSymptom);
        setConfirmedDisease(res);
     }
     else{
      // let res=getConfirmedSymptoms.concat(event.target.value);
      //setConfirmedSymptoms(res);
      if(event.target.value===langObject.DiseaseOptions.Diabetes){
        setDiabetes(true);
      }
      else if(event.target.value===langObject.DiseaseOptions.HBP){
        setBP(true);
      }
      else if(event.target.value===langObject.DiseaseOptions.HeartDisease){
        setHD(true);
      }
      else if(event.target.value===langObject.DiseaseOptions.KidneyDisease){
        setKD(true);
      }
      else if(event.target.value===langObject.DiseaseOptions.LungDisease){
        setLD(true);
      }
      else if(event.target.value===langObject.DiseaseOptions.Stroke){
        setStroke(true);
      }
      else if(event.target.value===langObject.DiseaseOptions.ReducedImmunity){
        setImmunity(true);
      }
      let addSymptom=event.target.value;
      let res1=getConfirmedDisease.concat(addSymptom);
      setConfirmedDisease(res1);
      
     }
    })
  }


  //function that handle events when a button is clicked and store that value in state variables
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
    setlang("English"); 
    } 
    else if(event==="తెలుగు"){
       setlang("Telugu"); 
      
    }
    else if(event==="हिंदी"){
      setlang("Hindi");
    }
    else if(event==="தமிழ்"){
      setlang("Tamil");
    }
    else if(event==="বাংলা"){
      setlang("Bengali");
    } 
    setlanguage(event);
    
  } 


  //function that handles the report to be generated based on options entered by user like low ,medium or high 
  //respiratory illness
  const handleRouting=()=>{
    querysList.map(data=>{
      var langObject;
    if (lang ==="English") {
      langObject=data.English;
    }
    else if(lang==="Telugu"){
      langObject=data.Telugu;
    }
    else if(lang==="Hindi"){
      langObject=data.Hindi;
    }
    else if(lang==="Tamil"){
      langObject=data.Tamil;
    }
    else if(lang==="Bengali"){
    langObject=data.Bengali;
    }
     if ((getTemp === langObject.temperatureOptions.Normal || getTemp=== langObject.temperatureOptions.DoNotKnow)
    &&
    getConfirmedSymptoms.length ===0
    &&
    getConfirmedMoreSymptoms.length ===0
    &&
    getSmokeInfo=== langObject.SmokeOptions.CurrentSmoker
    &&
    getTravelDetails !== langObject.TravelOptions.NoTravelHistory
    &&
    getConfirmedDisease.length ===0
    ){  
        handleResults("Moderate");
    }
    else if ( (getTemp === langObject.temperatureOptions.Normal || getTemp=== langObject.temperatureOptions.DoNotKnow)
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
    })
  }

  const handlelastRouting=()=>{
    querysList.map( data => {
      var langObject;
    if (lang ==="English") {
      langObject=data.English;
    }
    else if(lang==="Telugu"){
      langObject=data.Telugu;
    }
    else if(lang==="Hindi"){
      langObject=data.Hindi;
    }
    else if(lang==="Tamil"){
      langObject=data.Tamil;
    }
    else if(lang==="Bengali"){
    langObject=data.Bengali;
    }
    if ((getTemp===langObject.temperatureOptions.Normal || getTemp===langObject.temperatureOptions.DoNotKnow )
    &&
    getConfirmedSymptoms.length <=1
    &&
    getConfirmedMoreSymptoms.length <=1
    &&
    getConfirmedDisease.length <=1 
    &&
   ( getLastConfirm === langObject.SymptomsCheckOptions.Improved || getLastConfirm === langObject.SymptomsCheckOptions.NoChange)
    ){
      
      handleResults("low");
    }
    else if ((getTemp !==langObject.temperatureOptions.Normal || getTemp !==langObject.temperatureOptions.DoNotKnow)
      &&
      getConfirmedSymptoms.length <=2
      &&
      getConfirmedMoreSymptoms.length <=2
      &&
      getTravelDetails !== langObject.TravelOptions.NoTravelHistory
      &&
      getConfirmedDisease.length <=2
      ){  
          handleResults("Moderate");
      }
      else if ((getTemp !==langObject.temperatureOptions.Normal || getTemp !==langObject.temperatureOptions.DoNotKnow)
      &&
      getConfirmedSymptoms.length >=3
      &&
      getConfirmedMoreSymptoms.length >=3
      &&
      getTravelDetails !== langObject.TravelOptions.NoTravelHistory
      &&
      getConfirmedDisease.length >=3
      ){  
          handleResults("High");
      }
      else{
        handleResults("Moderate");
      }
      
    }) 
  }
  const handleChange=(event)=>{
    
    setAge(event.target.value);
  }
  const handleGender=(event)=>{
    setGenderClick(true);
    setgender(event.target.value)
  }
  
  


//useEffect hook  is called whenever a component is loaded and here only we can get the entire data from firebase 
//only when the component is being loaded for the first time
  useEffect(()=>{
    firebase.database().ref("COMMON").on("value", snapshot => {
        let  queryList= [];
        snapshot.forEach(snap => {
            // snap.val() is the dictionary with all your keys/values from the 'common' path
            queryList.push(snap.val());
        });
       setquery(queryList);
      });
},[])

   
//variables that handles the selected and non-selected options
let selectDryCough= drycough === false ? classes.buttonStyle  : classes.selectedButtonStyle;
let selectLOD= lod === false ? classes.buttonStyle  : classes.selectedButtonStyle;
let selectSoreThroat= soreThroat === false ? classes.buttonStyle  : classes.selectedButtonStyle;
let selectWeak= weak === false ? classes.buttonStyle  : classes.selectedButtonStyle;
let selectAppetite= Appetite=== false ? classes.buttonStyle  : classes.selectedButtonStyle;
let selectModerate= Moderate === false ? classes.buttonStyle  : classes.selectedButtonStyle;
let selectFB= FB === false ? classes.buttonStyle  : classes.selectedButtonStyle;
let selectDifficulty= Difficulty === false ? classes.buttonStyle  : classes.selectedButtonStyle;
let selectDrowsiness= Drowsiness === false ? classes.buttonStyle  : classes.selectedButtonStyle;
let selectPersistant= Persistant=== false ? classes.buttonStyle  : classes.selectedButtonStyle;
let selectSevere = Severe ===false? classes.buttonStyle  : classes.selectedButtonStyle;
let selectDiabetes= Diabetes=== false ? classes.buttonStyle  : classes.selectedButtonStyle;
let selectBP= BP === false ? classes.buttonStyle  : classes.selectedButtonStyle;
let selectHD= HD === false ? classes.buttonStyle  : classes.selectedButtonStyle;
let selectKD= KD === false ? classes.buttonStyle  : classes.selectedButtonStyle;
let selectLD= LD === false ? classes.buttonStyle  : classes.selectedButtonStyle;
let selectStroke= Stroke=== false ? classes.buttonStyle  : classes.selectedButtonStyle;
let selectImmunity= Immunity === false ? classes.buttonStyle  : classes.selectedButtonStyle;

















//this is the main function that displays the entire coronavirus risk scan web page
const showData=(querysList)=>{
  
 return(
    querysList.map((data) => {
    var langObject;
    var status=navigator.onLine;
    console.log(status);
    if (lang ==="English") {
      langObject=data.English;
    }
    else if(lang==="Telugu"){
      langObject=data.Telugu;
    }
    else if(lang==="Hindi"){
      langObject=data.Hindi;
    }
    else if(lang==="Tamil"){
      langObject=data.Tamil;
    }
    else if(lang==="Bengali"){
    langObject=data.Bengali;
    }
    return(
      <div>
     <div className={classes.root}>
       <div>
       <AppBar position="static" className={classes.appBarStyle}>
         <Toolbar>
             <img src={process.env.PUBLIC_URL + "/apollo_log.png"} width="60" height="60" style={{paddingLeft:"370px"}}  alt="apollo log" />
           <Typography variant="h6" className={classes.title}>
           {langObject.title}
           </Typography>
         </Toolbar>
       </AppBar>
       </div>
        <div>
        <div className={classes.bodyStyle}>
       <Button variant="contained" className={classes.inputStyle} color="primary">Hello, Please tell us which language you'd like to take this test in:</Button>
        </div>
       
       { isClicked===false ? 
       <div>
       <ButtonBase variant="contained" value="English" className={classes.firstButton} onClick={(event)=>setStates(event.target.value)}>English</ButtonBase>
       <ButtonBase variant="contained" value="తెలుగు" className= {classes.buttonStyle} onClick={(event)=>setStates(event.target.value)}>తెలుగు</ButtonBase>
       <ButtonBase variant="contained" value="हिंदी" className={classes.buttonStyle} onClick={(event)=>setStates(event.target.value)}>हिंदी</ButtonBase>
       <ButtonBase variant="contained"  value="தமிழ்" className={classes.buttonStyle} onClick={(event)=>setStates(event.target.value)}>தமிழ்</ButtonBase>
       <ButtonBase variant="contained" value="বাংলা" className={classes.buttonStyle} onClick={(event)=>setStates(event.target.value)}>বাংলা</ButtonBase>
       </div>
       : 
       <div>
       <div>  
       <Button variant="contained" className={classes.buttonStyleright}  value={language}>{language}</Button>
         </div>
         <div>
         <Button variant="contained" className={classes.inputStyle} color="primary">
         {langObject.Appintro}
         
           </Button>
          </div>
          <div>
           <Button variant="contained" className={classes.inputStyle} color="primary">
           {langObject.AgeQuery}
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
             placeholder={langObject.Queryplaceholder}
             onChange={handleChange}
             InputLabelProps={{
             shrink: true,
           }}
          />
             </form>
     
             </div>
             <div>
          <Button variant="default" onClick={()=>setDone(true)} className={classes.doneStyle}> {langObject.DoneButton}</Button>
             </div>
             </Fragment>
 
             : 
             <div>
               <div>
         <Button variant="contained" className={classes.buttonStyleright}  value={age}>{age}</Button>
         </div>
         <div>
         <div >
         <Button variant="contained" className={classes.inputStyle} color="primary">{langObject.GenderQuery}</Button>
         </div>
         </div>
         {genderClick===false ?
         <div>
         <div>
         <ButtonBase variant="contained" className={classes.firstButton} value={langObject.genderOptions.Male} onClick={handleGender}>{langObject.genderOptions.Male}</ButtonBase>
         <ButtonBase variant="contained" className={classes.buttonStyle} value={langObject.genderOptions.Female} onClick={handleGender}>{langObject.genderOptions.Female}</ButtonBase>
         <ButtonBase variant="contained" className={classes.buttonStyle} value={langObject.genderOptions.Others} onClick={handleGender}>{langObject.genderOptions.Others}</ButtonBase>
           </div>
           </div>
         :
            <div>
              <Button variant="contained" className={classes.buttonStyleright} value={getGender}>{getGender}</Button>
             <div>
         <Button variant="contained" className={classes.inputStyle} color="primary">{langObject.temperatureQuery}</Button>
             </div>
             {isTempClick===false ?
             <div>
             <ButtonBase variant="contained" className={classes.firstButton} value={langObject.temperatureOptions.Normal} onClick={handleTemp}>{langObject.temperatureOptions.Normal}</ButtonBase>
         <ButtonBase variant="contained" className={classes.buttonStyle} value={langObject.temperatureOptions.Fever} onClick={handleTemp}>{langObject.temperatureOptions.Fever}</ButtonBase>
         <ButtonBase variant="contained" className={classes.buttonStyle} value={langObject.temperatureOptions.HighFever} onClick={handleTemp}>{langObject.temperatureOptions.HighFever}</ButtonBase>
         <div>
         <ButtonBase variant="contained" className={classes.firstButton}  value={langObject.temperatureOptions.DoNotKnow} onClick={handleTemp}>{langObject.temperatureOptions.DoNotKnow}</ButtonBase>
             </div>
             </div>
           :
           <div>
             <Button variant="contained" className={classes.buttonStyleright} value={getTemp}>{getTemp}</Button>
             <div>
             <Button variant="contained" className={classes.inputStyle} color="primary">{langObject.SymptomsQuery}</Button>
            
             </div>
             { (haveSymptoms || isConfirmSymptoms)  ===false ?
             <div>
             <ButtonBase variant="contained" className={selectDryCough} style={{marginLeft:"400px"}}  value={langObject.SymptomsOptions.DryCough} onClick={selectSymptoms}>{langObject.SymptomsOptions.DryCough}</ButtonBase>
             <ButtonBase variant="contained" className={selectLOD} value={langObject.SymptomsOptions.lossordim} onClick={selectSymptoms}>{langObject.SymptomsOptions.lossordim}</ButtonBase>
           <ButtonBase variant="contained" className={selectSoreThroat} value={langObject.SymptomsOptions.SoreThroat} onClick={selectSymptoms}>{langObject.SymptomsOptions.SoreThroat}</ButtonBase>
          <ButtonBase variant="contained" className={selectWeak} value={langObject.SymptomsOptions.Weakness} onClick={selectSymptoms}>{langObject.SymptomsOptions.Weakness}</ButtonBase>
          <div>
          <ButtonBase variant="contained" className={selectAppetite} style={{marginLeft:"400px"}} value={langObject.SymptomsOptions.ChangeInAppetite} onClick={selectSymptoms}>{langObject.SymptomsOptions.ChangeInAppetite}</ButtonBase>
             { getConfirmedSymptoms.length !==0 ?
               <ButtonBase variant="default" onClick={confirmSymptoms} className={classes.optionalButton} value={langObject.SymptomsOptions.Confirm}>{langObject.SymptomsOptions.Confirm}</ButtonBase>
             :
             <ButtonBase variant="default" onClick={handleSymptoms}  className={classes.optionalButton} value={langObject.SymptomsOptions.NoneOfThese}>{langObject.SymptomsOptions.NoneOfThese}</ButtonBase>
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
             <Button variant="contained" className={classes.inputStyle} color="primary">{langObject.MoreSymptomsQuery}</Button>
             </div>
             { (haveMoreSymptoms || isConfirmMoreSymptoms) ===false ?
             <div>
             <ButtonBase variant="contained" className={selectModerate} style={{marginLeft:"400px"}} value={langObject.MoreSymptomsOptions.Moderate} onClick={selectMoreSymptoms}>{langObject.MoreSymptomsOptions.Moderate}</ButtonBase>
             <ButtonBase variant="contained" className={selectFB} value={langObject.MoreSymptomsOptions.FeelingBreathless} onClick={selectMoreSymptoms}>{langObject.MoreSymptomsOptions.FeelingBreathless}</ButtonBase>
           <ButtonBase variant="contained" className={selectDifficulty} value={langObject.MoreSymptomsOptions.Difficulty} onClick={selectMoreSymptoms}>{langObject.MoreSymptomsOptions.Difficulty}</ButtonBase>
           <div>
          <ButtonBase variant="contained" className={selectDrowsiness} style={{marginLeft:"400px"}} value={langObject.MoreSymptomsOptions.Drowsiness} onClick={selectMoreSymptoms}>{langObject.MoreSymptomsOptions.Drowsiness}</ButtonBase>
         
          <ButtonBase variant="contained" className={selectPersistant} value={langObject.MoreSymptomsOptions.Persistant} onClick={selectMoreSymptoms}>{langObject.MoreSymptomsOptions.Persistant}</ButtonBase>
          <ButtonBase variant="contained" className={selectSevere} value={langObject.MoreSymptomsOptions.SevereWeakness} onClick={selectMoreSymptoms}>{langObject.MoreSymptomsOptions.SevereWeakness}</ButtonBase>
          </div><div>
            {getConfirmedMoreSymptoms.length ===0 ?
          <ButtonBase variant="default" onClick={handleMoreSymptoms} className={classes.optionalButton2} value={langObject.MoreSymptomsOptions.NoneOfThese}>{langObject.MoreSymptomsOptions.NoneOfThese}</ButtonBase>
          :
          <ButtonBase variant="default" onClick={confirmMoreSymptoms} className={classes.optionalButton2} value={langObject.MoreSymptomsOptions.Confirm}>{langObject.MoreSymptomsOptions.Confirm}</ButtonBase>
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
             <Button variant="contained" className={classes.inputStyle} color="primary">{langObject.SmokeQuery}</Button>
             </div>
             {doSmoke===false ?
             <div>
             <ButtonBase variant="contained" className={classes.buttonStyle} style={{marginLeft:"400px"}} value={langObject.SmokeOptions.CurrentSmoker} onClick={handleSmoke}>{langObject.SmokeOptions.CurrentSmoker}</ButtonBase>
             <ButtonBase variant="contained" className={classes.buttonStyle} value={langObject.SmokeOptions.PreviousSmoker} onClick={handleSmoke}>{langObject.SmokeOptions.PreviousSmoker}</ButtonBase>
             <ButtonBase variant="contained" className={classes.buttonStyle} value={langObject.SmokeOptions.NeverSmoke} onClick={handleSmoke}>{langObject.SmokeOptions.NeverSmoke}</ButtonBase>
             </div>
             :
             <div>
               <Button variant="contained" className={classes.buttonStyleright} value={getSmokeInfo}>{getSmokeInfo}</Button>
             <div>
             <Button variant="contained" className={classes.inputStyle} color="primary">{langObject.TravelQuery}</Button>
             </div>
             {travelOptionClick===false ?
             <div>
             <ButtonBase variant="contained" className={classes.buttonStyle} style={{marginLeft:"400px"}} value={langObject.TravelOptions.NoTravelHistory} onClick={handleTravel}>{langObject.TravelOptions.NoTravelHistory}</ButtonBase>
             <ButtonBase variant="contained" className={classes.buttonStyle}  value={langObject.TravelOptions.NoContact} onClick={handleTravel}>{langObject.TravelOptions.NoContact}</ButtonBase>
             <div>
             <ButtonBase variant="contained" className={classes.buttonStyle} style={{marginLeft:"400px"}} value={langObject.TravelOptions.HistoryOfTravel} onClick={handleTravel}>{langObject.TravelOptions.HistoryOfTravel}</ButtonBase>
             </div>
             <div>
             <ButtonBase variant="contained" className={classes.buttonStyle} style={{marginLeft:"400px"}} value={langObject.TravelOptions.CloseContact} onClick={handleTravel}>{langObject.TravelOptions.CloseContact}</ButtonBase>
             </div>
            </div>
             :
             <div>
               <Button variant="contained" className={classes.buttonStyleright} value={getTravelDetails}>{getTravelDetails}</Button>
             <div>
             <Button variant="contained" className={classes.inputStyle} color="primary">{langObject.DiseaseQuery}</Button>
             </div>
             { (DiseaseOptionClick || isDiseaseConfirm) === false  ?
             <div>
             <ButtonBase variant="contained" className={selectDiabetes}  style={{marginLeft:"400px"}} value={langObject.DiseaseOptions.Diabetes} onClick={selectDiseases}>{langObject.DiseaseOptions.Diabetes}</ButtonBase>
             <ButtonBase variant="contained" className={selectBP} value={langObject.DiseaseOptions.HBP} onClick={selectDiseases}>{langObject.DiseaseOptions.HBP}</ButtonBase>
             <ButtonBase variant="contained" className={selectHD} value={langObject.DiseaseOptions.HeartDisease} onClick={selectDiseases}>{langObject.DiseaseOptions.HeartDisease}</ButtonBase>
             <ButtonBase variant="contained" className={selectKD} value={langObject.DiseaseOptions.KidneyDisease} onClick={selectDiseases}>{langObject.DiseaseOptions.KidneyDisease}</ButtonBase>
             <div>
             <ButtonBase variant="contained" className={selectLD} style={{marginLeft:"400px"}} value={langObject.DiseaseOptions.LungDisease} onClick={selectDiseases}>{langObject.DiseaseOptions.LungDisease}</ButtonBase>
             <ButtonBase variant="contained" className={selectStroke} value={langObject.DiseaseOptions.Stroke} onClick={selectDiseases}>{langObject.DiseaseOptions.Stroke}</ButtonBase>
             <ButtonBase variant="contained" className={selectImmunity} value={langObject.DiseaseOptions.ReducedImmunity} onClick={selectDiseases}>{langObject.DiseaseOptions.ReducedImmunity}</ButtonBase>
             </div>
             <div>
               {getConfirmedDisease.length ===0 ?
             <ButtonBase variant="default" onClick={(event)=>{
               handleDisease(event)
               handleRouting() 
              }} className={classes.optionalButton2}   value={langObject.DiseaseOptions.NoneOfThese}>{langObject.DiseaseOptions.NoneOfThese}</ButtonBase>
            :
             <ButtonBase variant="default" onClick={confirmDisease} className={classes.optionalButton2}  value={langObject.DiseaseOptions.Confirm}>{langObject.DiseaseOptions.Confirm}</ButtonBase>
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
               <Button variant="contained" className={classes.inputStyle} color="primary">{langObject.SymptomsCheck}</Button>
                 </div>
             <div style={{marginBottom:"50px"}}>
             <ButtonBase variant="contained" className={classes.buttonStyle} style={{marginLeft:"400px"}} onClick={(event)=>{
               handleLastConfirm(event)
               handlelastRouting()
             }} value={langObject.SymptomsCheckOptions.Improved}>{langObject.SymptomsCheckOptions.Improved}</ButtonBase>
             <ButtonBase variant="contained" className={classes.buttonStyle} onClick={(event)=>{
               handleLastConfirm(event)
               handlelastRouting()
               }} value={langObject.SymptomsCheckOptions.NoChange}>{langObject.SymptomsCheckOptions.NoChange}</ButtonBase>
             <ButtonBase variant="contained" className={classes.buttonStyle} onClick={(event)=>{
               handleLastConfirm(event)
               handlelastRouting()}}  value={langObject.SymptomsCheckOptions.Worsened}>{langObject.SymptomsCheckOptions.Worsened}</ButtonBase>
             <ButtonBase variant="contained" className={classes.buttonStyle} onClick={(event)=>{
               handleLastConfirm(event)
               handlelastRouting()}}  value={langObject.SymptomsCheckOptions.WorsenedMore}>{langObject.SymptomsCheckOptions.WorsenedMore}</ButtonBase>
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
   </div> 
 
    );
  })
 )
}


return(
<div>
{ showData(querysList)} 
</div>
);   


}
export default CovidInput;