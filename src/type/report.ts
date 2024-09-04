export interface DashboardReportType {
    song : {
        songImage : {
            songImageName : string,
            songImagePathName : string
        }
        songTitle : string
    },
    member : {
        memberNickname : string
    },
    reportText : string
}
export interface ReportType {
    length: number //ReportExt 타입 ReportExt안에 MemberExt랑 SongExt가 있음
    reportNo: number, // 신고 번호 => Report
    songTitle: string, // 신고된 음원 제목 => SongExt => Song
    member : {
        memberNickname: string
    }, //  신고 받은 음원의 닉네임=> MemberExt => Member
    reportMemberNickname : string, // 신고한 회원의 닉네임 => Report
    reportText: string, // 신고 내용 => Report
    reportDate: string, // 신고 날짜 => Report
    status: string // 신고 처리 여부 => Report
}

export type MenuType = '전체'|'미처리'

export type statusType = '미처리'|'처리 완료'
