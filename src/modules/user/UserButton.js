import React from "react";
import {Button, Grid, Typography} from "@mui/material";
import useStyles from "../../assets/styles/UserButtonStyle";

const UserButton = (props) => {
    const styleClass = useStyles();
    return(
        <Grid item xs={12} key={props.user.id}>
            <Button variant="text" className={styleClass.buttonStyle}>
                    {props.user.name} + {props.user.surname}
            </Button>
        </Grid>
    );
}

export default UserButton;