import React, {useEffect, useState} from "react";
import api from "../../services/api";
import {Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import UserButton from "./UserButton";
import useStyles from "../../assets/styles/UserButtonStyle";
import filterUseStyles from "../../assets/styles/FilterStyle";


const User = () => {
    const style = useStyles();
    const filterStyle = filterUseStyles();
    const[users, setUsers] = useState([]);
    const [department, setDepartment] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const listOfDepartments = ["ODDELEK1", "ODDELEK2", "ODDELEK3"];
    const handleDepartmentChange = (e) => {
        setDepartment(e.target.value)
    }
    useEffect( () => {
        const getAllUsers = () => {
            api.get("/users/").then((response) => {
                setUsers(response.data);
            });
        }
        getAllUsers();
    }, [department, name, surname]);

    //brute force - ni dobro
    const filteredUsers = () => {
        if(department === "" && name === "" && surname === "")
            return;
        let uporabniki = [];
        users.filter((user) => user.department === department &&
            user.surname.toLowerCase() === surname.toLowerCase() &&
            user.name.toLowerCase() === name.toLowerCase()
        );
        console.log(department + "   " + name + "   " + surname)
        setUsers(uporabniki)
        if(department !== "" && name !== "" && surname !== ""){
            uporabniki = users.filter((user) => user.department === department &&
                        user.surname.toLowerCase() === surname.toLowerCase() &&
                        user.name.toLowerCase() === name.toLowerCase());
            console.log("v prvi")
        }
        else if(department !== "" && name !== ""){
            uporabniki = users.filter((user) => user.department === department &&
                user.name.toLowerCase() === name.toLowerCase());
            console.log("v drugi")
        }
        else if(name !== "" && surname !== ""){
            uporabniki = users.filter((user) => user.surname.toLowerCase() === surname.toLowerCase() &&
                user.name.toLowerCase() === name.toLowerCase());
            console.log("v tretji")
        }
        else if(department !== "" && surname !== ""){
            uporabniki = users.filter((user) => user.department === department &&
                user.surname.toLowerCase() === surname.toLowerCase());
            console.log("v cetrti")
        }
        else if(department !== "") {
            uporabniki = users.filter((user) => user.department === department)
            console.log("v peti")
        }
        else if(surname !== ""){
            uporabniki = users.filter((user) => user.surname.toLowerCase() === surname.toLowerCase());
            console.log("v sesti")
        }
        else if(name !== ""){
            uporabniki = users.filter((user) => user.name.toLowerCase() === name.toLowerCase());
            console.log("v sedmi")
        }
        setUsers(uporabniki);
    }
    return(
        <main>
            <Container maxWidth="md" className={style.containerStyle}>
                Filtriraj po: <br />
                <FormControl>
                    <InputLabel id="oddelek">Oddelek</InputLabel>
                    <Select labelId="oddelek"
                            id="oddelek-filt-select"
                            value={department}
                            onChange={handleDepartmentChange}
                            label="Department"
                            className={filterStyle.select}>
                        {
                            listOfDepartments.map((department) => {
                                console.log(department)
                                return( <MenuItem value={department} key={department}>{department}</MenuItem>)
                            })
                        }
                    </Select>
                    <TextField id="imeTextField"
                               label="Ime"
                               variant="outlined"
                               value={name}
                               onChange={(e) => {setName(e.target.value)}}>
                    </TextField>
                    <TextField id="priimekTextField"
                               label="Priimek"
                               variant="outlined"
                               value={surname}
                               onChange={(e) => {setSurname(e.target.value)}}>
                    </TextField>
                    <Button variant="outlined"
                            onClick={filteredUsers}>
                                Filtriraj:
                    </Button>
                </FormControl>
                <Grid container spacing={3}>
                    {
                        users.map((user) => {
                            return( <UserButton user={user} key={user.id}/>)
                        })
                    }
                </Grid>
            </Container>
        </main>
    );
}

export default User;