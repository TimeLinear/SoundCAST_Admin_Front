import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard";
import Member from "./Member";
import Music from "./Music";
import Statistics from "./Statistics";
import Report from "./Report";
import { useState } from "react";

export default function Admin(){

    const navi = useNavigate();

    const location = useLocation(); // 현재 경로를 가져오기 위한 훅

    const currentPath = location.pathname.split('/')[1];

    const [selectedMenu, setSelectedMenu] = useState(currentPath === '' ? 'dashboard' : currentPath);

    const handleMenuSelect = (menu: string) => {
        setSelectedMenu(menu);
        navi("/" + menu);
    };

    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarCollapsed(prev => !prev);
    };

    
    return (
        <div className='admin-page'>
            <Sidebar
                isCollapsed={isSidebarCollapsed}
                onToggle={toggleSidebar}
                selectedMenu={selectedMenu}
                onMenuSelect={handleMenuSelect}/>
            <div className={`page-content ${isSidebarCollapsed ? 'collapsed' : ''}`}>
                <Routes>
                    <Route path='/' element={<Dashboard onNavigateToReport={handleMenuSelect} />} />
                    <Route path='/dashboard' element={<Dashboard onNavigateToReport={handleMenuSelect}/>} />
                    <Route path='/member' element={<Member/>} />
                    <Route path='/music' element={<Music/>} />
                    <Route path='/report' element={<Report/>} />
                    <Route path='/statistics' element={<Statistics/>} />
                </Routes>
            </div>
        </div>
    )
}
