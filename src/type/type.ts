export type Member = {
    userNo : number,
    nickName : string,
    profile : string,
    userStatus? : 1 | 2
}

export const initMember:Member = {
    userNo:0,
    nickName:'',
    profile:''
}