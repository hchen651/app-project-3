import React, { useState } from "react";

// Components
import ButtonL from "../../components/ButtonL";

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    btn: {
        margin: theme.spacing(3),
        width: 300,
    },
    card: {
        margin: theme.spacing(3),
        display: 'flex',
    },
    img: {
        width: 400,
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="sm">
            <div className={classes.paper}>
                <Typography component="h3" variant="h5" gutterBottom>
                    <Box lineHeight={1.5} align="center">
                    Imprint is a dynamic business card collector for storing and organizing contact information.
                    </Box>
                </Typography>
                <Card className={classes.card}>
                    <CardMedia 
                    component="video"
                    className={classes.img}
                    src="https://media.giphy.com/media/ar16pMPuR1BO8/giphy.mp4"
                    />
                </Card>
                <Typography component="h5" variant="body1">
                    <Box align="center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                    </Box>
                </Typography>
                <ButtonL
                className={classes.btn}
                variant="contained"
                color="secondary"
                href="/signup">
                    SIGN UP
                </ButtonL>
            </div>
        </Container>
    )
};