import { Request } from "express"

export interface ViewRequest extends Request{
    body:{
        userId:string
        viewContent:string
    }
}

export interface Views{
    viewId:string
    viewContent:string
}