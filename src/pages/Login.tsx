import React, { useState } from 'react';
import './css/login.css';

const Login: React.FC = () => {
    const [adminId, setAdminId] = useState('');
    const [adminPassword, setAdminPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        
        console.log('Admin ID:', adminId);
        console.log('Admin Password:', adminPassword);
    };

    return (
        <div className="login-background">
            <div className="login-container">
                <img className="soundcast-font" alt="soundcast-font" src="/images/soundcast-font.png"/>
                <form className="form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label className='label' htmlFor="adminId">관리자 아이디</label>
                        <input 
                            className='input'
                            type="text" 
                            id="adminId" 
                            value={adminId} 
                            onChange={(e) => setAdminId(e.target.value)} 
                            placeholder="아이디를 입력하세요." 
                        />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="adminPassword">관리자 비밀번호</label>
                        <input 
                            className='input'
                            type="password" 
                            id="adminPassword" 
                            value={adminPassword} 
                            onChange={(e) => setAdminPassword(e.target.value)} 
                            placeholder="비밀번호를 입력하세요." 
                        />
                    </div>
                    <button className='button' type="submit">Log In</button>
                    <div className="soundcast-logo">
                        <img className="soundcast-logo" alt="soundcast-logo" src="/images/image.png"/>
                        <img className="soundcast-font2" alt="soundcast-font" src="/images/soundcast-font.png"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
