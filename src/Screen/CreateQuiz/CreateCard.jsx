import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {  Alert, Divider, Grid, Snackbar, TextField } from '@mui/material';

import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import DynamicNavBar from '../../Component/DynamicNavBar';
import CreateQuizPage from './QuizCreateSubPages/CreateQuizPage';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const steps = ['Creating Card', 'Creating Quiz', 'Submitting'];

export default function RecipeReviewCard() {

const [fristStepWarning,setfristStepWarning] = React.useState(false)
const navigation = useNavigate()

  const [buttondis,setbuttondis]= React.useState(false)
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [CardData, setCardData] = React.useState({
    Title: '',
    Image: '',
   
  })
const [QuizData,setQuizData]= React.useState([])

console.log(QuizData)
  const totalSteps = () => {
    return steps.length;
  };

  console.log(completed)
console.log(CardData)
  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    setCompleted({
      ...completed,
      [activeStep]: true,
    });
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const step1Check=()=>{

if(CardData.Title && CardData.Image){

  handleComplete()

}else{

  setfristStepWarning(true);
}

  }


  const warningset1 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setfristStepWarning(false);
  };


  const getset2Data=(data)=>{

    console.log(data)
    setQuizData(()=>[...data])
    handleComplete()
  }

const Submitalldata = ()=>{
  setbuttondis(true)
  axios.post(`https://saylani-quiz-backend.vercel.app/createQuizCard`,{
    title:CardData.Title,
    image:CardData.Image,
   quizzes:QuizData
    
  })  
  .then(function (response) {
    console.log(response.data.QuizData);
    navigation("/Admindash")
    setbuttondis(false)

  })
  .catch(function (error) {
    console.log(error);
    setbuttondis(false)


  });

}


return (
    <Box sx={{ width: '100%' }}>

      <DynamicNavBar side={"Icon"}/>
      <Stepper nonLinear activeStep={activeStep} sx={{mt:15}}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            
       
{activeStep == 0 ?
            <Box sx={{display:"flex",justifyContent:"center",mt:10}}>
                <Box>

                    
                <Grid container spacing={2} ml={5}>

  <Grid item xs={8}>
   
<TextField id="filled-basic" label="Title" variant="filled" value={CardData.Title} onChange={(e)=>(setCardData({...CardData,Title:e.target.value}))}/>
  </Grid>
  <Grid item xs={8}>
   
<TextField id="filled-basic" label="Image" variant="filled" value={CardData.Image} onChange={(e)=>(setCardData({...CardData,Image:e.target.value}))}/>
  </Grid>



</Grid>
                </Box>
<Box>

<Card orientation="horizontal" variant="outlined" sx={{ height:118,width: 290 ,marginX:2,mb:1}} >
                    <CardOverflow>
                        <AspectRatio ratio="1" sx={{ width: 150 }}>
                            <img
                                src={CardData.Image}
                                // srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                                loading="lazy"
                                alt="Image Here"
                            />
                        </AspectRatio>
                    </CardOverflow>
                    <CardContent>
                        <Typography fontWeight={"bold"} textColor="success.plainColor" >
                            {CardData.Title?CardData.Title:"Title Here"}
                        </Typography>
                        <Typography level="body-sm">Quiz 1</Typography>
                    </CardContent>
                    <CardOverflow
                        variant="soft"
                        color="primary"
                        sx={{
                            px: 0.2,
                            writingMode: 'vertical-rl',
                            justifyContent: 'center',
                            fontSize: 'xs',
                            fontWeight: 'xl',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            borderLeft: '1px solid',
                            borderColor: 'divider',
                            cursor:"pointer"
                        }} >
                        Start
                    </CardOverflow>
                </Card>

</Box>

            </Box>
:<>

</>
        }

{activeStep == 2 ?
<Box mt={5}>

<Box sx={{display:"flex" ,justifyContent:"center"}}>

<Box sx={{alignSelf:"center"}}>

 Card Creating
</Box>

<Divider sx={{width:"30%",mx:5,alignSelf:"center"}}/>
<Box sx={{px:5,py:1}} bgcolor={"success.main" } color="white" borderRadius={2}>
  COMPLETED
</Box>

</Box>

<Box sx={{display:"flex" ,justifyContent:"center" ,mt:2}}>

<Box sx={{alignSelf:"center"}}>

 Card Quiz
</Box>

<Divider sx={{width:"32.5%",mx:5,alignSelf:"center"}}/>
<Box sx={{px:5,py:1}} bgcolor={"success.main" } color="white" borderRadius={2}>
  COMPLETED
</Box>

</Box>
<Box sx={{display:"flex",alignItems:"center",alignContent:"center",mt:4,justifyContent:"center"}}>

<Box>


<Button variant='contained' onClick={Submitalldata} disabled={buttondis}>


  Submit
</Button>
</Box>
</Box>
</Box>
:<></>}


{activeStep == 1 ?
<CreateQuizPage sendBackQuizData={getset2Data}/>
:<></>
}

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              {/* <Button
                color="inherit"
                disabled={activeStep === -1}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button> */}
              <Box sx={{ flex: '1 1 auto' }} />
           
              {/* {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}

                      
                  </Button>
                ))} */}
{activeStep == 0 ?

<Button onClick={step1Check} variant='contained' >
{completedSteps() === totalSteps() - 1
  ? 'Finish'
  : 'Complete Step'}

  
</Button>

:<>
</>
}

            </Box>
          </React.Fragment>
        )}
      </div>







      <Snackbar open={fristStepWarning} autoHideDuration={6000} onClick={warningset1}>
        <Alert
          onClose={warningset1}
          severity="warning"
          variant="filled"
          sx={{ width: '100%' }}
        >
          All field must be field
        </Alert>
      </Snackbar>
    </Box>
  );
}
