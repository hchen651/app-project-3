import React, { useState, Component } from 'react';

// Component
import BusinessCardS from '../../components/BusinessCardS';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


// custom styles
const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        alignItems: 'center',
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: theme.spacing(4),
    },
    textField: {

    },
    menu: {
        width: 300,
    },
}));

// filter options
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
    {
        value: 'by favorite',
        label: 'by favorite',
    },
];

// all cards data (need mongoDB)
function createData( id, name, title ) {
    return { id, name, title };
  }

const allCards = [
    createData( "1", "Name1", "company1" ),
    createData( "2", "Name2", "company2" ),
    createData( "3", "Name3", "company3" ),
    createData( "4", "Name4", "company4" ),
    createData( "5", "Name5", "company5" ),
];

// display all cards
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
                <Typography component="h1" variant="h5" align="center" gutterBottom>
                Collection
                </Typography>
                <form 
                className={classes.form} 
                noValidate>
                    <Grid container spacing={2} direction="row" justify="center">
                        <Grid item xs={9}>
                            <TextField
                                id="outlined-search"
                                label="Search"
                                type="search"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs>
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
                                fullWidth
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
                <Grid container spacing={2}>
                    {allCards.map(card => (
                        <Grid item key={card.id} xs={6} md={3}>
                            <BusinessCardS>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <Typography component="h5" variant="h5">
                                            {card.name}
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            {card.title}
                                        </Typography>
                                    </CardContent>
                                </div>
                                <CardMedia
                                    className={classes.cover}
                                    image=""
                                    title=""
                                />
                                {/* {card.name}
                                {card.title} */}
                            </BusinessCardS>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Container>
    )
}