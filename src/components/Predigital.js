import React, {useState} from 'react'
import Paper from '@material-ui/core/Paper'
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

  const Predigital = () =>{
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
                            alt="pre digital" 
                            src="https://i.imgur.com/k26nQo9.png"/>
                            {/* "https://i.imgur.com/cBy9Pa2.png" */}
                        </Paper>
                    :
                        <Paper className={classes.paper}>
                            <div onClick={toggleDisplay}>
                                <List>
                                    <ListItem><i><b>Overview: </b> A portfolio of scanned family photos, dating back to the late 1800's.</i></ListItem>
                                    <ListItem>
                                        <i>
                                        <b>Built With:</b>Javascript, HTML, and CSS
                                        </i>
                                    </ListItem>
                
                                    <ListItem>
                                        <a target='_blank' href="https://giuliacajati.github.io/Predigital/">Click here to check it out!</a>
                                    </ListItem>
                                    <ListItem>
                                        <a target='_blank' href="https://github.com/GiuliaCajati/Predigital">GitHub</a>
                                    </ListItem>
                                </List>
                            </div>
                        </Paper>
                    }
        </div>
    )
}

export default Predigital

