import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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
                                <List>
                                    <ListItem><b>Overview</b></ListItem>
                                    <ListItem><b>Languages Used:</b></ListItem>
                                    <ListItem><b>Link:</b></ListItem>
                                    <ListItem><b>GitHub:</b></ListItem>
                                    <ListItem><b>Demo:</b></ListItem>
                                </List>
                            </div>
                            {/* "https://i.imgur.com/vrGfOmV.png" */}
                        </Paper>
                    }
        
        </div>
    )
}

export default ProjectCardOne