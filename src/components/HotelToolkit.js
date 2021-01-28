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

const HotelToolkit = () => {
    const classes = useStyles();
    const [display, setDisplay] = useState({info: false})

    const toggleDisplay = () =>{
        setDisplay({info: !display.info})
    }

    return(
        <div>
                {!display.info
                    ?
                        <Paper className={classes.paper}>
                            <img className={classes.image} 
                            onClick={toggleDisplay}
                            alt="hotel toolkit" 
                            src="https://i.imgur.com/pEMjPFq.png"/>
                            {/* "https://i.imgur.com/cBy9Pa2.png" */}
                        </Paper>
                    :
                        <Paper className={classes.paper}>
                            <div onClick={toggleDisplay}>
                                <List>
                                    <ListItem><i><b>Overview: </b> A platform that facilitates communication among hotel managers, and team members.</i></ListItem>
                                    <ListItem>
                                        <i>
                                            <b>Built With:</b>React.js
                                        </i>
                                    </ListItem>
                                    <ListItem>
                                        <a target='_blank' href="https://www.youtube.com/watch?v=Gy8Cx-dpiUM">Demo Video</a>
                                    </ListItem>
                                    {/* <ListItem>
                                        <a target='_blank' href="https://giuliacajati.github.io/hotel-toolkit-front-end-/">Click here to check it out!</a>
                                    </ListItem> */}
                                    <ListItem>
                                        <a target='_blank' href="https://github.com/GiuliaCajati/hotel-toolkit-front-end-">GitHub</a>
                                    </ListItem>
                                </List>
                            </div>
                        </Paper>
                    }
        </div>
    )
}

export default HotelToolkit