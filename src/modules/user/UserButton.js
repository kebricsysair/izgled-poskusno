import React from "react";
import {Button, Grid, Typography} from "@mui/material";
import useStyles from "../../assets/styles/UserButtonStyle";
import {useNavigate} from "react-router-dom";

const UserButton = (props) => {
    const styleClass = useStyles();
    let navigate = useNavigate();
    let userId = props.user.id;
    return(
        <Grid item xs={12} key={props.user.id}>
            <Button variant="text" className={styleClass.buttonStyle} onClick={() => navigate(`/systemair/user/${userId}`)}>
                    <Typography className={styleClass.typoStyle}>
                        {props.user.name} + {props.user.surname}
                    </Typography>
            </Button>
        </Grid>
    );
}

export default UserButton;