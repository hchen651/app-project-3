import React, { useState } from 'react';

// Material UI
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        borderRadius: 0,
        border: 0,
        padding: '30px',
        boxShadow: 0,
    },
};

function BussinessCardL(props) {
    const { classes, children, className, ...other } = props;
  
    return (
        <Card className={clsx(classes.root, className)} {...other}>
            {children || 'class names'}
        </Card>
    );
}

BussinessCardL.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};
  
export default withStyles(styles)(BussinessCardL);