export interface DashboardMusicType{ //SongExt
    songImage : {
        songImagePathName:string,
        songImageName:string
    },
    songTitle : string,
    songNo : number,
    memberNickname : string
    genreName : string,
    moodName : string,
    songLicense : string,
    downloadCountNumber : number,
    songCreateDate : string
}
export interface MusicType{
    songPlaceNo: number,
    songTitle: string,
    memberNickname: string
    genreName: string
    moodName : string
    songCreateDate: string,
    songStatus: string,
    songNo : number
}

export type PlaceType = '전체'|'Official'|'UnOfficial'

export type MenuType = '음원명'|'아티스트명'
