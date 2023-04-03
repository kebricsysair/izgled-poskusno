import React from "react";
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import useStyles from "../assets/styles/HeaderStyle";
import {Link} from "react-router-dom";

const AppHeader = () => {
const classes = useStyles();
    return(
        <>
            <AppBar position="relative">
                <Toolbar>
                    <PersonIcon className={classes.personIcon}/>
                    <nav className={classes.navStyle}>
                        <Link className={classes.linkStyle}
                              to="/systemair/users"> IMENIK </Link>
                    </nav>
                </Toolbar>
            </AppBar>
            <Box>
                <img src="../assets/images/logo.jpg"
                     sx={{ width: "100%", height: "auto"}}
                     alt="Systemair logo" />
            </Box>
        </>
    );
}

export default AppHeader;