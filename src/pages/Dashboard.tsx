import { useEffect, useState } from 'react';
import './css/dashboard.css';
import axios from '../utils/CustomAxios';
import { DashboardMusicType } from '../type/music';
import { DashboardReportType } from '../type/report';

export default function Dashboard() {

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

                <div className='four-box'>
                    <div className='first-second-box'>
                        <div className='top5-music'>
                            <p className='content-title'>최근 한달간 인기 있는 음원 Top 5</p>
                            <div className='content-box'>

                                <ul className="content-unorderedlist">
                                    {top5MusicItems.slice(0, 5).map((item, index) => (
                                        <li className='content-list-with-rank'>

                                            <p className='dashboard-rank' style={{ marginRight: '10px' }}>
                                                {index + 1}
                                            </p>

                                            <div className='content-list' style={{ width: '80%' }}>
                                                <img className='content-list-img'
                                                    src={`http://localhost:8087/soundcast/resource/${item.songImage.songImagePathName}${item.songImage.songImageName}`} />
                                                <div className='title-artist-box'>
                                                    <p className='title' style={{ width: '100px' }}>
                                                        {item.songTitle}
                                                    </p>
                                                    <p className='artist' style={{ width: '100px' }}>
                                                        {item.memberNickname}
                                                    </p>
                                                </div>
                                                <div className='genre-mood-license-threebox'>
                                                    <div className='genre-box'>
                                                        <p className='genre'>
                                                            {item.genreName}
                                                        </p>
                                                    </div>
                                                    <div className='mood-box'>
                                                        <p className='mood'>
                                                            {item.moodName}
                                                        </p>
                                                    </div>
                                                    <img
                                                        className='license-img'
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
                        <div className='new-music'>
                            <p className='content-title'>최신 음원</p>
                            <div className='content-box'>

                                <ul className="content-unorderedlist">
                                    {newMusicItems.slice(0, 5).map((item, index) => (
                                        <li className='content-list-with-rank'>

                                            <p className='dashboard-rank' style={{ marginRight: '10px' }}>
                                                {index + 1}
                                            </p>

                                            <div className='content-list' style={{ width: '80%'}}>
                                                <img className='content-list-img'
                                                    src={`http://localhost:8087/soundcast/resource/${item.songImage.songImagePathName}${item.songImage.songImageName}`} />
                                                <div className='title-artist-box'>
                                                    <p className='title' style={{ width: '100px' }}>
                                                        {item.songTitle}
                                                    </p>
                                                    <p className='artist' style={{ width: '100px' }}>
                                                        {item.memberNickname}
                                                    </p>
                                                </div>
                                                <div className='genre-mood-license-threebox'>
                                                    <div className='genre-box'>
                                                        <p className='genre'>
                                                            {item.genreName}
                                                        </p>
                                                    </div>
                                                    <div className='mood-box'>
                                                        <p className='mood'>
                                                            {item.moodName}
                                                        </p>
                                                    </div>
                                                    <img
                                                        className='license-img'
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

                    <div className='third-fourth-box'>
                        <div className='recent-report'>
                            <p className='content-title'>최근 신고 내역</p>
                            <div className='content-box'>

                                <ul className="content-unorderedlist">
                                    {recentReportItems.slice(0, 5).map((item, index) => (
                                        <li className='content-list-with-rank'>

                                            <p className='dashboard-rank'>
                                                {index + 1}
                                            </p>

                                            <div className='content-list'>
                                                <img className='content-list-img'
                                                 src={`http://localhost:8087/soundcast/resource/${item.song.songImage.songImagePathName}${item.song.songImage.songImageName}`}/>
                                                <div className='title-artist-box'>
                                                    <p className='title'>
                                                        {item.song.songTitle}
                                                    </p>
                                                    <p className='artist'>
                                                        {item.member.memberNickname}
                                                    </p>
                                                </div>

                                                {item.reportText.substring(0, 4) === "[기타]" ? (
                                                    <div className='report-box etc'>
                                                        <p className='report-text main'>
                                                            {item.reportText.substring(1, 3)}
                                                        </p>
                                                        <p className='report-text sub'>
                                                            {item.reportText.substring(4).trim()}
                                                        </p>
                                                    </div>
                                                ) : (
                                                    <div className='report-box'>
                                                        <p className='report-text'>
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
                        <div className='daily-download-statistics'>
                            <p className='content-title'>일별 다운로드 통계</p>
                            <div className='content-box'>
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