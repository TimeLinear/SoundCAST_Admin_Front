export interface Membertype{
    memberNo : number,
    memberProfileImgNo : number,
    memberNickname : string,
    memberEmail? : string
    profileImage : {
        profileImageNo:number,
        profileImagePath:string
    }
}