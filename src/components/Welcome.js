import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

//shapes moving aroundthe page 
//onpage load 
const useStyles = makeStyles({
    container:{
        backgroundColor: 'black', 
        height: '200vh',
        width: '100%',
    },
    titleContainer:{
        fontSize: 80,
        color: 'white',
    },
    text:{
        fontSize: 30,
        width: '25%',
        marginLeft: '60%',
        position: 'absolute',
        color: 'white',
    },
    image:{
        
    }
  });

const Welcome = () => {
    const classes = useStyles();
    const [hover, setHover] = useState(true)

    const toggleHover = () => {
        setHover(!hover)
    }

    return (
    <React.Fragment>
        <Container maxWidth="xl" className={classes.container}>
                <Container onMouseEnter={toggleHover} onMouseLeave={toggleHover} className={classes.titleContainer}>
                {hover?<b>WELCOME TO GIULIA's PORTFOLIO</b>:<b>Ready to explore!</b>}
                </Container>

                <img className={classes.image} src="https://i.imgur.com/sKK0feZ.png"/>  

                <div className={classes.text}>
                <h2>Hello World!</h2>
                     I am a Full Stack Software Engineer based in Washington, DC.
                </div>
        </Container>
        {/* <Container className={classes.image}>       
            </Container> */}
    </React.Fragment>
    )
}

export default Welcome