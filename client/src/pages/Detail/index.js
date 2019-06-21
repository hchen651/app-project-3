import React from 'react';
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
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

export default function TextFields() {
  const classes = useStyles();
//   const [values, setValues] = React.useState({
//     name: 'Cat in the Hat',
//     age: '',
//     multiline: 'Controlled',
//     currency: 'EUR',
//   });

//   const handleChange = name => event => {
//     setValues({ ...values, [name]: event.target.value });
//   };

  return (
    <form className={classes.container} noValidate autoComplete="off">
        <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="Hello World"
        className={classes.textField}
        margin="normal"
      />
    </form>
  );
}