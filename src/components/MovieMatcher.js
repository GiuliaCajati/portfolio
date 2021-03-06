import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import{ makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

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
}))

const MovieMatcher = () =>{
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
                            src="https://i.imgur.com/T7VoT0g.png"/>
                            {/* "https://i.imgur.com/cBy9Pa2.png" */}
                        </Paper>
                    :
                        <Paper className={classes.paper}>
                            <div onClick={toggleDisplay}>
                                <List>
                                    <ListItem><i><b>Overview: </b> Application where you can select your favorite films, and see the 10 people with lists most similiar to yours.</i></ListItem>
                                    <ListItem>
                                        <i>
                                        <b>Built With:</b>Ruby
                                        </i>
                                    </ListItem>
                                    <ListItem>
                                        <a target='_blank' href="https://youtu.be/U-QX_IPsScU">Demo Video</a>
                                    </ListItem>
                                    <ListItem>
                                        <a target='_blank' href="https://github.com/GiuliaCajati/movie-matcher">GitHub</a>
                                    </ListItem>
                                </List>
                            </div>
                        </Paper>
                    }
        </div>
    )
}

export default MovieMatcher