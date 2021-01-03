import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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

const ProjectCardOne = () => {
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
                            alt="bon appetit" 
                            src="https://i.imgur.com/297AXe1.png"/>
                            {/* "https://i.imgur.com/vrGfOmV.png" */}
                        </Paper>
                    :
                        <Paper className={classes.paper}>
                            <div onClick={toggleDisplay}>
                                Project info
                                Languages 
                                link to video
                            </div>
                            {/* "https://i.imgur.com/vrGfOmV.png" */}
                        </Paper>
                    }
            </Grid>
        </div>
    )
}

export default ProjectCardOne