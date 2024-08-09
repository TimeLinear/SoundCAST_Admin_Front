import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar(){

    const navi = useNavigate();

    const [sideMenuState, setSideMenuState] = useState('dashboard');
    const [hoveredItem, setHoveredItem] = useState<string | null>(null); // 호버 상태 관리'

    const menuSelect = (e:MouseEvent) => {
        const {value} = e.currentTarget as HTMLButtonElement;
        setSideMenuState(value);
        navi("/" + value);
    }

    const handleMouseEnter = (key: string) => {
      setHoveredItem(key); // 호버 상태 업데이트
    };
  
    const handleMouseLeave = () => {
      setHoveredItem(null); // 호버 상태 해제
    };

    const menuItems = [
        { key: "dashboard", label: "대시보드", iconPath: "/images/icon_dashboard_gray.png", hoverIconPath: "/images/icon_dashboard_purple.png"},
        { key: "member", label: "회원", iconPath: "/images/icon_member_gray.png", hoverIconPath: "/images/icon_member_purple.png"},
        { key: "music", label: "음원", iconPath: "/images/icon_music_gray.png", hoverIconPath: "/images/icon_music_purple.png"},
        { key: "report", label: "신고", iconPath: "/images/icon_report_gray.png", hoverIconPath: "/images/icon_report_purple.png"},
        { key: "statistics", label: "통계", iconPath: "/images/icon_statistics_gray.png", hoverIconPath: "/images/icon_statistics_purple.png"}
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
                  onMouseEnter={() => handleMouseEnter(item.key)} // 마우스 엔터 이벤트 핸들러
                  onMouseLeave={handleMouseLeave} // 마우스 리브 이벤트 핸들러
                >

                  <img className="dashboard-icon" src={
                    (sideMenuState === item.key || hoveredItem === item.key)
                      ? item.hoverIconPath
                      : item.iconPath
                    } // 호버 상태에 따라 아이콘 변경
                    alt="Icon"
                  />

                  <p className={`menu-name ${sideMenuState === item.key ? "selected" : ""}`}>
                    {item.label}
                  </p>

                </button>
              </li>
            ))}
          </ul>
        </div>
      );
}

