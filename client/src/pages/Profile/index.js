import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router';
import axios from 'axios';

// React Components
import Navbar2 from "../../components/Navbar2";

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import ArrowBack from '@material-ui/icons/ArrowBack';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Tooltip from '@material-ui/core/Tooltip';

// custom styles
const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(6),
    },
    paper: {
        borderRadius: 0,
        border: 0,
        padding: '20px',
        boxShadow: 0,
    },
    header: {
        marginBottom: theme.spacing(4),
    },
    textField: {
        margin: theme.spacing(1),
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    iconButton: {
        margin: theme.spacing(2),
    },
    input: {
        display: 'none',
    },
    iconHover: {
        '&:hover': {
            color: red[500],
        },
        fontSize: 30,
    },
}));

// dropdown list - cardType
const cardTypes = [
    { value: 'Personal', label: 'Personal' },
    { value: 'Company', label: 'Company' },
    { value: 'Small Business', label: 'Small Business' },
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

// display card details
export default function Detail() {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        cardType: 'Personal',
        firstName: '',
        lastName: '',
        companyName: '',
        titlePosition: '',
        email: '',
        phone: '',
        website: '',
        street: '',
        city: '',
        state: 'NY',
        zipcode: '',
        notes: '',
        _id: ''
    });

    // States - read only, go back buttons
    const [readOnlyState, setReadOnlyState] = useState(true);
    const [goBackClick, setGoBackClick] = useState(false);
    const [open, setOpen] = useState(false);
    const [buttonDisable, setButtonDisable] = useState(true);
    const [editChange, setEditChange] = useState(false);
    
    const handleInputChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    // Edit - switch between edit or read-only
    const handleEdit = () => {
        setReadOnlyState(!readOnlyState);
        setButtonDisable(!buttonDisable);

    }

    useEffect(() => {
        axios.get(`/api/users/${'5d16c8bec88f56279c49d003'}`)
        .then(res => {
            setValues(res.data);
        })
        .catch(err =>
            console.log("GET error /api/cards/:id")
        );
    }, [editChange])
    
    // When ArrowBack button is clicked, set reRender state to true
    const goBack = () => {
        setGoBackClick(true);
    }

    // When reRender is true, redirect to collection page
    if (goBackClick) {
        return (
            <Redirect to={{
                pathname: '/collection',
            }} />
        )
    }

    return (
        <React.Fragment>
        <Navbar2 />
        <Container className={classes.paper} component="main" maxWidth="xl">
            <Typography className={classes.header} component="h1" variant="h5" align="center" gutterBottom>
                {values.firstName} {values.lastName}
            </Typography>
            <Paper>
                <Grid container>
                    <Grid item className={classes.paper} xs={12} sm={6}>
                        <form 
                            className={classes.form} 
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
                                    InputProps={{ readOnly: readOnlyState }}
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
                                    className={classes.textField}
                                    value={values.firstName}
                                    onChange={handleInputChange('firstName')}
                                    margin="dense"
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                    InputProps={{ readOnly: readOnlyState }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="lastName"
                                    placeholder="Last Name*"
                                    className={classes.textField}
                                    value={values.lastName}
                                    onChange={handleInputChange('lastName')}
                                    margin="dense"
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                    InputProps={{ readOnly: readOnlyState }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="companyName"
                                    placeholder="Company Name"
                                    fullWidth
                                    className={classes.textField}
                                    value={values.companyName}
                                    onChange={handleInputChange('companyName')}
                                    margin="dense"
                                    InputLabelProps={{ shrink: true }}
                                    InputProps={{ readOnly: readOnlyState }}
                                />
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
                                    InputProps={{ readOnly: readOnlyState }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="phone"
                                    placeholder="Phone"
                                    fullWidth
                                    className={classes.textField}
                                    value={values.phone}
                                    onChange={handleInputChange('phone')}
                                    margin="dense"
                                    InputLabelProps={{ shrink: true }}
                                    InputProps={{ readOnly: readOnlyState }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="website"
                                    placeholder="Website"
                                    fullWidth
                                    className={classes.textField}
                                    value={values.website}
                                    onChange={handleInputChange('website')}
                                    margin="dense"
                                    InputLabelProps={{ shrink: true }}
                                    InputProps={{ readOnly: readOnlyState }}
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
                                    InputProps={{ readOnly: readOnlyState }}
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
                                    InputProps={{ readOnly: readOnlyState }}
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
                                    InputProps={{ readOnly: readOnlyState }}
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
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                    InputProps={{ readOnly: readOnlyState }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="notes"
                                    placeholder="Notes"
                                    className={classes.textField}
                                    value={values.notes}
                                    onChange={handleInputChange('notes')}
                                    fullWidth
                                    multiline
                                    rows="4"
                                    margin="dense"
                                    InputLabelProps={{ shrink: true }}
                                    InputProps={{ readOnly: readOnlyState }}
                                />
                            </Grid>
                        </Grid>
                    </form>

                        <Grid item xs={12}>
                            <Grid container justify="space-between">
                                <Tooltip title="Go Back">
                                    <IconButton
                                        className={classes.iconButton}
                                        aria-label="ArrowBack"
                                        onClick={() => { goBack() }}
                                        disabled={!buttonDisable}
                                    >
                                        <ArrowBack className={classes.iconHover} color="inherit" />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Update">
                                    <IconButton
                                        className={classes.iconButton}
                                        aria-label="Update"
                                        disabled={buttonDisable}
                                    >
                                        <CheckCircle className={classes.iconHover} color="inherit" />
                                    </IconButton>
                                </Tooltip>                                    
                                <Tooltip title="Edit">
                                    <IconButton
                                        className={classes.iconButton}
                                        aria-label="Edit"
                                        onClick={handleEdit}
                                    >
                                        <Edit className={classes.iconHover} color="inherit" />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        {/* preview component */}
                    </Grid>
                </Grid>
            </Paper>
        </Container>
        </React.Fragment>
    );
}