import React, { useState } from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(6),
        alignItems: 'center',
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    menu: {
        width: 300,
    },
}));

const filters = [
    {
        value: 'by date added',
        label: 'by date added',
    },
    {
        value: 'by alphabetical order',
        label: 'by alphabetical order',
    },
    {
        value: 'by category',
        label: 'by category',
    },
];

export default function Collection() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        filter: 'by date added',
    });
  
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
  
    return (
        <Container component="main" maxWidth="xl">
        <div className={classes.paper}>
            <Typography component="h1" variant="h5" align="center">
            Collection
            </Typography>
            <form 
            className={classes.form} 
            noValidate>
                <Grid container direction="row" justify="center">
                    <Grid item>
                        <TextField
                            id="outlined-search"
                            label="Search"
                            type="search"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="outlined-select-filter"
                            select
                            // label="Select"
                            className={classes.textField}
                            value={values.filter}
                            onChange={handleChange('filter')}
                            SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                            }}
                            margin="normal"
                            variant="outlined"
                        >
                            {filters.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
            </form>
        </div>
        </Container>
    )
}