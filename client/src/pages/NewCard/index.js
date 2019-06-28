import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router';


// React Components
import ButtonS from "../../components/ButtonS";

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import axios from 'axios';


// custom styles
const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
    },
    textField: {
        // marginTop: theme.spacing(1),
        // marginBottom: theme.spacing(1),
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: theme.spacing(4),
    }
}));

// dropdown list - cardType
const cardTypes = [
    { value: 'Personal', label: 'Personal'},
    { value: 'Company', label: 'Company'},
    { value: 'Small business', label: 'Small Business'},
];

// dropdown list - address state abbrev.
const states = [
    { value: 'AL', label: 'AL' }, { value: 'AK', label: 'AK' }, { value: 'AZ', label: 'AZ' },
    { value: 'AR', label: 'AR' }, { value: 'CA', label: 'CA' }, { value: 'CO', label: 'CO' },
    { value: 'CT', label: 'CT' }, { value: 'DE', label: 'DE' }, { value: 'FL', label: 'FL' },
    { value: 'GA', label: 'GA' }, { value: 'HI', label: 'HI' }, { value: 'ID', label: 'ID' },
    { value: 'IL', label: 'IL' }, { value: 'IN', label: 'IN' }, { value: 'IA', label: 'IA' },
    { value: 'KS', label: 'KS' }, { value: 'KY', label: 'KY' }, { value: 'LA', label: 'LA' },
    { value: 'ME', label: 'ME' }, { value: 'MD', label: 'MD' }, { value: 'MA', label: 'MA' },
    { value: 'MI', label: 'MI' }, { value: 'MN', label: 'MN' }, { value: 'MS', label: 'MS' },
    { value: 'MO', label: 'MO' }, { value: 'MT', label: 'MT' }, { value: 'NE', label: 'NE' },
    { value: 'NV', label: 'NV' }, { value: 'NH', label: 'NH' }, { value: 'NJ', label: 'NJ' },
    { value: 'NM', label: 'NM' }, { value: 'NY', label: 'NY' }, { value: 'NC', label: 'NC' }, 
    { value: 'ND', label: 'ND' }, { value: 'OH', label: 'OH' }, { value: 'OK', label: 'OK' }, 
    { value: 'OR', label: 'OR' }, { value: 'PA', label: 'PA' }, { value: 'RI', label: 'RI' }, 
    { value: 'SC', label: 'SC' }, { value: 'SD', label: 'SD' }, { value: 'TN', label: 'TN' }, 
    { value: 'TX', label: 'TX' }, { value: 'UT', label: 'UT' }, { value: 'VT', label: 'VT' }, 
    { value: 'VA', label: 'VA' }, { value: 'WA', label: 'WA' }, { value: 'WV', label: 'WV' }, 
    { value: 'WI', label: 'WI' }, { value: 'WY', label: 'WY' },
];

// card detail data (need mongoDB)


// display card details
export default function Detail() {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        password: "password",
        email: '',
        firstName: '',
        lastName: '',
        cardType: 'Personal',
        companyName: '',
        phone: '',
        website: '',
        street: '',
        city: '',
        state: 'NY',
        zipcode: '',
    });

    const[reRender, setReRender] = useState(false);

    const handleInputChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const submitDetail = () => {
        axios.post(`/api/cards`, values)
        .then(res => {
            setReRender(true);
        })
        .catch(err =>
            console.log("GET error /api/cards")
        ); 
        console.log(values);
        console.log("clicked");
    }
    if(reRender){
        return(
            <Redirect to={{
                pathname: '/collection'
            }}/>
        )
    }

    return (
        <Container className={classes.paper} component="main" maxWidth="xl">
            <Typography component="h1" variant="h5" align="center" gutterBottom>
            Card Detail for [Name]
            </Typography>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    {/* <BusinessCardL> */}
                    <form 
                        className={classes.form} 
                        // onSubmit={handleSubmit}
                        noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    select
                                    id="cardType"
                                    fullWidth
                                    className={classes.textField}
                                    value={values.cardType}
                                    onChange={handleInputChange('cardType')}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu,
                                        },
                                    }}
                                    margin="dense"
                                    InputLabelProps={{ shrink: true }}
                                    
                                    >
                                    {cardTypes.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="firstName"
                                    placeholder="First Name*"
                                    // className={classes.textField}
                                    value={values.firstName}
                                    onChange={handleInputChange('firstName')}
                                    margin="dense"
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                    
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="lastName"
                                    placeholder="Last Name*"
                                    // className={classes.textField}
                                    value={values.lastName}
                                    onChange={handleInputChange('lastName')}
                                    margin="dense"
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                    
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="companyName"
                                    placeholder="companyName"
                                    fullWidth
                                    className={classes.textField}
                                    value={values.companyName}
                                    onChange={handleInputChange('companyName')}
                                    margin="dense"
                                    InputLabelProps={{ shrink: true }}
                                    
                                />
                                {/* <TextField
                                    id="titlePosition"
                                    placeholder="Title/Position"
                                    fullWidth
                                    className={classes.textField}
                                    value={values.titlePosition}
                                    onChange={handleInputChange('titlePosition')}
                                    margin="dense"
                                    InputLabelProps={{ shrink: true }}
                                    
                                /> */}
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="email"
                                    placeholder="Email*"
                                    fullWidth
                                    className={classes.textField}
                                    value={values.email}
                                    onChange={handleInputChange('email')}
                                    margin="dense"
                                    InputLabelProps={{ shrink: true }}
                                    
                                />
                                <TextField
                                    id="phone"
                                    placeholder="Phone"
                                    fullWidth
                                    className={classes.textField}
                                    value={values.phone}
                                    onChange={handleInputChange('phone')}
                                    margin="dense"
                                    InputLabelProps={{ shrink: true }}
                                    
                                />
                                <TextField
                                    id="website"
                                    placeholder="Website"
                                    fullWidth
                                    className={classes.textField}
                                    value={values.website}
                                    onChange={handleInputChange('website')}
                                    margin="dense"
                                    InputLabelProps={{ shrink: true }}
                                    
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    id="street"
                                    placeholder="Street"
                                    fullWidth
                                    className={classes.textField}
                                    value={values.street}
                                    onChange={handleInputChange('street')}
                                    margin="dense"
                                    InputLabelProps={{ shrink: true }}
                                    
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="city"
                                    placeholder="City"
                                    fullWidth
                                    className={classes.textField}
                                    value={values.city}
                                    onChange={handleInputChange('city')}
                                    margin="dense"
                                    InputLabelProps={{ shrink: true }}
                                    
                                />
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <TextField
                                    select
                                    id="state"
                                    fullWidth
                                    className={classes.textField}
                                    value={values.state}
                                    onChange={handleInputChange('state')}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu,
                                        },
                                    }}
                                    margin="dense"
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                    
                                    >
                                    {states.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <TextField
                                    id="zipcode"
                                    placeholder="Zip Code"
                                    className={classes.textField}
                                    value={values.zipcode}
                                    onChange={handleInputChange('zipcode')}
                                    margin="dense"
                                    InputLabelProps={{ shrink: true }}
                                    
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="notes"
                                    placeholder="Notes"
                                    fullWidth
                                    multiline
                                    rows="4"
                                    margin="dense"
                                    InputLabelProps={{ shrink: true }}
                                    
                                />
                            </Grid>
                        </Grid>
                    {/* </ BusinessCardL> */}
                    </form>
                    <Button
                    className={classes.btn}
                    variant="contained"
                    color="secondary"
                    onClick={() => {submitDetail()}}
                    >
                    submit
                    </Button>
                </Grid>

                <Grid item xs={12} sm={6}>
                    {/* preview component */}
                </Grid>
            </Grid>
        </Container>
    );
}