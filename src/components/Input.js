import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }
}));

const Input = (props) => {
    const classes = useStyles();
    return (
        <TextField
            id="outlined-name"
            label={props.label}
            className={classes.textField}
            value={props.value}
            onChange={props.handleChange}
            margin="normal"
            variant="outlined"
        />
    );
}


export default Input;