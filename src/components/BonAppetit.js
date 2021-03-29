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
    },

  }));

const BonAppetit = () => {
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
                            <div onClick={toggleDisplay} 
                            className={classes.appinfo} >
                                
                                <List>
                                    <ListItem><i><b>Overview: </b> An interactive application, where users can share, view photos, and recipes.</i></ListItem>
                                    <ListItem>
                                        <i>
                                            <b>Built With:</b>React.js, and Ruby on Rails API
                                        </i>
                                    </ListItem>
                                    <ListItem>
                                        <a target='_blank' href="https://www.youtube.com/watch?v=IKpoDlZfW1A">Demo Video</a>
                                    </ListItem>
                                    {/* <ListItem>
                                        <a target='_blank' href="https://giuliacajati.github.io/bon-appetit-front-end/">Click here to check it out!</a>
                                    </ListItem> */}
                                    <ListItem>
                                        <a target='_blank' href="https://github.com/GiuliaCajati/bon-appetit-front-end">GitHub</a>
                                    </ListItem>
                                </List>
                            </div>
                            {/* "https://i.imgur.com/vrGfOmV.png" */}
                        </Paper>
                    }
        
        </div>
    )
}

export default BonAppetit