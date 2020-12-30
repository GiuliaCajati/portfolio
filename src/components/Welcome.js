import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    container:{
        backgroundColor: 'black', 
        height: '200vh',
        width: '100%',
        color: 'white',
        fontSize: 80,
        marginTop:'-10'
    },
  
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
                <Container onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                {hover?<b>WELCOME TO GIULIA's PORTFOLIO</b>:<b>Ready to explore!</b>}
                </Container>
                <img src="https://i.imgur.com/sKK0feZ.png"/>  
        </Container>
        {/* <Container className={classes.image}>       
            </Container> */}
    </React.Fragment>
    )
}

export default Welcome