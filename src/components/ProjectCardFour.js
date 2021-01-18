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

const ProjectCardFour = () =>{
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
                            onclick={toggleDisplay}
                            alt="movie matcher"
                            src="https://i.imgur.com/T7VoT0g.png"
                            />
                        </Paper>
                    :
                        <Paper className={classes.paper}>
                            <div onClick={toggleDisplay}>
                                <List>
                                    <ListItem><b>Overview</b></ListItem>
                                    <ListItem><b>Languages Used:</b></ListItem>
                                    <ListItem><b>Link: https://giuliacajati.github.io/Predigital/index.html</b></ListItem>
                                    <ListItem><b>GitHub:</b></ListItem>
                                    <ListItem><b>Demo:</b></ListItem>
                                </List>
                            </div>
                        </Paper>
             }
        </div>
    )


}

export default ProjectCardFour