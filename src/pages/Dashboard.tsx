import './css/dashboard.css';

export default function Dashboard(){

    const top5Music = [
        {rank: 1, profileImg: "/images/mimikyu.png", title: "Du Du Do", artist: "Du", genre: "Jazz", mood: "펑키", license: "Y"},
        {rank: 2, profileImg: "/images/mimikyu.png", title: "I Am The Best", artist: "Chan", genre: "Rock", mood: "화남", license: "N"},
        {rank: 3, profileImg: "/images/mimikyu.png", title: "Wanna Go Home", artist: "Gun", genre: "Pop", mood: "슬픔", license: "Y"},
        {rank: 4, profileImg: "/images/mimikyu.png", title: "Travel", artist: "Jin", genre: "Classical", mood: "밝음", license: "N"},
        {rank: 5, profileImg: "/images/mimikyu.png", title: "Mimikyu", artist: "Soo", genre: "Sound Track", mood: "행복", license: "N"},
        {rank: 6, profileImg: "/images/mimikyu.png", title: "Mimikyu", artist: "Soo", genre: "Sound Track", mood: "행복", license: "N"},
        {rank: 7, profileImg: "/images/mimikyu.png", title: "Mimikyu", artist: "Soo", genre: "Sound Track", mood: "행복", license: "N"}
      ];

    const newMusic = [
        {rank: 1, profileImg: "/images/mimikyu.png", title: "Du Du Do", artist: "Du", genre: "Jazz", mood: "펑키", license: "Y"},
        {rank: 2, profileImg: "/images/mimikyu.png", title: "I Am The Best", artist: "Chan", genre: "Rock", mood: "화남", license: "N"},
        {rank: 3, profileImg: "/images/mimikyu.png", title: "Wanna Go Home", artist: "Gun", genre: "Pop", mood: "슬픔", license: "Y"}
    ]

    return (
        <div className='dashboard'>
            <p className='dashboard-title'>대시보드</p>

                <div className='dashboard-title-div'>
                </div>

                <div className='four-box'>
                    <div className='first-second-box'>
                        <div className='top5-music'>
                            <p className='content-title'>최근 한달간 인기 있는 음원 Top 5</p>
                            <div className='content-box'>

                                <ul className="content-unorderedlist">
                                    {top5Music.slice(0, 5).map((item, index) => (
                                    <li className='content-list-with-rank'>

                                        <p className='rank'>
                                            {index+1}
                                        </p>

                                        <div className='content-list'>
                                            <img className='content-list-img' src={`${item.profileImg}`}/>
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
                        <div className='new-music'>
                            <p className='content-title'>최신 음원</p>
                            <div className='content-box'>

                                <ul className="content-unorderedlist">
                                    {newMusic.slice(0, 5).map((item) => (
                                    <li className='content-list-with-rank'>

                                        <p className='rank'>
                                            {item.rank}
                                        </p>

                                        <div className='content-list'>
                                            <img className='content-list-img' src={`${item.profileImg}`}/>
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
                                <div className='content-box'>

                                    <ul className="content-unorderedlist">
                                        {top5Music.slice(0, 5).map((item) => (
                                        <li className='content-list-with-rank'>

                                            <p className='rank'>
                                                {item.rank}
                                            </p>

                                            <div className='content-list'>
                                                <img className='content-list-img' src={`${item.profileImg}`}/>
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
                        <div className='daily-download-statistics'>
                            <p className='content-title'>일별 다운로드 통계</p>
                            <div className='content-box'>
                                
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}