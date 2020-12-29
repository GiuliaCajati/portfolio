import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    container:{
        backgroundColor: 'black', 
        height: '100vh',
        width: '100%',
        color: 'white',
        fontSize: 80,
        marginTop:'-10'
    },
  
  });

const Welcome = () => {
    const classes = useStyles();


    return (
    <React.Fragment>
        <Container maxWidth="xl" className={classes.container}>
                <b>WELCOME TO GIULIA's PORTFOLIO</b> 
                <img src="https://i.imgur.com/sKK0feZ.png"/>  
        </Container>
        {/* <Container className={classes.image}>
                
            </Container> */}
    </React.Fragment>
    )
}

export default Welcome