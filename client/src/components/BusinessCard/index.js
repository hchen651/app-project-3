import React from 'react';
import "./style.css";

// Material UI
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 600,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
}));

const accounts = [
    {
      value: 'personal',
      label: 'Personal',
    },
    {
      value: 'company',
      label: 'Company',
    },
    {
      value: 'small business',
      label: 'Small Business',
    },
];

export default function TextFields() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        account: '',
        name: '',
        company: '',
        position: '',
        email: '',
        phone: '',
        website: '',
        address: '',
        profile: '',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="standard-select-account"
                select
                label="Select"
                className={classes.textField}
                value={values.account}
                onChange={handleChange('account')}
                SelectProps={{
                MenuProps: {
                    className: classes.menu,
                },
                }}
                helperText="Please select one"
                margin="normal"
                >
                {accounts.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
            </TextField>
            <TextField
                required
                id="standard-required"
                label="Name"
                className={classes.textField}
                value={values.name}
                onChange={handleChange('name')}
                margin="normal"
            />
            <TextField
                id="standard-uncontrolled"
                label="Company Name"
                className={classes.textField}
                value={values.company}
                onChange={handleChange('company')}
                margin="normal"
            />
            <TextField
                id="standard-uncontrolled"
                label="Title/Position"
                className={classes.textField}
                value={values.position}
                onChange={handleChange('position')}
                margin="normal"
            />
            <TextField
                id="standard-uncontrolled"
                label="Email"
                className={classes.textField}
                value={values.position}
                onChange={handleChange('email')}
                margin="normal"
            />
            <TextField
                id="standard-uncontrolled"
                label="Phone"
                className={classes.textField}
                value={values.position}
                margin="normal"
            />  


             <TextField
                id="standard-multiline-static"
                label="Note"
                multiline
                rows="4"
                className={classes.textField}
                margin="normal"
            />
        </form>
    );
}