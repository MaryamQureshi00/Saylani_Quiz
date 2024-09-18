import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import DynamicNavBar from '../Component/DynamicNavBar';
import { Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function AllStudentTable() {

    const [Data, setData] = React.useState();
    const navigation = useNavigate()


const getStudentData=()=>{

    axios.get(`https://saylani-quiz-backend.vercel.app/getallUser`)  
    .then(function (response) {
      console.log(response.data.QuizData);
console.log(response.data.allUsers)
      setData(response.data.allUsers)

    })
    .catch(function (error) {
      console.log(error);



    });
    
        
}

React.useEffect(() => {
    getStudentData()
   
}, []);



const moveStudent=(studentData)=>{
    console.log(studentData)
    navigation("/ShowInfo",{state:{StudentId:studentData._id,name:studentData.username,email:studentData.email	}})


}


  return (
<Box>
<DynamicNavBar  side={"Icon"}/>


    <TableContainer component={Paper} sx={{marginTop:12}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{backgroundColor:"#1a90fe"}}>
          <TableRow >
            <TableCell>Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="right">ContactNumber</TableCell>
            <TableCell align="center">About</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {Data?   Data.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } ,backgroundColor:index%2==0? "#ebebed":"transparent"}}
            >
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell align="center">{row.email	}</TableCell>
              <TableCell align="right">{row.contact_no	}</TableCell>
              <TableCell align="center" sx={{width:149}}><Button variant='contained' onClick={()=>moveStudent(row)}>View Info</Button></TableCell>
              
            </TableRow>
          )) : null}
        </TableBody>
      </Table>
    </TableContainer>


    </Box>
  );
}
