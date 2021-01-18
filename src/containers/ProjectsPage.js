import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProjectCard from '../components/ProjectCard.js'
import ProjectCardOne from '../components/ProjectCardOne.js'
import ProjectCardTwo from '../components/ProjectCardTwo.js'
import ProjectCardThree from '../components/ProjectCardThree.js'
import ProjectCardFour from '../components/ProjectCardFour.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: '2%',
    marginBottom: '2%',
  },
  title: {
    fontSize: '80%',
    marginTop:'2%',
    marginBottom: '2%',
  },
}));

export default function ProjectsPage() {
  const classes = useStyles();
  const [project, setProject] = useState("")

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
        <div className={classes.title}>PROJECTS</div>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>

  );
}