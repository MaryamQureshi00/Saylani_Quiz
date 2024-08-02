import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../Screen/MainPage";
import Announcement from "../Screen/AnnDisc/Announcement";
import StdDash from "../Screen/StdDash/StdDash";
import QuizApp from "../Screen/Quiz/Quiz";
import Signup from "../Screen/SignUp";
import Login from "../Screen/Login";

export default function AllRouters(){

    
 
    return(
<BrowserRouter>
<Routes>   
    <Route path="/" element={<MainPage />} /> 
    <Route path="/getAnnouncement" element={<Announcement />} />
    <Route path="/getStdDash" element={<StdDash />} /> 
    <Route path="/Quiz" element={<QuizApp />} /> 
    <Route path="/SignUp" element={<Signup />} /> 
    <Route path="/Login" element={<Login />} /> 
    
</Routes>
</BrowserRouter>
    )
}