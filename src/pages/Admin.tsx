import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard";
import Member from "./Member";
import Music from "./Music";
import Statistics from "./Statistics";
import Report from "./Report";

export default function Admin(){
    return (
        <div className='admin'>

            <Sidebar/>

            <Routes>
                <Route path='/' element={<Dashboard/>} />
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/member' element={<Member/>} />
                <Route path='/music' element={<Music/>} />
                <Route path='/report' element={<Report/>} />
                <Route path='/statistics' element={<Statistics/>} />
            </Routes>

        </div>
    )
}