import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../Screen/MainPage";
import Announcement from "../Screen/AnnDisc/Announcement";
import StdDash from "../Screen/StdDash/StdDash";

export default function AllRouters(){

    
 
    return(
<BrowserRouter>
<Routes>   
    <Route path="/" element={<MainPage />} /> 
    <Route path="/getAnnouncement" element={<Announcement />} />
    <Route path="/getStdDash" element={<StdDash />} /> 
</Routes>
</BrowserRouter>
    )
}