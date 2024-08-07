import { Box, Typography } from "@mui/material";


import "../App.css"
import DynamicNavBar from "../Component/DynamicNavBar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage(){


    const navigation = useNavigate()

const userinfo = ()=>{
    const savedData = localStorage.getItem('User');

console.log(JSON.parse(savedData))

if(savedData){
navigation("/getStdDash",{ replace: true })
}

}


useEffect(() => {
    userinfo()
  
 
}, [])



    return(

        <div>
              <DynamicNavBar  side="Main"/>
              <div className='compDiv'>
      <Typography className='mainHeading' variant="h3">
      Welcome to Saylani Quiz Portal!
      </Typography>
      <Typography className='mainText' variant="h5">
      Get ready to challenge yourself and enhance your skills with our interactive quizzes designed to test your knowledge and help you grow.


      </Typography>
    </div>

        </div>
    )
}