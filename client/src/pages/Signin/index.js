import React, { useState } from 'react';

// Components
import Navbar from "../../components/Navbar";

// Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(10),
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

export default function SignIn() {
    const classes = useStyles();

    // Declare State
    // https://reactjs.org/docs/forms.html
    // Hooks in a functional component: https://reactjs.org/docs/hooks-state.html
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const userData = {
            email: values.email,
            password: values.password
        };
        if (userData.email === "" || userData.password === "") {

            alert("Please enter a valid email and password.");
        }
        else {
            localStorage.setItem('imprintAuth', true);
            setTimeout(function () {
                window.location.assign('/collection/');
            }, 1500);
            
        }

    };

    return (
        <React.Fragment>
            <Navbar />
            <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5" gutterBottom>
                        Sign In
                </Typography>
                    <form
                        className={classes.form}
                        onSubmit={handleSubmit}
                        noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            value={values.email}
                            onChange={handleInputChange}
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            value={values.password}
                            onChange={handleInputChange}
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                    </Button>

                        <Grid container justify="center">
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </React.Fragment>
    );
}