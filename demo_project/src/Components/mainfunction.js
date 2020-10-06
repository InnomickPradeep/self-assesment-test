import { ButtonBase } from '@material-ui/core';
import React, {useState} from 'react';





function MainFunction(){
    const [haveSymptoms,SymptomsClick]=useState(false);
     const [getSymptom,setSymptom]=useState("");
const [isConfirmSymptoms,setConfirm]=useState(false);
const [getConfirmedSymptoms,setConfirmedSymptoms]=useState([]);


const selectSymptoms=(event)=>{
    if(getConfirmedSymptoms.includes(event.target.value)===true){
     // let res1=getConfirmedSymptoms.replace(event.target.value,'');
       //setConfirmedSymptoms(res1);
       console.log("inside select symptoms functions pop");
       let removeSymptom=event.target.value;
       let res=getConfirmedSymptoms.filter(item =>item !==removeSymptom);
       setConfirmedSymptoms(res);
       console.log(getConfirmedSymptoms)
    }
    else{
     // let res=getConfirmedSymptoms.concat(event.target.value);
     //setConfirmedSymptoms(res);
     console.log("inside select symptoms functions push");
     let addSymptom=event.target.value;
     let res1=getConfirmedSymptoms.concat(addSymptom);
     setConfirmedSymptoms(getConfirmedSymptoms=>[...getConfirmedSymptoms, res1]);
     console.log(getConfirmedSymptoms)
    }
  }

  const confirmSymptoms=()=>{
    setConfirm(true);
  }
  const handleSymptoms=(event)=>{
    SymptomsClick(true);
    setSymptom(event.target.value);
  }
    return(
        <div>
            {isConfirmSymptoms && haveSymptoms === false ?
            <div>
                <ButtonBase onClick={selectSymptoms}>dry cough</ButtonBase>
                <ButtonBase onClick={selectSymptoms}>sore throat</ButtonBase>
                <ButtonBase onClick={selectSymptoms}>weakness</ButtonBase>
                <ButtonBase onClick={selectSymptoms}>loss or diminshed sense of smell</ButtonBase>
                {getConfirmedSymptoms.length===0 ?
                <ButtonBase onClick={handleSymptoms}>none of these</ButtonBase>
                :
                <ButtonBase onClick={confirmSymptoms}>Confirm</ButtonBase>
               }
            </div>
            : 
            <div>
                {haveSymptoms === true ?
                <ButtonBase value={getSymptom}>{getSymptom}</ButtonBase>
                :
                <ButtonBase value={getConfirmedSymptoms}>{getConfirmedSymptoms}</ButtonBase>
             }
            </div>
          }
        </div>
    )
}
export default MainFunction;