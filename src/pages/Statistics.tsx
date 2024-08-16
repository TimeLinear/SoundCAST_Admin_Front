import { useState } from 'react';
import './css/statistics.css';

export default function Statistics(){

    const [isShow, setIsShow] = useState('download');

    return (
        <div className='statistics-page'>
            <div className='statistics-title-and-buttons-and-contentbox'>

                <p className='statistics-title'>통계</p>

                <div className='statistics-buttons'>
                    <button
                    className={`statistics-button-common-css statistics-button-download
                    ${isShow === 'download' ? 'selected4' : ''}`}
                    onClick={() => {setIsShow('download')}}
                    >
                        <p className='statistics-p-common-css'>다운로드</p>
                    </button>
                    <button
                    className={`statistics-button-common-css statistics-button-visitant
                    ${isShow === 'visitant' ? 'selected4' : ''}`}
                    onClick={() => {setIsShow('visitant')}}
                    >
                        <p className='statistics-p-common-css'>방문자</p>
                    </button>
                </div>          

                <div className='statistics-content-box'>
                    <div className='statistics-content'>
                        {isShow === 'download' ? (
                            <div className='statistics-download'>
                                다운로드 통계 API 들어갈 자리
                            </div>
                        ) : (
                            <div className='statistics-visitant'>
                                방문자 통계 API 들어갈 자리
                            </div>
                        )}
                    </div>
                </div>
                
            </div>
        </div>
    )
}