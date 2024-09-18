import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Stack, Button, IconButton, Slide, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import logo from '../Images/Logo.png';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CircularProgress from '@mui/material/CircularProgress';
import DynamicNavBar from '../../Component/DynamicNavBar';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';




const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


 

  
const AdminDash = () => {
    const [open, setOpen] = React.useState(false);

   
    const [deleteId, setdeteId] = React.useState();

 const  [buttondis,setbuttondis] = React.useState(false);
    const [deleteopen, setdeleteOpen] = React.useState(false);

    const handleClickOpen = (id) => {

        console.log("id",id)
        setdeteId(id)
        setdeleteOpen(true);
    };
  
    const handleClose = () => {
        setdeleteOpen(false);
    };


    const navigation = useNavigate()
const [cardValue,setCardValue]= useState([])
const [UserInfo,setUserInfo]= useState({
    _id:"",
    username:"",
    contact_no:"",
    email:"",
    password:""
})


const GetCardData = ()=>{
    axios.get(`https://saylani-quiz-backend.vercel.app/getcard`)  
    .then(function (response) {
      console.log(response.data.QuizData);

      setCardValue(response.data.QuizData)

    })
    .catch(function (error) {
      console.log(error);



    });

}


useEffect(() => {

    GetCardData()
 
}, [])


const deleteCard = ()=>{
    setbuttondis(true)
    axios.get(`https://saylani-quiz-backend.vercel.app/deleteQuizCard?cardId=${deleteId}`)  
    .then(function (response) {
    
      setbuttondis(false)
      GetCardData()

    })
    .catch(function (error) {
      console.log(error);
      setbuttondis(false)


    });

}



console.log(UserInfo)
    return (
        <div>
        <DynamicNavBar side="Icon" StudentShow={"icon"}/>



            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' , marginTop: '2%' , flexWrap:"wrap" ,marginTop:"10%" }}>


{cardValue.length >0?
    cardValue.map((item,index)=>{

// console.log(item)

        return(
                <Card orientation="horizontal" variant="outlined" sx={{ height:118,width: 290 ,marginX:2,mb:1 ,position:"relative"}} >
                    <CardOverflow>
                        <AspectRatio ratio="1" sx={{ width: 150 }}>
                            <img
                                src={item.image}
                                // srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                                loading="lazy"
                                alt=""
                            />
                        </AspectRatio>
                    </CardOverflow>
                    <CardContent>
                        <Typography fontWeight={"bold"} textColor="success.plainColor" >
                            {item.title}
                        </Typography>
                        <Typography level="body-sm">Quiz {index +1}</Typography>
                    </CardContent>
                        <IconButton
                            aria-label="delete"
                            sx={{
                                position: 'absolute',
                                top: 4,   // Adjusted to position it better
                                right: 15, // Adjusted to position it better
                                zIndex: 10, // Ensures it stays above other elements
                                width:30,
                                height:30
                                
                            }}
                            color="error"
                            onClick={() => handleClickOpen(item._id)} // Define your handleDelete function to delete the item
                        >
                            <DeleteIcon />
                        </IconButton>
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
                        }} onClick={()=>{navigation("/Quiz",{state:{obj:item._id,title:item.title,studentId:UserInfo._id}})}}>
                        Start
                    </CardOverflow>

                </Card>
            
        )
    })


    :<>
    </>
}




            </div>
            <React.Fragment>
   
      <Dialog
        open={deleteopen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Are you sure"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            You can not undo after deleting quiz card. It will also delete quiz data 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={deleteCard}   disabled={buttondis}>Agree</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
          



        </div>
    )
}

export default AdminDash
