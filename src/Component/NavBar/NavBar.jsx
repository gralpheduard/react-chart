import React from 'react';
import {AppBar, Toolbar, Typography, } from '@material-ui/core'
import useStyles from './useStyles'

const NavBar = () =>{
    const classes = useStyles();
    return (
        <AppBar color="textSecondary" position="static"className={classes.root}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                Charts
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar