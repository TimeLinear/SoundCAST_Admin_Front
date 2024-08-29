import { useEffect, useState } from 'react';
import './css/dashboard.css';
import axios from '../utils/CustomAxios';
import { DashboardMusicType } from '../type/music';
import { DashboardReportType } from '../type/report';
import { useNavigate } from 'react-router-dom';

interface DashboardProps {
    onNavigateToReport: (path:string) => void;
}

export default function Dashboard({ onNavigateToReport }: DashboardProps) {

    const [top5MusicItems, setTop5MusicItems] = useState<DashboardMusicType[]>([]);
    const [newMusicItems, setNewMusicItems] = useState<DashboardMusicType[]>([]);
    const [recentReportItems, setRecentReportItems] = useState<DashboardReportType[]>([]);

    // 최근 한달간 인기 있는 음원 Top5
    useEffect(() => {
        axios.get("http://localhost:8087/soundcast/song/top5Music")
            .then((response) => {
                setTop5MusicItems(response.data);
            })
            .catch((error) => {
                console.log(error);
            })

        return () => {
            //컴포넌트가 소멸될때 실행할 코드
            setTop5MusicItems([]);
        }
    }, [])

    // 최신 음원
    useEffect(() => {
        axios.get("http://localhost:8087/soundcast/song/newMusic")
            .then((response) => {
                setNewMusicItems(response.data);
            })
            .catch((error) => {
                console.log(error);
            })

        return () => {
            //컴포넌트가 소멸될때 실행할 코드
            setNewMusicItems([]);
        }
    }, [])

    // 최근 신고 내역
    useEffect(() => {
        axios.get("http://localhost:8087/soundcast/report/recentreport")
            .then((response) => {
                setRecentReportItems(response.data);
            })
            .catch((error) => {
                console.log(error);
            })

        return () => {
            //컴포넌트가 소멸될때 실행할 코드
            setRecentReportItems([]);
        }
    }, [])

    const formatDate = (dateString: string): string => {
        const [datePart] = dateString.split(" ");
        const [year, month, day] = datePart.split("-");
        return `${year.slice(2)}/${month}/${day}`;
    };

    return (
        <div className='dashboard-page'>

            <div className='dashboard-title-and-fourbox'>

                <p className='dashboard-title'>대시보드</p>

                <div className='dashboard-four-box'>
                    <div className='dashboard-first-second-box'>
                        <div className='dashboard-top5-music'>
                            <p className='dashboard-content-title'>최근 한달간 인기 있는 음원 Top 5</p>
                            <div className='dashboard-content-box'>

                                <ul className="dashboard-content-unorderedlist">
                                    {top5MusicItems.slice(0, 5).map((item, index) => (
                                        <li key={index} className='dashboard-content-list-with-rank'>

                                            <p className='dashboard-rank' style={{ marginRight: '10px' }}>
                                                {index + 1}
                                            </p>

                                            <div className='dashboard-content-list' style={{ width: '80%' }} onClick={() => window.location.href = `http://192.168.30.7:3000/song/detail/${item.songNo}`}>
                                                <img className='dashboard-content-list-img'
                                                    src={`http://localhost:8087/soundcast/resource/${item.songImage.songImagePathName}${item.songImage.songImageName}`} />
                                                <div className='dashboard-songtitle-artist-box'>
                                                    <p className='dashboard-songtitle' style={{ width: '100px' }}>
                                                        {item.songTitle}
                                                    </p>
                                                    <p className='dashboard-artist' style={{ width: '100px' }}>
                                                        {item.memberNickname}
                                                    </p>
                                                </div>
                                                <div className='dashboard-genre-mood-license-threebox'>
                                                    <div className='dashboard-genre-box'>
                                                        <p className='dashboard-genre'>
                                                            {item.genreName}
                                                        </p>
                                                    </div>
                                                    <div className='dashboard-mood-box'>
                                                        <p className='dashboard-mood'>
                                                            {item.moodName}
                                                        </p>
                                                    </div>
                                                    <img
                                                        className='dashboard-license-img'
                                                        src={item.songLicense ? "/images/license_y.png" : "/images/license_n.png"}
                                                    />
                                                </div>

                                            </div>

                                            <div className='dashboard-download-img-and-number-div'>
                                                <img className='dashboard-download-img' src='/images/download-button.png' style={{ marginLeft: '5px' }}></img>
                                                <div className='dashboard-download-number-div' style={{ marginRight: '5px' }}>
                                                    <p className='dashboard-download-number'>{item.downloadCountNumber}</p>
                                                </div>
                                            </div>

                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                        <div className='dashboard-new-music'>
                            <p className='dashboard-content-title'>최신 음원</p>
                            <div className='dashboard-content-box'>

                                <ul className="dashboard-content-unorderedlist">
                                    {newMusicItems.slice(0, 5).map((item, index) => (
                                        <li key={index} className='dashboard-content-list-with-rank'>

                                            <p className='dashboard-rank' style={{ marginRight: '10px' }}>
                                                {index + 1}
                                            </p>

                                            <div className='dashboard-content-list' style={{ width: '80%'}} onClick={() => window.location.href = `http://192.168.30.7:3000/song/detail/${item.songNo}`}>
                                                <img className='dashboard-content-list-img'
                                                    src={`http://localhost:8087/soundcast/resource/${item.songImage.songImagePathName}${item.songImage.songImageName}`} />
                                                <div className='dashboard-songtitle-artist-box'>
                                                    <p className='dashboard-songtitle' style={{ width: '100px' }}>
                                                        {item.songTitle}
                                                    </p>
                                                    <p className='dashboard-artist' style={{ width: '100px' }}>
                                                        {item.memberNickname}
                                                    </p>
                                                </div>
                                                <div className='dashboard-genre-mood-license-threebox'>
                                                    <div className='dashboard-genre-box'>
                                                        <p className='dashboard-genre'>
                                                            {item.genreName}
                                                        </p>
                                                    </div>
                                                    <div className='dashboard-mood-box'>
                                                        <p className='dashboard-mood'>
                                                            {item.moodName}
                                                        </p>
                                                    </div>
                                                    <img
                                                        className='dashboard-license-img'
                                                        src={item.songLicense ? "/images/license_y.png" : "/images/license_n.png"}
                                                    />
                                                </div>

                                            </div>

                                            <div className='dashboard-date-div'>
                                                <p className='dashboard-date'>{formatDate(item.songCreateDate)}</p>
                                            </div>

                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div className='dashboard-third-fourth-box'>
                        <div className='dashboard-recent-report'>
                            <p className='dashboard-content-title'>최근 신고 내역</p>
                            <div className='dashboard-content-box'>

                                <ul className="dashboard-content-unorderedlist">
                                    {recentReportItems.slice(0, 5).map((item, index) => (
                                        <li key={index} className='dashboard-content-list-with-rank'>

                                            <p className='dashboard-rank'>
                                                {index + 1}
                                            </p>

                                            <div className='dashboard-content-list' onClick={() => onNavigateToReport('report')}>
                                                <img className='dashboard-content-list-img'
                                                 src={`http://localhost:8087/soundcast/resource/${item.song.songImage.songImagePathName}${item.song.songImage.songImageName}`}/>
                                                <div className='dashboard-songtitle-artist-box'>
                                                    <p className='dashboard-songtitle'>
                                                        {item.song.songTitle}
                                                    </p>
                                                    <p className='dashboard-artist'>
                                                        {item.member.memberNickname}
                                                    </p>
                                                </div>

                                                {item.reportText.substring(0, 4) === "[기타]" ? (
                                                    <div className='dashboard-report-box etc'>
                                                        <p className='dashboard-report-text main'>
                                                            {item.reportText.substring(1, 3)}
                                                        </p>
                                                        <p className='dashboard-report-text sub'>
                                                            {item.reportText.substring(4).trim()}
                                                        </p>
                                                    </div>
                                                ) : (
                                                    <div className='dashboard-report-box'>
                                                        <p className='dashboard-report-text'>
                                                            {item.reportText}
                                                        </p>
                                                    </div>
                                                )}

                                            </div>

                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                        <div className='dashboard-daily-download-statistics'>
                            <p className='dashboard-content-title'>일별 다운로드 통계</p>
                            <div className='dashboard-content-box'>
                                <div className='dashboard-statistics'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}