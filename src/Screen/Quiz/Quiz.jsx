import React, { useEffect, useState } from 'react';
import { AppBar, Box, Button, Checkbox, Paper, Typography, Toolbar, Stack, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, FormGroup, FormControlLabel, Snackbar, Alert, AlertTitle } from "@mui/material";
import DynamicNavBar from '../../Component/DynamicNavBar';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import { AppBar, Box, Button, Checkbox, Paper, Typography , Toolbar, Stack, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, FormGroup, FormControlLabel, Snackbar, Alert, AlertTitle } from "@mui/material";

import DynamicNavBar from '../../Component/DynamicNavBar';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [QuizData, setQuizData] = useState([]);

  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const navigation = useNavigate();
  const { state } = useLocation();
  const { obj } = state;

  const [open, setOpen] = useState(false);

  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const navigation =useNavigate()
  const {state} = useLocation();
  const {obj}=state

  // console.log(obj)


  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleNextClick = () => {
    if (selectedOption !== null) {
      if (selectedOption === Number(QuizData[currentQuestionIndex].answer)) {
        setScore(score + 1);
      }
      if (currentQuestionIndex < QuizData.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
      } else {
        setIsQuizCompleted(true);
      }
    } else {
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  // Fetch Quiz Data
  const callQuizData = () => {
    axios.get(`https://smitbackend.vercel.app/getquiz?Card=${obj}`)
      .then(function (response) {
        console.log(response.data, QuizData);
        setQuizData(response.data.QuizData);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Fetch Student Result
  const fetchStudentResult = () => {
    axios.get('http://localhost:8000/api/quiz/studentShowresult?studentId=66b4bbccc60e9dde7c5fde54')
      .then(function (response) {
        console.log("Student Result:", response.data);
        // Handle the result data here, e.g., display it or perform any logic
      })
      .catch(function (error) {
        console.log("Error fetching student result:", error);
      });
  };

  useEffect(() => {
    callQuizData();
    fetchStudentResult(); // Call this function when the component mounts
  }, []);


  const gobackpage = () => {
    navigation("/getStdDash", { replace: true });
  };

  return (
    <Box>
      <DynamicNavBar side={"no"} />
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center", }} mt={5} pt={5}>
        <Box mt={5}>
          <Typography variant="h5" gutterBottom color={"primary"}>{currentQuestionIndex + 1}/ {QuizData.length}</Typography>
          <Paper sx={{ width: 650 }} elevation={3}>
            <Box sx={{}} p={5}>
              {!isQuizCompleted && QuizData.length > 0 ? (
                <>
                  <Box sx={{ display: "flex", alignContent: "center", alignItems: "center", alignSelf: "center", textAlign: "center" }} mb={5} pb={5}>
                    <Box sx={{ border: 1, width: 20, height: 20, textAlign: "center", alignContent: "center", alignItems: "center", alignSelf: "center", borderColor: "black", borderWidth: 1.5, borderRadius: 1 }}>
                      <Typography variant="subtitle2" gutterBottom color={"primary"}>{currentQuestionIndex + 1}</Typography>
                    </Box>
                    <Box sx={{ textAlign: "center", alignContent: "center", alignItems: "center", alignSelf: "center" }}>
                      <Typography variant="h6" gutterBottom sx={{ alignContent: "center", alignItems: "center", alignSelf: "center", justifyContent: "center", height: 25 }} ml={1}>
                        {QuizData[currentQuestionIndex].question}
                      </Typography>





// Quiz Call


const callQuizData=()=>{

  axios.get(`https://smitbackend.vercel.app/getquiz?Card=${obj}`)  
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
                  </Box>
                  {QuizData[currentQuestionIndex].options.map((option, index) => (
                    <Box ml={3} mt={2} mb={1} key={index}>
                      <Paper elevation={3} sx={{ backgroundColor: "#dcf4ff" }}>
                        <Box ml={2}>
                          <FormGroup>
                            <FormControlLabel checked={selectedOption === index} onClick={() => handleOptionClick(index)} control={<Checkbox />} label={option} />
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
          </Paper>
        </Box>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="I love snacks"
      >
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Chose the Answer Before Proceeding
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default QuizApp;
