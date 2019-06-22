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
        margin: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: 19,
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
                style={{ margin: 2, marginBottom: 10}}
                select
                fullWidth
                label="Select"
                className={classes.textField}
                value={values.account}
                onChange={handleChange('account')}
                SelectProps={{
                MenuProps: {
                    className: classes.menu,
                },
                }}
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
                style={{ width: "49%", marginBottom: 2 }}
                placeholder="First Name*"
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
            />
            <TextField
                required
                id="standard-required"
                style={{ marginLeft: 2, width: "50%", marginBottom: 2 }}
                placeholder="Last Name*"
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
            />
            <TextField
                id="standard-full-width"
                style={{ margin: 2 }}
                placeholder="Company"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
            />
            <TextField
                id="standard-full-width"
                style={{ margin: 2 }}
                placeholder="Title/Position"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
            />
            <br />

            <TextField
                required
                id="standard-full-width"
                style={{ margin: 2 }}
                placeholder="Email*"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
            />
            <TextField
                id="standard-full-width"
                style={{ margin: 2 }}
                placeholder="Phone"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
            />
            <TextField
                id="standard-full-width"
                style={{ margin: 2 }}
                placeholder="Website"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
            />
            <br />

            <TextField
                id="standard-full-width"
                label="Notes"
                style={{ margin: 2 }}
                fullWidth
                multiline
                rows="4"
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
            />
        </form>
    );
}