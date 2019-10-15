import React from 'react';
import "./App.css";
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  colorPrimary: {
    backgroundColor: '#00000',
  }
});

export default function App() {
  const classes = useStyles();
  const message_arr = ["loading..."];

  return (
    
    <div className={classes.root}>
      <div className="header"></div>
      <div className ="loader-wrapper">
        <div className="loader-message">{message_arr}</div>
        <LinearProgress colorSecondary/>
      </div>
    </div>
  );
}