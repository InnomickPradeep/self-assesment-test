import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height:"675px",
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
    alignItems:"center",
  },
  inputStyle:{
      marginTop:"10px",
      borderRadius:"12px",
      fontWeight:"normal",
      textTransform:"none",
      cursor:"none",
  }
  
}));

function CovidInput() {
  const classes = useStyles();

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
      <Button variant="contained" className={classes.inputStyle} color="primary">Hello, Please tell us which language you'd like to take this test in:</Button>
      <Fab style={{backgroundColor:"white",color:"#30b085",marginLeft:"1250px",marginTop:"450px"}} aria-label="refresh">
        <RefreshIcon />
      </Fab>
      </div>
    </div>
    
  );
}
export default CovidInput;