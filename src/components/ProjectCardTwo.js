import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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

const ProjectCardTwo = () => {
    const classes = useStyles();
    const [display, setDisplay] = useState({info: false})

    const toggleDisplay = () => {
        setDisplay({info: !display.info})
    }

    return(
        <div>
            <Grid item xs={4}>
            {!display.info
                ?
                    <Paper className={classes.paper}>
                        <img className={classes.image} 
                        onClick={toggleDisplay}
                        alt="fetch a date" 
                        src="https://i.imgur.com/1HVBgZc.jpg"/>
                        {/* "https://i.imgur.com/LlYIgAe.jpg" */}
                    </Paper>
                :
                    <Paper>
                        <div onClick={toggleDisplay}>
                                Project info
                                Languages 
                                link to video
                        </div>
                    </Paper>
            }
            </Grid>
        </div>
    )
}

export default ProjectCardTwo