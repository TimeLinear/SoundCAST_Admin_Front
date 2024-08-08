import './css/dashboard.css';

export default function Dashboard(){
    return (
        <div className='dashboard'>
            <p className='dashboard-title'>대시보드</p>

                <div className='dashboard-title-div'>
                </div>

                <div className='four-box'>
                    <div className='first-second-box'>
                        <div className='top5-music'>
                            <p className='content-title'>최근 한달간 인기 있는 음원</p>
                        </div>
                        <div className='new-music'>
                            <p>최신 음원</p>
                        </div>
                    </div>

                    <div className='third-fourth-box'>
                        <div className='recent-report'>
                            <p className='content-title'>최근 신고 내역</p>
                        </div>
                        <div className='daily-download-statistics'>
                            <p className='content-title'>일별 다운로드 통계</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}