import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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

const Hackathon = () => {
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
                        alt="hackathon" 
                        src="https://i.imgur.com/z2dFo1P.png"/>
                        {/* "https://i.imgur.com/LlYIgAe.jpg" */}
                    </Paper>
                :
                    <Paper className={classes.paper}>
                        <div onClick={toggleDisplay}>
                            
                            <List>
                                <ListItem>
                                    <i><b>Overview: </b> Minority-Programmers-ClimateHacks-2021 Prize Winner. Visual representation of the 2020-2021 NIFC fire data.</i>
                                </ListItem>
                                <ListItem>
                                    <i>
                                        <b>Built With:</b>React.js, OpenStreet Map API
                                    </i>
                                </ListItem>
                                <ListItem>
                                    <a target='_blank' href="https://www.youtube.com/watch?v=D3-8UbfIPmE">Demo Video</a>
                                </ListItem>
                                <ListItem>
                                    <a target='_blank' href="https://giuliacajati.github.io/Minority-Programmers-ClimateHacks-2021/">Click here to check it out!</a>
                                </ListItem>
                                <ListItem>
                                    <a target='_blank' href="https://github.com/GiuliaCajati/Minority-Programmers-ClimateHacks-2021">GitHub</a>
                                </ListItem>
                            </List>
                        </div>
                    </Paper>
            }
        </div>
    )
}

export default Hackathon
