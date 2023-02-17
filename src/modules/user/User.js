import React, {useEffect, useState} from "react";
import api from "../../services/api";
import {Container, Grid, Typography} from "@mui/material";
import UserButton from "./UserButton";
import useStyles from "../../assets/styles/UserButtonStyle";

const User = () => {
    const style = useStyles();
    const[users, setUsers] = useState([]);
    useEffect( () => {
        const getAllUsers = () => {
            api.get("/users/").then((response) => {
                setUsers(response.data);
            });
        }
        getAllUsers();
    }, []);
    return(
        <main>
            <Container maxWidth="md" className={style.containerStyle}>
                <Grid container spacing={3}>
                    {
                        users.map((user) => {
                            return(
                                <UserButton user={user}/>
                            );
                        })
                        /*
                        users.map((user) => {
                            return(
                                <Grid item>
                                    <p key={user.id}>
                                        text: {user.name} -- {user.surname}
                                    </p>
                                <Grid/>
                            );
                        });

                         */
                    }
                </Grid>

            </Container>


        </main>
    );
}

export default User;