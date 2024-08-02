import React, { useState } from "react";
import "../LoginSignup.css"
import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdMarkEmailRead } from "react-icons/md";
import DynamicNavBar from "../Component/DynamicNavBar";

 const Login = () => {
    const [Name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    // here the function for handle form submission 

    
    const handleSubmit = async (e) => {
        console.log(Name, email, password)
        e.preventDefault();
        try {
            const response = {  Name, email, password }
            console.log('Signed in successfully');
            console.log(response);
        } catch (error) {
            console.log(error.response.data.error);
        }
        

    // Input fields clear karen
    setEmail('');
    setpassword('');
    setName('');
    };
    return (
      <>
   <div>
    <DynamicNavBar side={"no"} />
<div className="login-outer">

    
         <div className="main">
            <h1 style={{textAlign:"center"}}>Login </h1>
            <form onSubmit={handleSubmit}>
             <div className="input-group">
             <input type="text"
             placeholder="username"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    required />
             <FaRegUserCircle className="icon" />
             </div>
<div className="input-group">
                <input type="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    required />
                     <RiLockPasswordFill className="icon" />
</div>
<div className="input-group">
                <input type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                   < MdMarkEmailRead className="icon" />
</div>
      <button type="submit" 
      >Login</button>
      {/* <Link href="/signup" >
                {"Don't have an account? Sign Up"}
              </Link> */}
        </form >
        </div>
        </div>  

        
   </div>
          </>
    )
}

export default Login
