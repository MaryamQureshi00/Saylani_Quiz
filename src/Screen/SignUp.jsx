import React, { useState } from "react";
import "../LoginSignup.css"

// import MainPage from './MainPage';
import axios from "axios";
import DynamicNavBar from "../Component/DynamicNavBar";
import { Typography } from "@mui/material";


import Box from '@mui/material/Box';

import InputAdornment from '@mui/material/InputAdornment';
import { CircularProgress } from '@mui/material';

import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const [Name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [contact, setcontact] = useState('')
    const [loginStatus, setloginStatus] = useState(false)

    const navigation = useNavigate()
    const handleSubmit = async (e) => {
        console.log(Name, email, password)
        e.preventDefault();
        setloginStatus(true)
        try {
            const SendData = { username: Name, contact_no: contact, email: email, password: password }

            console.log('Signed in successfully');
            console.log(SendData);
            axios.post('https://saylani-quiz-backend.vercel.app/signup', SendData)
                .then(function (response) {
                    localStorage.setItem('User', JSON.stringify(response.data.user));
                    console.log(response.data.user);
                    setloginStatus(false)
if(response.data.user==="Email already Exist"){

alert("Email already exits")
    
}

                    navigation("/getStdDash")
                })
                .catch(function (error) {
                    setloginStatus(false)
                    // handle error
                    console.log(error);
                })
        } catch (error) {
            console.log(error.response.data.error);
        }
        setEmail('');
        setpassword('');
        setName('');
        setcontact('');
    };
    return (
        <>
            <div>
                <DynamicNavBar side={"SignUp"} showimage={"Link"} />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '120px', textDecoration: 'underline' }}>
                    <div>
                        <Typography variant="h4" component="div">
                            Student Signup
                        </Typography>
                    </div>
                </div>
                <div className=" signup-outer" style={{ marginTop: 50 }}>

                    <div className='main-2'>
                        <h1 style={{ textAlign: "center" }}>Sign up </h1>
                        <form onSubmit={handleSubmit}>

                            <Box className="" my={2} >


                                <TextField

                                    color="primary"
                                    id="input-with-icon-textfield"
                                    label="Username"
                                    variant="outlined"
                                    // size="small"
                                    required
                                    sx={{ width: 300, }}
                                    value={Name}
                                    onChange={(e) => setName(e.target.value)}

                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <AccountCircle />
                                            </InputAdornment>
                                        ),
                                    }}

                                />
                            </Box>




                            <Box className="" my={2} >


                                <TextField

                                    color="primary"
                                    required
                                    id="input-with-icon-textfield"
                                    label="Email"
                                    variant="outlined"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    // size="small"
                                    type="email"
                                    sx={{ width: 300, }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <EmailIcon />
                                            </InputAdornment>
                                        ),
                                    }}

                                />
                            </Box>

                            <Box className="" my={2} >


                                <TextField

                                    color="primary"
                                    required
                                    id="input-with-icon-textfield"
                                    label="Contact No."
                                    variant="outlined"
                                    value={contact}
                                    onChange={(e) => setcontact(e.target.value)}
                                    // size="small"
                                    type="text"
                                    sx={{ width: 300, }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <EmailIcon />
                                            </InputAdornment>
                                        ),
                                    }}

                                />
                            </Box>

                            <Box className="" my={2} >


                                <TextField
                                    required
                                    color="primary"
                                    id="input-with-icon-textfield"
                                    label="Password"
                                    variant="outlined"
                                    // size="small"
                                    type="password"
                                    sx={{ width: 300, }}


                                    value={password}
                                    onChange={(e) => setpassword(e.target.value)}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <KeyIcon />
                                            </InputAdornment>
                                        ),
                                    }}

                                />
                            </Box>


                            <button type="submit" disabled={loginStatus}>{loginStatus ?<CircularProgress  size={20}/>:"Signup" }</button>
                            {/* <Link href="/login" variant="body2">
                {"Already have an account?Log in"}
              </Link> */}


                        </form >


                    </div>
                </div>


            </div>
        </>

    )
}
export default Signup;