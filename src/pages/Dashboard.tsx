import { useEffect, useState } from 'react';
import './css/dashboard.css';
import axios from '../utils/CustomAxios';
import { MusicType } from '../type/music';

export default function Dashboard(){

    // const top5Music = [
    //     {profileImg: "/images/mimikyu.png", title: "Du Du Doaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", artist: "Duaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", genre: "Jazz", mood: "펑키", license: "Y"},
    //     {profileImg: "/images/bono.jpg", title: "I Am The Best", artist: "Chan", genre: "Rock", mood: "화남", license: "N"},
    //     {profileImg: "/images/mimikyu.png", title: "Wanna Go Home", artist: "Gun", genre: "Pop", mood: "슬픔", license: "Y"},
    //     {profileImg: "/images/mimikyu.png", title: "Travel", artist: "Jin", genre: "Classical", mood: "밝음", license: "N"},
    //     {profileImg: "/images/mimikyu.png", title: "Mimikyu", artist: "Soo", genre: "Sound Track", mood: "행복", license: "N"},
    //     {profileImg: "/images/mimikyu.png", title: "Mimikyu", artist: "Soo", genre: "Sound Track", mood: "행복", license: "N"},
    //     {profileImg: "/images/mimikyu.png", title: "Mimikyu", artist: "Soo", genre: "Sound Track", mood: "행복", license: "N"}
    //   ];

    const [top5MusicItems, setTop5MusicItems] = useState<MusicType[]>([]);

    useEffect(()=>{
        axios.get("http://localhost:8087/soundcast/song/top5Music")
        .then((response) => {
            setTop5MusicItems(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
        return() => {
            //컴포넌트가 소멸될때 실행할 코드
            setTop5MusicItems([]);
        }
    },[])

    const newMusic = [
        {profileImg: "/images/mimikyu.png", title: "Du Du Do", artist: "Du", genre: "Jazz", mood: "펑키", license: "Y"},
        {profileImg: "/images/mimikyu.png", title: "I Am The Best", artist: "Chan", genre: "Rock", mood: "화남", license: "N"},
        {profileImg: "/images/mimikyu.png", title: "Wanna Go Home", artist: "Gun", genre: "Pop", mood: "슬픔", license: "Y"}
    ]

    const recentReport = [
        {profileImg: "/images/mimikyu.png", title: "Du Du Do", artist: "Du", reportText: "음원이 아닌 파일 업로드"},
        {profileImg: "/images/mimikyu.png", title: "I Am The Best", artist: "Chan", reportText: "타인의 저작물 도용"},
        {profileImg: "/images/mimikyu.png", title: "I Am The Best", artist: "Chan", reportText: "폭력적 혹은 혐오스러운 컨텐츠"},
        {profileImg: "/images/mimikyu.png", title: "Wanna Go Home", artist: "Gun", reportText: "[기타]아이가 듣기 좋지 않아요aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}
    ]

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

                                        <p className='rank'>
                                            {index+1}
                                        </p>

                                        <div className='content-list'>
                                            <img className='content-list-img' src={item.songImage.songImagePathName}/>
                                            <div className='title-artist-box'>
                                                <p className='title'>
                                                    {item.songTitle}
                                                </p>
                                                <p className='artist'>
                                                    {item.memberNickname}
                                                </p>
                                            </div>
                                            <div className='genre-mood-license-threebox'>
                                                <div className='genre-box'>
                                                    <p className='genre'>
                                                        {item.genre}
                                                    </p>
                                                </div>
                                                <div className='mood-box'>
                                                    <p className='mood'>
                                                        {item.mood}
                                                    </p>
                                                </div>
                                                <img 
                                                    className='license-img'
                                                    src={item.songLicense ? "/images/license_y.png" : "/images/license_n.png"}
                                                />
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
                                    {newMusic.slice(0, 5).map((item, index) => (
                                    <li className='content-list-with-rank'>

                                        <p className='rank'>
                                            {index+1}
                                        </p>

                                        <div className='content-list'>
                                            <img className='content-list-img' src={item.profileImg}/>
                                            <div className='title-artist-box'>
                                                <p className='title'>
                                                    {item.title}
                                                </p>
                                                <p className='artist'>
                                                    {item.artist}
                                                </p>
                                            </div>
                                            <div className='genre-mood-license-threebox'>
                                                <div className='genre-box'>
                                                    <p className='genre'>
                                                        {item.genre}
                                                    </p>
                                                </div>
                                                <div className='mood-box'>
                                                    <p className='mood'>
                                                        {item.mood}
                                                    </p>
                                                </div>
                                                <img 
                                                    className='license-img'
                                                    src={item.license === "Y" ? "/images/license_y.png" : "/images/license_n.png"}
                                                />
                                            </div>
                                            
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
                                    {recentReport.slice(0, 5).map((item, index) => (
                                    <li className='content-list-with-rank'>

                                        <p className='rank'>
                                            {index+1}
                                        </p>

                                        <div className='content-list'>
                                            <img className='content-list-img' src={item.profileImg}/>
                                            <div className='title-artist-box'>
                                                <p className='title'>
                                                    {item.title}
                                                </p>
                                                <p className='artist'>
                                                    {item.artist}
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