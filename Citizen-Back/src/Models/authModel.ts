export interface User{
    userId:string,
    userImg: string,
    userName:string,
    userEmail:string,
    roleName: string,
    upassword:string,
    isDeleted:number,
    isEmailSent:number

}

export interface Payload{

    Sub:string,
    userName:string

}


