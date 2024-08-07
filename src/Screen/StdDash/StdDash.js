import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Stack, Button, IconButton } from '@mui/material';
import logo from '../Images/Logo.png';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CircularProgress from '@mui/material/CircularProgress';
import DynamicNavBar from '../../Component/DynamicNavBar';
import axios from 'axios';

const StdDash = () => {
    const [open, setOpen] = React.useState(false);
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
    axios.get(`https://smitbackend.vercel.app/getcard`)  
    .then(function (response) {
      console.log(response.data.QuizData);

      setCardValue(response.data.QuizData)

    })
    .catch(function (error) {
      console.log(error);



    });

}
const userinfo = ()=>{
    const savedData = localStorage.getItem('User');

console.log(JSON.parse(savedData))
setUserInfo(JSON.parse(savedData))
}


useEffect(() => {
    userinfo()
    GetCardData()
 
}, [])



console.log(UserInfo)
    return (
        <div>
        <DynamicNavBar side="Icon" StudentShow={"Student"}/>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '120px', textDecoration: 'underline' }}>
                <div>
                    <Typography variant="h4" component="div">
                        Welcome to Student Quiz Portal
                    </Typography>
                </div>
            </div>

            <div >
                <Typography variant="h5" component="div" style={{ marginTop: '5%', textDecoration: 'underline', padding: '6px' }}>
                    Hi, {UserInfo.username? UserInfo.username: <CircularProgress size={20}/>}
                </Typography>
            </div>


            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' , marginTop: '2%' }}>


{cardValue.length >0?
    cardValue.map((item,index)=>{
        return(
                <Card orientation="horizontal" variant="outlined" sx={{ width: 260 }} >
                    <CardOverflow>
                        <AspectRatio ratio="1" sx={{ width: 90 }}>
                            <img
                                src={item.image}
                                srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                                loading="lazy"
                                alt=""
                            />
                        </AspectRatio>
                    </CardOverflow>
                    <CardContent>
                        <Typography fontWeight="md" textColor="success.plainColor">
                            {item.title}
                        </Typography>
                        <Typography level="body-sm">Quiz 01</Typography>
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
                        }} onClick={()=>{navigation("/Quiz",{state:{obj:item._id}})}}>
                        Start
                    </CardOverflow>
                </Card>
            
        )
    })


    :<>
    </>
}




            </div>

          



        </div>
    )
}

export default StdDash
