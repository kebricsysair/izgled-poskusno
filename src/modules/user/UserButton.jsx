import React from "react";
import {Button, Grid, Typography} from "@mui/material";
import useStyles from "../../assets/styles/UserButtonStyle";
import {useNavigate} from "react-router-dom";

const UserButton = (props) => {
    const styleClass = useStyles();
    const navigate = useNavigate();
    let userId = props.user.id;
    return(
        <Grid xs={12} key={props.user.id} sx={{"&:hover": {backgroundColor: "red"}}}>
            <Button variant="text"
                    className={styleClass.buttonStyle}
                    style={{borderRadius: "20px"}}
                    onClick={() => navigate(`/systemair/user/${userId}`)}>
                <Typography variant="h6" className={styleClass.typoStyle}>
                    {props.user.name} + {props.user.surname}
                </Typography>
            </Button>
        </Grid>
    );
}

export default UserButton;