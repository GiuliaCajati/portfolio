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
    appinfo:{
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    }
  }));

const FetchAdate = () => {
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
                        alt="fetch a date" 
                        src="https://i.imgur.com/1HVBgZc.jpg"/>
                        {/* "https://i.imgur.com/LlYIgAe.jpg" */}
                    </Paper>
                :
                    <Paper className={classes.paper}>
                        <div onClick={toggleDisplay}>
                            
                            <List>
                                <ListItem>
                                    <i><b>Overview: </b> Amusing game, users interact with characters, with the objective of increasing the “relationship score”. </i>
                                </ListItem>
                                <ListItem>
                                    <i>
                                        <b>Built With:</b>React.js, and Ruby on Rails API
                                    </i>
                                </ListItem>
                                <ListItem>
                                    <a target='_blank' href="https://youtu.be/0c53Z6IDOkQ">Demo Video</a>
                                </ListItem>
                                <ListItem>
                                    <a target='_blank' href="https://navpoint1.github.io/FetchADate/">Click here to check it out!</a>
                                </ListItem>
                                <ListItem>
                                    <a target='_blank' href="https://github.com/GiuliaCajati/fetch-a-date-back-end">GitHub</a>
                                </ListItem>
                            </List>
                        </div>
                    </Paper>
            }
        </div>
    )
}

export default FetchAdate