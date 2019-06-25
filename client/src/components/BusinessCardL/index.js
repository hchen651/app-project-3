import React, { useState } from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        margin: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
}));

const accounts = [
    { value: 'personal', label: 'Personal'},
    { value: 'company', label: 'Company'},
    { value: 'small business', label: 'Small Business'},
];

const addressStates = [
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

export default function BusinessCardL() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        account: 'personal',
        firstName: '',
        lastName: '',
        company: '',
        titlePosition: '',
        email: '',
        phone: '',
        website: '',
        addressStreet: '',
        addressCity: '',
        addressState: 'NY',
        addressZipcode: '',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                select
                id="account"
                style={{ margin: 2, marginBottom: 10}}
                fullWidth
                className={classes.textField}
                value={values.account}
                onChange={handleChange('account')}
                SelectProps={{
                    MenuProps: {
                        className: classes.menu,
                    },
                }}
                margin="normal"
                InputLabelProps={{ shrink: true }}
                InputProps={{ readOnly: true }}
                >
                {accounts.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                required
                id="first-name"
                style={{ margin: 2, width: "48.5%" }}
                placeholder="First Name*"
                className={classes.textField}
                value={values.firstName}
                onChange={handleChange('first-name')}
                margin="normal"
                InputLabelProps={{ shrink: true }}
                InputProps={{ readOnly: true }}
            />
            <TextField
                required
                id="last-name"
                style={{ margin: 2, width: "50%" }}
                placeholder="Last Name*"
                className={classes.textField}
                value={values.lastName}
                onChange={handleChange('last-name')}
                margin="normal"
                InputLabelProps={{ shrink: true }}
                InputProps={{ readOnly: true }}
            />
            <TextField
                id="company"
                style={{ margin: 2 }}
                placeholder="Company"
                fullWidth
                className={classes.textField}
                value={values.company}
                onChange={handleChange('company')}
                margin="normal"
                InputLabelProps={{ shrink: true }}
                InputProps={{ readOnly: true }}
            />
            <TextField
                id="title-position"
                style={{ margin: 2 }}
                placeholder="Title/Position"
                fullWidth
                className={classes.textField}
                value={values.titlePosition}
                onChange={handleChange('title-position')}
                margin="normal"
                InputLabelProps={{ shrink: true }}
                InputProps={{ readOnly: true }}
            />
            <br />

            <TextField
                required
                id="email"
                style={{ margin: 2 }}
                placeholder="Email*"
                fullWidth
                className={classes.textField}
                value={values.email}
                onChange={handleChange('email')}
                margin="normal"
                InputLabelProps={{ shrink: true }}
                InputProps={{ readOnly: true }}
            />
            <TextField
                id="phone"
                style={{ margin: 2 }}
                placeholder="Phone"
                fullWidth
                className={classes.textField}
                value={values.phone}
                onChange={handleChange('phone')}
                margin="normal"
                InputLabelProps={{ shrink: true }}
                InputProps={{ readOnly: true }}
            />
            <TextField
                id="website"
                style={{ margin: 2 }}
                placeholder="Website"
                fullWidth
                className={classes.textField}
                value={values.website}
                onChange={handleChange('website')}
                margin="normal"
                InputLabelProps={{ shrink: true }}
                InputProps={{ readOnly: true }}
            />
            <br />
            
            <TextField
                id="address-street"
                style={{ margin: 2 }}
                placeholder="Street"
                fullWidth
                className={classes.textField}
                value={values.addressStreet}
                onChange={handleChange('address-street')}
                margin="normal"
                InputLabelProps={{ shrink: true }}
                InputProps={{ readOnly: true }}
            />
            <TextField
                id="address-city"
                style={{ margin: 2, width: "45%"}}
                placeholder="City"
                className={classes.textField}
                value={values.addressCity}
                onChange={handleChange('address-city')}
                margin="normal"
                InputLabelProps={{ shrink: true }}
                InputProps={{ readOnly: true }}
            />
            <TextField
                select
                id="address-state"
                style={{ margin: 2, width: "20%" }}
                className={classes.textField}
                value={values.addressState}
                onChange={handleChange('address-state')}
                SelectProps={{
                    MenuProps: {
                        className: classes.menu,
                    },
                }}
                margin="normal"
                InputLabelProps={{ shrink: true }}
                InputProps={{ readOnly: true }}
                >
                {addressStates.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                id="address-zipcode"
                style={{ margin: 2, width: "32.5%" }}
                placeholder="Zip Code"
                className={classes.textField}
                value={values.addressZipcode}
                onChange={handleChange('address-zipcode')}
                margin="normal"
                InputLabelProps={{ shrink: true }}
                InputProps={{ readOnly: true }}
            />
            <br />

            <TextField
                id="notes"
                style={{ margin: 2 }}
                placeholder="Notes"
                fullWidth
                multiline
                rows="4"
                margin="normal"
                InputLabelProps={{ shrink: true }}
                InputProps={{ readOnly: true }}
            />
        </form>
    );
}