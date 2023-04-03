import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import api from "../../services/api";
import {Container, Grid} from "@mui/material";
import useStyles from "../../assets/styles/UserProfileStyle";

const UserProfile = () => {
    let { id } = useParams();
    const [users, setUser] = useState("");
    const styles = useStyles();
    useEffect(() => {
        const getUserById = () => {
            api.get(`/users/${id}`).then((response) => {
                setUser(response.data)
            });
        }
        getUserById();
    }, [id]);
    return(
        <main>
            <Container maxWidth="md" className={styles.containerStyle}>
                <Grid container>
                    <Grid item xs={12} key={users.id} className={styles.itemStyle}>
                        to je profil za uporabnika z idjem {id}
                        {
                            users.name + " " + users.department
                        }
                    </Grid>

                </Grid>
            </Container>

        </main>
    );
}

export default UserProfile;