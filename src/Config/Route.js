import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../Screen/MainPage";
import Announcement from "../Screen/AnnDisc/Announcement";
import StdDash from "../Screen/StdDash/StdDash";
import QuizApp from "../Screen/Quiz/Quiz";
import Signup from "../Screen/SignUp";
import Login from "../Screen/Login";
import TeacherLogin from "../Screen/TeacherLogin";
import StudentAnnouncement from "../Screen/AnnDisc/StudentAnnouncement";
import ShowResult from "../Screen/ProgressPage/Progress";

export default function AllRouters(){

    
 
    return(
<BrowserRouter>
<Routes>   
    <Route path="/" element={<MainPage />} /> 
    <Route path="/TeacherLogin" element={<TeacherLogin />} /> 
    <Route path="/SignUp" element={<Signup />} /> 
    <Route path="/Login" element={<Login />} /> 
    {/* /Complete */}
    
    <Route path="/getAnnouncement" element={<Announcement />} />
    <Route path="/Announcement" element={<StudentAnnouncement />} />
    <Route path="/progress" element={<ShowResult />} />
    
    <Route path="/getStdDash" element={<StdDash />} /> 
    <Route path="/Quiz" element={<QuizApp />} /> 
    
</Routes>
</BrowserRouter>
    )
}