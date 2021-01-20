import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grow from '@material-ui/core/Grow';




const useStyles = makeStyles({
    container:{
        backgroundImage: `url(${"https://i.imgur.com/gworN75.png"})`,
        backgroundSize: 'cover',
    },
    textContainer:{
        width: "30%",
        marginLeft: '10%',
        paddingTop:'17%'
    },
    titleContainer:{
        width: "100%",
    },
    title:{
        width: "100%",      
    },
    text:{
        width: "100%"
    },
    photoContainer:{
       // float:"right", 
       marginTop:'-15%'
    },
    photo:{
        marginLeft: '30%',
        width: '35%'
    },
    scroll:{
        width: '8%',
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
            <div className={classes.textContainer}>
                <Grow in={display}
                style={{ transformOrigin: '0 0 0' }}
                {...(display ? { timeout: 1000 } : {})}>
                        <Container 
                        onMouseEnter={toggleHover} 
                        onMouseLeave={toggleHover} 
                        className={classes.titleContainer}>
                            {hover
                                ?
                            <img className={classes.title} src="https://i.imgur.com/BA9MZN4.png" />
                                :
                            <img className={classes.title} src="https://i.imgur.com/u6Fvt5p.png" />}
                        </Container>
                </Grow>

                <Grow in={display}
                style={{ transformOrigin: '0 0 0' }}
                {...(display ? { timeout: 2000 } : {})}>
                    <div className={classes.text}>
                        Hello World! I am a Full Stack Software Engineer based in Washington, DC.
                    </div>
                </Grow>
            </div>
        
            <div className={classes.photoContainer}>
                <Grow in={display}
                style={{ transformOrigin: '0 0 0' }}
                {...(display ? { timeout: 2000 } : {})}>
                    <img className={classes.photo} 
                    src="https://i.imgur.com/EVONk0u.png"/> 
                </Grow>
            {/* https://i.imgur.com/b5xHqBO.png */}
            </div>
                   
            <Grow in={display}
            style={{ transformOrigin: '0 0 0' }}
            {...(display ? { timeout: 2000 } : {})}>
                <img className={classes.scroll}
                src="https://airxus.com/wp-content/uploads/2019/07/scroll-down-arrow.gif"/>
            </Grow>   
        </Container>

    </React.Fragment>
    )
}

export default Welcome