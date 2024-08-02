import { Box, Typography } from "@mui/material";


import "../App.css"
import DynamicNavBar from "../Component/DynamicNavBar";

export default function MainPage(){

    return(
/// yah page aa qu raha hay esa? mujhe kya pta pr ase nh the bht acha bna howa tha bht. w8... apne folder ka path chng kia hy shyd is liye  .. dashbord vala thy na ?? hnn phir ? pta nh css dekhyn  

// 1m css qu use ky app tu material use kr rahe thy na ? ab theak krta hu 
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