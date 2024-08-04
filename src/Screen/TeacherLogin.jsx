import React, { useState } from "react";
import "../LoginSignup.css"

import DynamicNavBar from "../Component/DynamicNavBar";
import { AppBar, Toolbar, Typography, Stack, Button, IconButton } from '@mui/material';
import axios from "axios";
import { useNavigate } from "react-router-dom";


import Box from '@mui/material/Box';

import InputAdornment from '@mui/material/InputAdornment';

import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import EmailIcon from '@mui/icons-material/Email';

 const TeacherLogin = () => {
    const [Name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    // here the function for handle form submission 
const navigation = useNavigate()
    
    const handleSubmit = async (e) => {
        console.log(Name, email, password)
        e.preventDefault();

   

        try {
            const response = {  Name, email, password }
            console.log('Signed in successfully');
            console.log(response);
//             axios.get(`https://smitbackend.vercel.app/loginUser?email=${email}`)  
//               .then(function (response) {
//                 console.log(response);
// navigation("/getStdDash")


//               })
//               .catch(function (error) {
//                 console.log(error);


//               });



        } catch (error) {
            console.log(error.response.data.error);
        }
        

    // Input fields clear karen
    setEmail('');
    setpassword('');
    setName('');
    };
    return (
      <>
   <div>
    <DynamicNavBar side={"Login"} showimage={"Link"} />

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '120px', textDecoration: 'underline' }}>
                <div>
                    <Typography variant="h4" component="div">
                       Teacher Log in
                    </Typography>
                </div>
            </div>
<div className="login-outer" >

    
         <div className="main">
            <h1 style={{textAlign:"center"}}>Login </h1>
            <form onSubmit={handleSubmit}>
             <Box className="" my={2} >


             <TextField
 
             color="primary"
        id="input-with-icon-textfield"
        label="Username"
        variant="outlined"
        // size="small"
        required
        sx={{width:300,}}
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
sx={{width:300,}}
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
sx={{width:300,}}


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
      <button type="submit" 
      >Login</button>
        </form >
        </div>
        </div>  

        
   </div>
          </>
    )
}

export default TeacherLogin
