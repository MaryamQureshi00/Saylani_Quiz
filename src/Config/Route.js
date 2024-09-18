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
import AllStudentTable from "../AllStudent/AllStudent";
import ShowInfo from "../AllStudent/ShowInfo";
import RecipeReviewCard from "../Screen/CreateQuiz/CreateCard";
import AdminDash from "../Screen/StdDash/adminDash";
import AdminQuizCheck from "../Screen/Quiz/AdminQuizCheck";


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
    <Route path="/ShowInfo" element={<ShowInfo />} />
    
    <Route path="/getallstudent" element={<AllStudentTable />} />

    
    <Route path="/getStdDash" element={<StdDash />} /> 
    <Route path="/Admindash" element={<AdminDash />} /> 


    <Route path="/Quiz" element={<QuizApp />} /> 

    <Route path="/AdminCheck" element={<AdminQuizCheck />} /> 

    {/* AdminQuizCheck */}
    <Route path="/CreateQuiz" element={<RecipeReviewCard/>} /> 
    
    
</Routes>
</BrowserRouter>
    )
}