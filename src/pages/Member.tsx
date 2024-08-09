import { useRef, useState } from 'react';
import './css/member.css';

export default function Member(){

    const [dropShow ,setDropShow] = useState(false);

    const dropChange = () => {
        setDropShow(!dropShow);

    }

    return (
        <div className='member-page'>
            <p className='member-title'>회원</p>
            <div className='member-content-box'>
                <div className='member-content'>

                    { /* 누를 시 나오는 커스텀 드롭다운 */
                        (dropShow &&
                        
                        <div className='member-custom-selectbox-dropdown'>
                            
                            <button className='member-no-button'>
                                <p className='member-no'>No</p>
                            </button>

                            <button className='member-nickname-button'>
                                <p className='member-nickname'>닉네임</p>
                            </button>

                            <button className='member-email-button'>
                                <p className='member-email'>이메일</p>
                            </button>
                        
                        </div>)
                        
                    }

                    <div className='member-bar-box'>

                        <div className='member-custom-selectbox' onClick={dropChange}>
                            <p className='member-selectbox-name'>닉네임</p>
                            <p className='member-selectbox-icon'>{dropShow ? '▲' : '▼'}</p>
                        </div>

                        <input className='member-input'></input>

                        <button className='member-search-button'>
                            <p className='member-search-button-name'>검색</p>
                        </button>
                    </div>

                    <div className='member-list-box'>

                    </div>

                    <div className='member-paging-and-button'>

                    </div>
                </div>
            </div>
        </div>
    )
}