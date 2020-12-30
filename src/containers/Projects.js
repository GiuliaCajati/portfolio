// import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';

// const useStyles = makeStyles({
//     container:{
//         backgroundColor: '#cfe8fc', 
//         height: '80vh',
//     },
//   });

// const Projects = () => {
//     const classes = useStyles();


//     return (
//         <React.Fragment>
//             <CssBaseline />
//                 <Container maxWidth="xl" className={classes.container}>
//                 <Container className={classes.welcome}>
//                 Projects

//                 </Container>  
//             </Container>
//         </React.Fragment>

//     )

// }

// export default Projects
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: '2%'
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
          <Paper className={classes.paper}><img className={classes.image} alt="hotel toolkit" src="https://i.imgur.com/cBy9Pa2.png"/></Paper>
          {/* login "https://i.imgur.com/pEMjPFq.png" */}
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><img className={classes.image} alt="bon appetit" src="https://i.imgur.com/vrGfOmV.png"/></Paper>
          {/* "https://i.imgur.com/297AXe1.png" */}
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>items</Paper>
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
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}