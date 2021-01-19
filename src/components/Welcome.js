import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grow from '@material-ui/core/Grow';




const useStyles = makeStyles({
    container:{
        backgroundImage: `url(${"https://i.imgur.com/gworN75.png"})`,
        backgroundSize: 'cover'
    },
    textContainer:{
        marginRight: '35%',
        paddingTop:'10%',
    },
    titleContainer:{
        height: '5%',
        paddingTop: '10%',
    },
    title:{
        width: "40%",       
    },
    imageContainer:{
       // float:"right",
    },
    image:{
        marginLeft: '45%',
        width: '50%',
    },
    scroll:{
        paddingTop: '2%',
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
                    {hover?<img className={classes.title} src="https://i.imgur.com/BA9MZN4.png" />:<img className={classes.title} src="https://i.imgur.com/u6Fvt5p.png" />}
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
        
                    <div className={classes.imageContainer}>
                        <Grow in={display}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(display ? { timeout: 2000 } : {})}>
                            <img className={classes.image} src="https://i.imgur.com/OduKHHO.png"/>
                            
                        </Grow>
                    {/* https://i.imgur.com/b5xHqBO.png */}
                    </div>
                   

                    <Grow in={display}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(display ? { timeout: 2000 } : {})}>
                        <img className={classes.scroll}
                        src="https://airxus.com/wp-content/uploads/2019/07/scroll-down-arrow.gif"
                        />
                        

                    </Grow>
                    
            
                    
        </Container>

    </React.Fragment>
    )
}

export default Welcome