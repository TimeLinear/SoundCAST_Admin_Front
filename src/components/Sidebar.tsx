import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar(){

    const navi = useNavigate();

    const [sideMenuState, setSideMenuState] = useState('dashboard');

    const menuSelect = (e:MouseEvent) => {
        const {value} = e.target as HTMLButtonElement;
        setSideMenuState(value);
        navi("/" + value);
    }

    const menuItems = [
        { key: "dashboard", label: "대시보드" },
        { key: "member", label: "회원" },
        { key: "music", label: "음원" },
        { key: "report", label: "신고" },
        { key: "statistics", label: "통계" },
      ];
    
      return (
        <div className="sidebar">
          <div className="logobox">
            <p>ADMIN</p>
            <img src="/images/soundcasttextlogo.png" alt="" />
          </div>
    
          <ul className="menu">
            {menuItems.map((item) => (
              <li key={item.key}>
                <button
                  className={`menu-button ${item.key}-menu-button ${
                    sideMenuState === item.key ? "selected" : ""
                  }`}
                  value={item.key}
                  onClick={menuSelect}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
}

