import React, { useState } from 'react';
import { AppBar, Box, Button, Checkbox, Paper, Typography , Toolbar, Stack, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, FormGroup, FormControlLabel, Snackbar, Alert, AlertTitle } from "@mui/material";
import  {useNavigate}  from 'react-router-dom';
import DynamicNavBar from '../../Component/DynamicNavBar';




const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const QuizData = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: 3
  },
  {
    question: "What does CSS stand for?",
    options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
    answer: 1
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: 0
  },
  {
    question: "What is the purpose of Promises in JavaScript?",
    options: ["To create new functions.", "To handle synchronous code execution.", "To handle asynchronous operations.", "None of the above"],
    answer: 2
  },
  {
    question: "How do you write an if statement in JavaScript?",
    options: ["if i == 5 then", "if (i == 5)", "if i = 5", "if i == 5"],
    answer: 1
  },
  {
    question: "How do you add a single line comment in JavaScript?",
    options: ["<!-- This is a comment -->", "/* This is a comment */", "// This is a comment", "** This is a comment **"],
    answer: 2
  },
  {
    question: "Which property is used to change the background color in CSS?",
    options: ["color", "bg-color", "background-color", "bgcolor"],
    answer: 2
  },
  {
    question: "Which of the following is a correct way to declare a variable in JavaScript?",
    options: ["var myVariable;", "let myVariable;", "const myVariable;", "All of the above"],
    answer: 3
  },
  {
    question: "What is the purpose of the alt attribute in an <img> tag?",
    options: ["To provide alternative text for the image.", "To resize the image.", "To link the image to another page.", "To load the image to another page."],
    answer: 0
  },
  {
    question: "How do you call a function named myFunction in JavaScript?",
    options: ["call myFunction()", "myFunction()", "call function myFunction()", "execute myFunction()"],
    answer: 1
  }
];

function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const navigation =useNavigate()


  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleNextClick = () => {
    if (selectedOption !== null) {
      if (selectedOption === QuizData[currentQuestionIndex].answer) {
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








// appp bar 





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
          {!isQuizCompleted ? (
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
              <Button variant="contained" color="primary" onClick={() => navigation("/MainPage")}>
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

export default QuizApp;
