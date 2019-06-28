import React, { useState } from "react";

// Component
import Navbar from '../../components/Navbar';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

// Declare State
// https://reactjs.org/docs/forms.html

// Handle Submit
const handleSubmit = e => {
    e.preventDefault();
};

export default function Contact() {
    const classes = useStyles();

    return (
        <React.Fragment>
        <Navbar />
        <Container component="main" maxWidth="sm">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5" gutterBottom>
                    Contact Us
                </Typography>
                    <form 
                    className={classes.form} 
                    onSubmit={handleSubmit} 
                    noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        multiline
                        rows="6"
                        id="message"
                        label="Message"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </Container>
        </React.Fragment>
    )
};