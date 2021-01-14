import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProjectCard from '../components/ProjectCard.js'
import ProjectCardOne from '../components/ProjectCardOne.js'
import ProjectCardTwo from '../components/ProjectCardTwo.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: '2%',
    marginBottom: '2%',
  },
  title: {
    fontSize: 80,
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
        </React.Fragment>
    );
    }

  return (
    <div className={classes.root}>
        <b className={classes.title}>PROJECTS</b>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>

  );
}