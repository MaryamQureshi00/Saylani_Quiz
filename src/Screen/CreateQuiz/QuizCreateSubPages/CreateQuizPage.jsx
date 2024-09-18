import * as React from 'react';
import {
  Alert,
  AlertTitle,
  AppBar,
  Box,
  Button,
  Checkbox,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  List,
  MenuItem,
  Paper,
  Snackbar,
  TextField,
  Toolbar,
  Tooltip,
  Typography
} from "@mui/material";
import { useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Slide from '@mui/material/Slide';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import BallotIcon from '@mui/icons-material/Ballot';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateQuizPage({sendBackQuizData}) {
  const [fristStepWarning,setfristStepWarning] = React.useState(false)

  const [open, setOpen] = useState(false);
  const [Deleteopen, setDeleteOpen] = useState(false);
  const [ShortCutopen, setShortCutopen] = useState(false);
  const [QuizList, setQuizList] = useState(false);


  const [CardData, setCardData] = useState({
    question: "",
    options: ["", "", "", ""],
    answer: 0
  });
  const [quizCards, setQuizCards] = useState([]);
  const [jsonInput, setJsonInput] = useState("");

  const handleOptionChange = (e, index) => {
    const newOptions = [...CardData.options];
    newOptions[index] = e.target.value;
    setCardData({ ...CardData, options: newOptions });
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const TodoAdd = () => {
    if (CardData.question.trim() === "" ||
      CardData.options.some(option => option.trim() === "") ||
      CardData.answer === 0) {
      setOpen(true);
      return;
    }

    setQuizCards([...quizCards, CardData]);
    setCardData({
      question: "",
      options: ["", "", "", ""],
      answer: 0
    });
  };

  const handleAddQuestions = (e) => {
    e.preventDefault();
    try {
      const newQuestions = JSON.parse(jsonInput);

      if (Array.isArray(newQuestions)) {
        setQuizCards([...quizCards, ...newQuestions]);
        setJsonInput("");
        setShortCutopen(false);
      } else {
        alert("Input should be a valid JSON array of questions.");
      }
    } catch (error) {
      alert("Invalid JSON format. Please correct it and try again.");
    }
  };

const onCompletion = ()=>{
  console.log(quizCards.length==2)
  if(quizCards.length > 2){

    sendBackQuizData([...quizCards])
  }
else{
  setfristStepWarning(true);
}

}

const warningset1 = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setfristStepWarning(false);
};


  return (
    <Box sx={{width:"100%",mt:6}}>
      <Box mb={5}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button variant="contained" color="success" endIcon={<SendIcon />} onClick={onCompletion}>Complete</Button>
          </Grid>

          <Grid item xs={6} sx={{ display: "flex", justifyContent: "end", pr:10}}>
            <IconButton aria-label="delete" color="primary" sx={{width:25,height:25,pr:5}}onClick={() => setQuizList(true)}>
              <BallotIcon />
            </IconButton>
            <IconButton aria-label="delete" color="primary" sx={{width:25,height:25}} onClick={() => setShortCutopen(true)}>
              <AppRegistrationIcon />
            </IconButton>
          </Grid>

          <Grid item xs={12}>
            <TextField id="filled-basic" label="Question..." variant="filled" fullWidth value={CardData.question} onChange={(e) => (setCardData({ ...CardData, question: e.target.value }))} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth id="filled-basic" label="1st Option..." variant="filled" value={CardData.options[0]} onChange={(e) => (handleOptionChange(e, 0))} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth id="filled-basic" label="2nd Option..." variant="filled" value={CardData.options[1]} onChange={(e) => (handleOptionChange(e, 1))} />
          </Grid>

          <Grid item xs={6}>
            <TextField fullWidth id="filled-basic" label="3rd Option..." variant="filled" value={CardData.options[2]} onChange={(e) => (handleOptionChange(e, 2))} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth id="filled-basic" label="4th Option " variant="filled" value={CardData.options[3]} onChange={(e) => (handleOptionChange(e, 3))} />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              id="filled-basic"
              label="Correct Answer"
              select
              variant="filled"
              value={CardData.answer}
              onChange={(e) => setCardData({ ...CardData, answer: e.target.value })}
              fullWidth
              helperText="Select Which Option is Correct"
            >
              {[1, 2, 3, 4].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={6} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Button variant="contained" endIcon={<SendIcon />} onClick={() => TodoAdd()}>Add</Button>
          </Grid>
        </Grid>
      </Box>
      <Divider />

      {quizCards && quizCards.length > 0 ?
        quizCards.map((item, index) => (
          <Box key={index}>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <Tooltip title="Edit" arrow sx={{width:25,height:25}}>
                <IconButton color="primary" aria-label="add to shopping cart" sx={{width:25,height:25}}>
                  <EditIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Delete" arrow>
                <IconButton color="primary" aria-label="add to shopping cart" sx={{width:25,height:25}} onClick={() => { setDeleteOpen(true) }}>
                  <DeleteIcon color="error" />
                </IconButton >
              </Tooltip>
            </Box>

            <Box sx={{ display: "flex", alignContent: "center", alignItems: "center", alignSelf: "center", textAlign: "center" }}>
              <Box sx={{ border: 1, width: 20, height: 20, textAlign: "center", alignContent: "center", alignItems: "center", alignSelf: "center", borderColor: "#e7e7e7", borderWidth: 1.5, borderRadius: 1 }}>
                <Typography variant="subtitle2" gutterBottom color={"#acacac"}>{index + 1}</Typography>
              </Box>
              <Box sx={{ textAlign: "center", alignContent: "center", alignItems: "center", alignSelf: "center" }}>
                <Typography variant="h6" gutterBottom sx={{ alignContent: "center", alignItems: "center", alignSelf: "center", justifyContent: "center", height: 25 }} ml={1}> {item.question}
                </Typography>
              </Box>
            </Box>

            {item.options.map((option, optIndex) => (
              <Box ml={3} mt={2} mb={1} key={optIndex}>
                <Paper elevation={3} sx={{ backgroundColor: optIndex === item.answer - 1 ? "#8ce68c" : "#dcf4ff", display: "flex", justifyContent: "space-between" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox {...label} disabled />
                    <Typography variant="body1" gutterBottom sx={{ color: optIndex === item.answer - 1 ? "green" : "#7f8289" }} m={0}>{option}</Typography>
                  </Box>
                  <Box mr={3}>
                    {optIndex === item.answer - 1 ?
                      <Checkbox
                        {...label}
                        checked={true}
                        color="success"
                      /> : <></>
                    }
                  </Box>
                </Paper>
              </Box>
            ))}

            <Box mt={5}></Box>
            <Divider />
          </Box>
        ))
        : <Box></Box>
      }

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="I love snacks"
      >
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Please fill in all fields correctly — <strong>check it out!</strong>
        </Alert>
      </Snackbar>

      <BootstrapDialog
        onClose={handleDeleteClose}
        aria-labelledby="customized-dialog-title"
        open={Deleteopen}
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle id="customized-dialog-title" onClose={handleDeleteClose}>
          Delete Card?
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete this card? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleDeleteClose}>
            No
          </Button>
          <Button onClick={handleDeleteClose}>Yes</Button>
        </DialogActions>
      </BootstrapDialog>




      {/* Short Cut Quiz Insert */}

      <React.Fragment>

        <BootstrapDialog
          onClose={() => setShortCutopen(false)}
          aria-labelledby="customized-dialog-title"
          open={ShortCutopen}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Create Quiz
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={() => setShortCutopen(false)}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
              width:25,
              height:25,
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers sx={{ widows: 320 }}>
            <TextField
              id="outlined-multiline-static"
              label="Paste your JSON formatted questions here."
              multiline
              rows={10}
              placeholder='[
  {
    "question": "Which language runs in a web browser?",
    "options": ["Java", "C", "Python", "JavaScript"],
    "answer": 4
  },
  {
    "question": "What does CSS stand for?",
    "options": ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
    "answer": 2
  }
]
'
              sx={{ width: 500 }}
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleAddQuestions}>
              Save
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </React.Fragment>


      {/* list Quiz  */}

      <React.Fragment>

        <Dialog
          fullScreen
          open={QuizList}
          onClose={() => setQuizList(false)}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => setQuizList(false)}
                aria-label="close"
                sx={{width:25,height:25}}
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
               Quiz List
              </Typography>
              <Button autoFocus color="inherit" sx={{width:25,height:25}} onClick={() => setQuizList(false)}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List>

         { quizCards && quizCards.length > 0 ?
          quizCards.map((item, index) => (
            <Box key={index}>

          
            <Box sx={{}}>
              <Box sx={{ alignContent: "end", alignItems: "end", display: "flex", justifyContent: "end" }}>
                <Tooltip title="Edit" arrow>
                  <IconButton color="primary" aria-label="add to shopping cart" sx={{width:25,height:25}}>
                    <EditIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Delete" arrow>
                  <IconButton color="primary" aria-label="add to shopping cart" sx={{width:25,height:25}} onClick={() => { setDeleteOpen(true) }}>
                    <DeleteIcon color="error" />
                  </IconButton >
                </Tooltip>
              </Box>
              
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div" mb={3}>
                Q{index+1}:{item.question}

                {item.options.map((option, optIndex) => (
                <ul key={optIndex}>
                  <li style={{ backgroundColor: optIndex === item.answer - 1? "#8ce68c":"transparent", borderRadius: 30 }} >
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} ml={2}>

                      <Box>
                        {option}

                      </Box>
                      <Box mr={5} sx={{ display: "flex" }}>
                      {optIndex === item.answer - 1 ?
                        <Checkbox
                          {...label}
                          checked={true}
                          color="success"
                          m={0}
                          p={0}
                        /> :<></>}
                      </Box>
                    </Box>

                  </li>
                 


                </ul>
))}
                Answer : {item.answer}

              </Typography>


            </Box>
            
            <Divider />

            </Box>

          )):<></>}
          </List>
        </Dialog>
      </React.Fragment>

<Snackbar open={fristStepWarning} autoHideDuration={6000} onClick={warningset1}>
        <Alert
          onClose={warningset1}
          severity="warning"
          variant="filled"
          sx={{ width: '100%' }}
        >
         More then 2 quiz must be created
        </Alert>
      </Snackbar>

    </Box>
  );
}
