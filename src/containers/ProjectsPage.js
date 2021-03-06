import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';

import Hackathon from '../components/Hackathon.js'
import HotelToolkit from '../components/HotelToolkit.js'
import BonAppetit from '../components/BonAppetit.js'
import FetchAdate from '../components/FetchAdate.js'
import Predigital from '../components/Predigital.js'
import MovieMatcher from '../components/MovieMatcher.js'


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
    padding:'1%',
    paddingBottom:'10%'
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
            <Grid item lg={4}>
              <Hackathon />
            </Grid>
            <Grid item lg={4}>
              <HotelToolkit />
            </Grid>
            <Grid item lg={4}>
              <FetchAdate />
            </Grid>
            <Grid item lg={4}>
             <BonAppetit />
            </Grid>
            <Grid item lg={4}>
              <Predigital />
            </Grid>
            <Grid item lg={4}>
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