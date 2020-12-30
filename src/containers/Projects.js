import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


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
  }
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}><img className={classes.image} alt="hotel toolkit" src="https://i.imgur.com/pEMjPFq.png"/></Paper>
          {/* "https://i.imgur.com/cBy9Pa2.png" */}
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><img className={classes.image} alt="bon appetit" src="https://i.imgur.com/297AXe1.png"/></Paper>
          {/* "https://i.imgur.com/vrGfOmV.png" */}
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><img className={classes.image} alt="fetch a date" src="https://i.imgur.com/1HVBgZc.jpg"/></Paper>
          {/* "https://i.imgur.com/LlYIgAe.jpg" */}
        </Grid>
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
    </div>
  );
}