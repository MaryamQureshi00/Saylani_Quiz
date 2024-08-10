
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Stack, Button } from '@mui/material';
import '../App.css'
import image from './Images/image.png';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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


// Styled Table Cells
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    background: 'linear-gradient( rgb(222, 217, 217), #0874B9) !important',
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 1,
  },
}));

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
        


// Customized Table Component
function CustomizedTables() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/students')
      .then(response => {
        setRows(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);


  return (
    <TableContainer component={Paper} style={{ padding: '2px' }}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Student Names</StyledTableCell>
            <StyledTableCell align="right">Quiz Title</StyledTableCell>
            <StyledTableCell align="right">Start Date</StyledTableCell>
            <StyledTableCell align="right">End Date</StyledTableCell>
            <StyledTableCell align="right">Total Marks</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Result</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.quizTitle}</StyledTableCell>
              <StyledTableCell align="right">{new Date(row.startDate).toLocaleDateString()}</StyledTableCell>
              <StyledTableCell align="right">{new Date(row.endDate).toLocaleDateString()}</StyledTableCell>
              <StyledTableCell align="right">{row.totalMarks}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.result}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// Main App Component
const App = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Navigate to the signup page
    navigate('/signup');
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar className="nav">
          <Typography variant="h6" component="div">
            <img
              className="image"
              src={image}
              alt="saylani"
              style={{ width: '50px', height: '30px', marginRight: '20px', marginTop: '20px' }}
            />
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button style={{ backgroundColor: 'white' }} color="inherit" onClick={handleLogout}>
              <i className="mainIcon fa-solid fa-user-graduate"></i> Logout
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

    
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


      <h1 style={{ fontSize: '50px', marginRight: '50px', marginTop: '20px' }}>Admin quiz portal</h1>
      <div style={{ marginTop: '40px' }}>
        <CustomizedTables />
      </div>
    </>
  );
}

export default App;




