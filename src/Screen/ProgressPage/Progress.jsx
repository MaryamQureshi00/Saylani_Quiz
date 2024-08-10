import axios from 'axios';
import React, { useEffect, useState } from 'react';

import DynamicNavBar from '../../Component/DynamicNavBar';


export default function ShowResult(){


    return(
        <div>


<DynamicNavBar side="Icon" StudentShow={"Student"}/>


<div style={{display:"flex",justifyContent:"space-between",paddingLeft:40,paddingRight:40,paddingTop:30,backgroundColor:"#dcefed", marginTop:90}}>

<div>

    <h1 style={{fontSize:29}}>
        Name: Layba
    </h1>
    <p style={{fontSize:18,color:"blue",display:"flex" ,alignItems:"center",}}>Test perform :<p style={{color:"black",marginLeft:10}}>3</p></p>
    <p style={{fontSize:22}}>
        Mark: GOOD
    </p>
</div>



    </div>
 
 <div style={{
    border: '1px solid black'
 }}> 

 </div>

<div style={{display:"flex",alignItems:"center",marginLeft:44}}>

 <p style={{fontSize:22,fontWeight:"bold",marginRight:40}}>Quize 1: Javascript </p>
 <div style={{width:"60%",border:'solid lightblue 1',height:10,backgroundColor:"lightblue",borderRadius:23}}>
<div style={{width:"80%",height:10,backgroundColor:"blue"}}>

</div>
</div>
<div>

</div>
 </div>


 <div style={{display:"flex",alignItems:"center",marginLeft:44}}>

 <p style={{fontSize:22,fontWeight:"bold",marginRight:40}}>Quize 2: Javascript </p>
 <div style={{width:"60%",border:'solid lightblue 1',height:10,backgroundColor:"lightblue",borderRadius:23}}>
<div style={{width:"50%",height:10,backgroundColor:"blue"}}>

</div>
</div>
<div>

</div>
 </div>
 <div style={{display:"flex",alignItems:"center",marginLeft:44}}>

 <p style={{fontSize:22,fontWeight:"bold",marginRight:40}}>Quize 1: Javascript </p>
 <div style={{width:"60%",border:'solid lightblue 1',height:10,backgroundColor:"lightblue",borderRadius:23}}>
<div style={{width:"70%",height:10,backgroundColor:"blue"}}>

</div>
</div>
<div>

</div>
 </div>
        </div>
    )
}