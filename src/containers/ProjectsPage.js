import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProjectCard from '../components/ProjectCard.js'
import ProjectCardOne from '../components/ProjectCardOne.js'
import ProjectCardTwo from '../components/ProjectCardTwo.js'
import ProjectCardThree from '../components/ProjectCardThree.js'
import ProjectCardFour from '../components/ProjectCardFour.js'
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:"#DEE8EA",
  },
  title: {
    marginBottom: '2%',
    paddingTop: '2%',
    width: "15%", 
  },
  projects:{
    padding:'1%'
  }
}));

export default function ProjectsPage() {
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
              <ProjectCard/>
            </Grid>
            <Grid item xs={4}>
              <ProjectCardOne/>
            </Grid>
            <Grid item xs={4}>
              <ProjectCardTwo />
            </Grid>
            <Grid item xs={4}>
              <ProjectCardThree />
            </Grid>
            <Grid item xs={4}>
              <ProjectCardFour />
            </Grid>
        </React.Fragment>
    );
    }

  return (
    <div className={classes.root}>
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