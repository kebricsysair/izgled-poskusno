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
    TextField, Typography
} from "@mui/material";
import UserButton from "./UserButton";
import useStyles from "../../assets/styles/UserButtonStyle";
import filterUseStyles from "../../assets/styles/FilterStyle";


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
    }, []);

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
            <Box sx={{display: "flex", displayDirection: "row", flexWrap: 'wrap'}}>
                <Box sx={{backgroundColor: "white", marginLeft: "30px", maxWidth: "280px", marginRight: "30px"}}>
                        <Box component="img"
                             src="https://logovectorseek.com/wp-content/uploads/2020/01/systemair-logo-vector.png"
                             sx={{width: "200px", height: "auto"}}
                             alt="Systemair logo">

                        </Box>
                    <Typography variant="h5" gutterBottom>
                        Filtriraj
                    </Typography>
                    <FormControl sx={{width: "250px", marginBottom: "20px", marginTop: "20px"}}>
                        <InputLabel id="label">Oddelek</InputLabel>
                        <Select id="oddelek-filt-select"
                                value={department}
                                labelId="label"
                                onChange={handleDepartmentChange}
                                label="Department"
                        >
                            {
                                listOfDepartments.map((department) => {
                                    console.log(department)
                                    return (
                                        <MenuItem value={department} key={department}>{department}</MenuItem>)
                                })
                            }
                        </Select>
                    </FormControl>
                    <TextField id="imeTextField"
                               label="Ime"
                               value={name}
                               className={filterStyle.inputText}
                               onChange={(e) => {
                                   setName(e.target.value)
                               }}
                               sx={{width: "250px", marginBottom: "20px"}}
                    >
                    </TextField>
                    <TextField id="priimekTextField"
                               label="Priimek"
                               value={surname}
                               onChange={(e) => {
                                   setSurname(e.target.value)
                               }}
                               sx={{width: "250px", marginBottom: "20px"}}
                    >
                    </TextField>
                    <Button variant="outlined"
                            onClick={filteredUsers}
                            sx={{width: "250px", height: "50px"}}
                    >
                        Potrdi
                    </Button>
                </Box>
                <Box component="container" sx={{marginRight: "50px", marginLeft: "50px", flexGrow: 1}}>
                    <Typography>mhm</Typography>
                    <Grid container
                          display="block"
                          spacing={3}
                          sx={{backgroundColor: "blue", marginTop: "30px"}}
                    >
                        {
                            users.map((user) => {
                                return (<UserButton user={user} key={user.id}/>)
                            })
                        }
                    </Grid>
                </Box>
            </Box>
            <Box>
                <DataGrid>

                </DataGrid>
            </Box>
        </main>
    );
}

export default User;