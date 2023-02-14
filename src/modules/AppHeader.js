import React from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import useStyles from "../assets/styles/HeaderStyle";

const AppHeader = () => {
const classes = useStyles();
    return(
        <>
            <AppBar position="relative">
                <Toolbar>
                    <PersonIcon className={classes.personIcon}/>
                    <Typography variant="h6">
                        IMENIK
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default AppHeader;