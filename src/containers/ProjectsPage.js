import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HotelToolkit from '../components/HotelToolkit.js'
import BonAppetit from '../components/BonAppetit.js'
import FetchAdate from '../components/FetchAdate.js'
import Predigital from '../components/Predigital.js'
import MovieMatcher from '../components/MovieMatcher.js'
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:"#DEE8EA",

  },
  title: {
    marginBottom: '2%',
    paddingTop: '5%',
    width: "15%", 
  },
  projects:{
    padding:'1%'
  }
}));

export default function ProjectsPage(props) {
  const classes = useStyles();
  const [project, setProject] = useState("")
  const [display, setDisplay] = useState(false);
  // on scroll
  useEffect(() => {
    setDisplay(!display)
}, [])


  function FormRow() {
    return (
        <React.Fragment>
            <Grid item xs={4}>
              <HotelToolkit />
            </Grid>
            <Grid item xs={4}>
              <BonAppetit />
            </Grid>
            <Grid item xs={4}>
              <FetchAdate />
            </Grid>
            <Grid item xs={4}>
              <Predigital />
            </Grid>
            <Grid item xs={4}>
              <MovieMatcher />
            </Grid>
        </React.Fragment>
    );
    }

  return (
    <div className={classes.root} ref={props.projectsRef}>
      <Grow in={display}
        style={{ transformOrigin: '0 0 0' }}
        {...(display ? { timeout: 1000 } : {})}>
        <img className={classes.title} src="https://i.imgur.com/Pwy7aOm.png"/>
        </Grow>
      <Grid className={classes.projects}container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>

  );
}