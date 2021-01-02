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
    fontSize: 80,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  image: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ProjectsPage() {
  const classes = useStyles();
  const [project, setProject] = useState("")
  //conditionally render project based on selection 
  //switch statement for three projects 
  //each have a different page 


  function FormRow() {
    return (
        <React.Fragment>
          <ProjectCard/>
          <ProjectCardOne/>
          <ProjectCardTwo/>
            {/* <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <img className={classes.image} 
                    alt="hotel toolkit" 
                    src="https://i.imgur.com/pEMjPFq.png"/>
                    "https://i.imgur.com/cBy9Pa2.png"
                </Paper>
            </Grid> */}

            {/* <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <img className={classes.image} 
                    alt="bon appetit" src="https://i.imgur.com/297AXe1.png"/>
                    "https://i.imgur.com/vrGfOmV.png"
                </Paper>
            </Grid> */}

            {/* <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <img className={classes.image} 
                    alt="fetch a date" 
                    src="https://i.imgur.com/1HVBgZc.jpg"/>
                    "https://i.imgur.com/LlYIgAe.jpg"
                </Paper>
            </Grid> */}

        </React.Fragment>
    );
    }

  return (
    <div className={classes.root}>
        <b>PROJECTS</b>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
      {/* {true?<Paper className={classes.project}>SELECTED PROJECT</Paper>:null} */}
    </div>

  );
}