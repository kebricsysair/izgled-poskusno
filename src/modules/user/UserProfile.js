import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import api from "../../services/api";

const UserProfile = () => {
    let { id } = useParams();
    const [users, setUser] = useState("");
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
            to je profil za uporabnika z idjem {id}
            {
                users.name
            }
        </main>
    );
}

export default UserProfile;