import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grow from '@material-ui/core/Grow';




const useStyles = makeStyles({
    container:{
        backgroundImage: `url(${"https://i.imgur.com/gworN75.png"})`,
        backgroundSize: 'cover'
    },
    titleContainer:{
        height: '5%',
        paddingTop: '10%',
       // position: 'absolute'
    },
    title:{
        width: "40%",        
    },
    textImageContainer:{
        height: '10%',
        width: '70%',
        display: 'flex',
        color: 'black'
    },
    image:{
        width: '65%',
    },
    text:{
        color: 'black',
        marginTop: '15%',
        marginLeft: '5%',
        maxfontSize: 30,
        width:'30%'
    },
    scroll:{
        color: 'black',
        paddingBottom:'5%'
    },
  });

const Welcome = () => {
    const classes = useStyles();
    const [hover, setHover] = useState(true)
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setDisplay(!display)
    }, [])

    const toggleHover = () => {
        setHover(!hover)
    }


    return (
    <React.Fragment >
        <Container maxWidth="xl" className={classes.container}>

        <Grow in={display}
        style={{ transformOrigin: '0 0 0' }}
        {...(display ? { timeout: 1000 } : {})}>
                    <Container 
                    onMouseEnter={toggleHover} 
                    onMouseLeave={toggleHover} 
                    className={classes.titleContainer}>
                    {hover?<img className={classes.title} src="https://i.imgur.com/BA9MZN4.png" />:<img className={classes.title} src="https://i.imgur.com/u6Fvt5p.png" />}
                    </Container>
        </Grow>
        
                    <div className={classes.textImageContainer}>
                    <Grow in={display}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(display ? { timeout: 2000 } : {})}>
                        <img className={classes.image} src="https://i.imgur.com/wNRe3Yj.png"/>
                    </Grow>

                    <Grow in={display}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(display ? { timeout: 2000 } : {})}>
                        <div className={classes.text}>
                            Hello World! I am a Full Stack Software Engineer based in Washington, DC.
                        </div>
                    </Grow>
                    
                    </div>

                    <Grow in={display}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(display ? { timeout: 2000 } : {})}>
                        <div className={classes.scroll}>
                            Scroll
                        </div>
                    </Grow>
            
                    
        </Container>

    </React.Fragment>
    )
}

export default Welcome