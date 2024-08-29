export interface MemberType{
    memberNo : number,
    memberProfileImgNo : number,
    memberNickname : string,
    memberEmail? : string
    profileImage : {
        profileImageNo:number,
        profileImagePath:string
    }
}

export type MenuType = 'No'|'닉네임'|'이메일'

export type SearchKeyword = {
    type : MenuType;
    searchTerm : string;
}