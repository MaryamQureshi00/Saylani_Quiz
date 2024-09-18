import React, { useEffect, useState } from 'react';
import { AppBar, Box, Button, Checkbox, Paper, Typography , Toolbar, Stack, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, FormGroup, FormControlLabel, Snackbar, Alert, AlertTitle } from "@mui/material";

import DynamicNavBar from '../../Component/DynamicNavBar';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



function AdminQuizCheck() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [QuizData, setQuizData] = useState([]);
  
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const navigation =useNavigate()
  const {state} = useLocation();
  const {obj,title,studentId}=state


  const handleOptionClick = (index) => {
    setSelectedOption(index);
    console.log(index)
  };
  const handleNextClick = () => {
    if (selectedOption !== null) {

      if (selectedOption+1 === Number(QuizData[currentQuestionIndex].answer)) {
        console.log("ASdasd")
        setScore(score + 1);
      }
      if (currentQuestionIndex < QuizData.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
      } else {
        setIsQuizCompleted(true);
      }
    } else {
      // alert("Please select an option before proceeding.");
      setOpen(true)
    }
  };


  const [open, setOpen] = useState(false);

  
  const handleClose = (event, reason) => {
   
    setOpen(false);
  };





console.log(selectedOption)


// Quiz Call


const callQuizData=()=>{

  axios.get(`https://saylani-quiz-backend.vercel.app/getquiz?Card=${obj}`)  
  .then(function (response) {
    console.log(response.data,QuizData);

    setQuizData(response.data.QuizData)

  })
  .catch(function (error) {
    console.log(error);


  });

}

useEffect(() => {
  
callQuizData()

}, [])

const gobackpage = ()=>{

  // obj=""
  navigation("/getStdDash",{ replace: true })
}

// useEffect(() => {
//   if (isQuizCompleted) {
//     postQuizResult();
//   }
// }, [isQuizCompleted]);




// const postQuizResult = () => {
//   axios.post('https://saylani-quiz-backend.vercel.app/api/quiz/studentResult', {
//     title:title,
//     ObtainScore: score,
//     TotalScore: QuizData.length,
//     studentId : studentId, 
//   })
//   .then(function (response) {
//     console.log('Result posted successfully:', response.data);
//   })
//   .catch(function (error) {
//     console.error('Error posting result:', error);
//   });

//   console.log("show result")
// };












  return (

<Box>
{/*  */}

<DynamicNavBar side={"no"}/>
{/*  Quiz start here */}

    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center",}} mt={5} pt={5}>
<Box mt={5}>


<Typography variant="h5" gutterBottom color={"primary"}>{currentQuestionIndex + 1}/ {QuizData.length }</Typography>
      <Paper sx={{width:650}}  elevation={3} > 
        <Box sx={{}}  p={5}>
          {!isQuizCompleted && QuizData.length>0 ? (
            <>
              <Box sx={{ display: "flex", alignContent: "center", alignItems: "center", alignSelf: "center", textAlign: "center" }} mb={5} pb={5}>
                <Box sx={{ border: 1, width: 20, height: 20, textAlign: "center", alignContent: "center", alignItems: "center", alignSelf: "center", borderColor: "black", borderWidth: 1.5, borderRadius: 1 }}>
                  <Typography variant="subtitle2" gutterBottom color={"primary"}>{currentQuestionIndex + 1}</Typography>
                </Box>
                <Box sx={{ textAlign: "center", alignContent: "center", alignItems: "center", alignSelf: "center" }}>
                  <Typography variant="h6" gutterBottom sx={{ alignContent: "center", alignItems: "center", alignSelf: "center", justifyContent: "center", height: 25 }} ml={1}>
                    {QuizData[currentQuestionIndex].question}
                  </Typography>
                </Box>
              </Box>
              {QuizData[currentQuestionIndex].options.map((option, index) => (
                <Box ml={3} mt={2} mb={1} key={index}>
                  <Paper elevation={3} sx={{ backgroundColor: "#dcf4ff" }}>
                 
                    <Box ml={2}>

                    <FormGroup >
  <FormControlLabel  checked={selectedOption === index} onClick={() => handleOptionClick(index)} control={<Checkbox />} label={option} />

</FormGroup>
                    </Box>
                  </Paper>
                </Box>
              ))}
              <Box sx={{ display: "flex", justifyContent: "center", }} pt={3}>
                <Button variant="contained" color="success" onClick={handleNextClick}>Next</Button>
              </Box>
            </>
          ) : (
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h4" gutterBottom>
                Quiz Completed!
              </Typography>
              <Typography variant="h6" gutterBottom>
                Your Score: {score} / {QuizData.length}
              </Typography>
              <Button variant="contained" color="primary" onClick={gobackpage}>
                Go Back
              </Button>
            </Box>
          )}
        </Box>
      </Paper>

      </Box>
    </Box>
    <Snackbar
  // anchorOrigin={{ vertical, horizontal }}
  open={open}
  autoHideDuration={6000}
  onClose={handleClose}
  message="I love snacks"
  // key={vertical + horizontal}
>


<Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Chose the Answer Before Procceding
      </Alert>
   

  </Snackbar>

    </Box>
  );
}

export default AdminQuizCheck;
