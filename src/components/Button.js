import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Btn from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    
}));

const Button = (props) => {
    const classes = useStyles();
    return (
        <Btn 
        variant={props.variant} 
        size={props.size} 
        color={props.color} 
        className={classes.margin}
        onClick={props.onClick}
        >
            {props.name}
        </Btn>
    );
}

export default Button;