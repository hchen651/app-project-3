import React from 'react';

// Material UI
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        background: 'linear-gradient(45deg, #757575 20%, #bdbdbd 90%)',
        borderRadius: 0,
        border: 0,
        color: 'white',
        padding: '0 6px',
        boxShadow: 0,
    },
};

function BussinessCardS(props) {
    const { classes, children, className, ...other } = props;
  
    return (
        <Card className={clsx(classes.root, className)} {...other}>
            {children || 'class names'}
        </Card>
    );
}

BussinessCardS.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};
  
export default withStyles(styles)(BussinessCardS);