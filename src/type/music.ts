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