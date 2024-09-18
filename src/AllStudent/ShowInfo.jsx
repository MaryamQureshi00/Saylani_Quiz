import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useLocation, useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
import DynamicNavBar from '../Component/DynamicNavBar';


export default function ShowInfo(){


    const {state} = useLocation();
    const {StudentId,name,email}=state

console.log(state)
    const [UserInfo,setUserInfo]= useState({
        _id:StudentId,
        username:name,
        contact_no:"sd",
        email:email	,
        password:"1231"
    })
    
    const [overallMark, setOverallMark] = useState(""); 
    const [progress,setProgress]= useState([])



    const callQuizData=()=>{
       
        // setUserInfo(studentData)

 
if(state){

    
    axios.get(`https://saylani-quiz-backend.vercel.app/api/quiz/studentShowresult?studentId=${StudentId}`)  
    .then(function (response) {
        console.log([...response.data]);
        
        //   setQuizData(response.data.QuizData)
        setProgress([...response.data])
        calculateOverallMark(response.data);
        
    })
    .catch(function (error) {
        console.log(error);
        
        
    });
    
}
      }
      
      useEffect(() => {
        
      callQuizData()
      
      }, [])


      const calculateOverallMark = (quizData) => {
        const totalScore = quizData.reduce((acc, quiz) => acc + quiz.TotalScore, 0);
        const totalObtained = quizData.reduce((acc, quiz) => acc + quiz.ObtainScore, 0);
        const percentage = (totalObtained / totalScore) * 100;

        if (percentage >= 80) {
            setOverallMark("Excellent");
        } else if (percentage >= 50) {
            setOverallMark("Good");
        }  else if (!percentage ){
            setOverallMark("NO TEST IS PERFORM");
        }
        
        else {
            setOverallMark("Bad");
        }
    };


    return(
        <div>


<DynamicNavBar side="Icon" />


<div style={{display:"flex",justifyContent:"space-between",paddingLeft:40,paddingRight:40,paddingTop:30,backgroundColor:"#dcefed", marginTop:80}}>

<div>

    <h1 style={{fontSize:29}}>
        Name: {UserInfo.username}
    </h1>
    <p style={{fontSize:18,color:"blue",display:"flex" ,alignItems:"center",}}>Test perform :<p style={{color:"black",marginLeft:10}}>{progress.length}</p></p>
    <p style={{fontSize:22}}>
        Mark:  {overallMark}
    </p>
</div>



    </div>
 
 <div style={{
    border: '1px solid black'
 }}> 

 </div>

{progress.length > 0?

progress.map((item,index)=>{

console.log(item)

let per = (item.ObtainScore / item.TotalScore)*100

console.log(per)
    return(

  

    <div style={{display:"flex",alignItems:"center",marginLeft:44 ,}}>

    <p style={{fontSize:22,fontWeight:"bold",marginRight:40,width:"20%",paddingTop:30}}>Quize {index+1}: {item.title} </p>

    <div style={{width:"100%"}}>
<p  style={{textAlign:"end", width:"60%" ,color:"#1976d3"}}>{item.ObtainScore}/{item.TotalScore}</p>
    <div style={{width:"60%",border:'solid lightblue 1',height:10,backgroundColor:"lightblue",borderRadius:23}}>
   <div style={{width:`${per}%`,height:10,backgroundColor:"blue" ,borderEndEndRadius:23,borderStartEndRadius:29}}>
   
    </div>
   </div>
   </div>



   <div>
  <div style={{backgroundColor: (item.ObtainScore / item.TotalScore) >= 0.7 ?"green" : "red" ,width:100 ,height:40,marginRight:30,alignItems:"center",textAlign:"center" ,alignContent:"center", borderRadius:4}}>

    <p style={{marginTop:8,color:"white"}}>{ (item.ObtainScore / item.TotalScore) >= 0.7 ?"Pass" : "Fail"}</p>
  </div>
   </div>
   <div>
   
   </div>
    </div>

)
})
    
  :<>

  <div style={{textAlign:"center"}}>

  <p>You have not perform a single Test yet</p>
  </div>
 </>}



        </div>
    )
}