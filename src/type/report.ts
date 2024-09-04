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