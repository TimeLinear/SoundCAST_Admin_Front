import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard";
import Member from "./Member";
import Music from "./Music";
import Statistics from "./Statistics";
import Report from "./Report";
import { useState } from "react";

export default function Admin(){

    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarCollapsed(prev => !prev);
    };

    return (
        <div className='admin-page'>
            <Sidebar isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar}/>
            <div className={`page-content ${isSidebarCollapsed ? 'collapsed' : ''}`}>
                <Routes>
                    <Route path='/' element={<Dashboard/>} />
                    <Route path='/dashboard' element={<Dashboard/>} />
                    <Route path='/member' element={<Member/>} />
                    <Route path='/music' element={<Music/>} />
                    <Route path='/report' element={<Report/>} />
                    <Route path='/statistics' element={<Statistics/>} />
                </Routes>
            </div>
        </div>
    )
}