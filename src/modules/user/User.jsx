import React, {useEffect, useState} from "react";
import api from "../../services/api";
import {
    Box,
    Button,
    Collapse,
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import UserButton from "./UserButton";
import useStyles from "../../assets/styles/UserButtonStyle";
import filterUseStyles from "../../assets/styles/FilterStyle";
import FilterAltIcon from '@mui/icons-material/FilterAlt';


const User = () => {
    const style = useStyles();
    const filterStyle = filterUseStyles();
    const [users, setUsers] = useState([]);
    const [department, setDepartment] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const listOfDepartments = ["ODDELEK1", "ODDELEK2", "ODDELEK3"];
    const [showFilter, setShowFilter] = useState(false);

    const handleShowFilter = (e) => {
        setShowFilter(!showFilter);
    }
    const handleDepartmentChange = (e) => {
        setDepartment(e.target.value)
    }
    useEffect(() => {
        const getAllUsers = () => {
            api.get("/users/").then((response) => {
                console.log(response);
                setUsers(response.data);
            });
        }
        getAllUsers();
    }, /*[department, name, surname] */ []);

    const filteredUsers = () => {
        console.log(department + "   " + name + "    " + surname)
        api.get("/users/filter", {
            params: {
                department: department,
                name: name,
                surname: surname
            }
        }).then((response) => {
            console.log(response);
            console.log(response.data);
            setUsers(response.data);
        });
    }
    return (
        <main>
            <Container maxWidth={"lg"}>
                <Button onClick={handleShowFilter}
                        startIcon={<FilterAltIcon />}
                        variant="contained"
                        style={{marginTop: "25px", marginBottom: "25px"}}>
                     filtriraj
                </Button>
                <Collapse in={showFilter} style={{marginBottom: "50px"}}>
                    <Box sx={{justifyContent: "center", display: "flex"}}
                         style={{backgroundColor: "whitesmoke", padding: "30px", borderRadius: "20px"}}>
                        <FormControl>
                            <InputLabel id="label">Oddelek</InputLabel>
                            <Select id="oddelek-filt-select"
                                    value={department}
                                    labelId="label"
                                    onChange={handleDepartmentChange}
                                    label="Department"
                                    className={filterStyle.select}>
                                {
                                    listOfDepartments.map((department) => {
                                        console.log(department)
                                        return (<MenuItem value={department} key={department}>{department}</MenuItem>)
                                    })
                                }
                            </Select>
                        </FormControl>
                        <TextField id="imeTextField"
                                   label="Ime"
                                   value={name}
                                   className={filterStyle.inputText}
                                   style={{marginRight: "30px"}}
                                   onChange={(e) => {
                                       setName(e.target.value)
                                   }}>
                        </TextField>
                        <TextField id="priimekTextField"
                                   label="Priimek"
                                   value={surname}
                                   style={{marginRight: "30px"}}
                                   onChange={(e) => {
                                       setSurname(e.target.value)
                                   }}>
                        </TextField><br/>
                        <Button variant="outlined"
                                onClick={filteredUsers}>
                            Potrdi
                        </Button>
                    </Box>
                </Collapse>
            </Container>
            <Container maxWidth="md"
                       style={{backgroundColor: "whitesmoke", borderRadius: "20px", padding: "0px"}}>
                <Grid container
                      spacing={3}>
                    {
                        users.map((user) => {
                            return (<UserButton user={user} key={user.id}/>)
                        })
                    }
                </Grid>
            </Container>
        </main>
    );
}

export default User;