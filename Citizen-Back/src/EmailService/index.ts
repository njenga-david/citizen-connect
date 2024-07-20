import mssql from 'mssql'
import ejs from 'ejs'
import { sqlConfig } from '../config'
import { log } from 'console'
import path from 'path'
import dotenv from 'dotenv'
import { sendEmail } from '../Helpers'
dotenv.config({path:path.resolve(__dirname,"../../.env")})


export interface User{
    userId:string,
    userImg:string,
    userName:string,
    userEmail:string,
    upassword:string,
    roleName:string,
    isDeleted:number,
    isEmailSent:number

}

export async function run(){
    try{
        let pool = await mssql.connect(sqlConfig)
        let users = await (await pool.request().query("SELECT * FROM Users WHERE isEmailSent=0")).recordset as User[]
        //console.log(users)
        users.forEach(user=>{

            // message option
            ejs.renderFile("../../Templates/register.ejs", {userName:user.userName}, async (error, data)=>{
                
                let messageOptions ={
                    to:user.userEmail,
                    from:process.env.userEmail,
                    subject:"Hello! Welcome to Citizen-Connect",
                    html:data
                    }
                    
                    await sendEmail(messageOptions)

                    await pool.request().query(`UPDATE Users SET isEmailSent=1 WHERE userId='${user.userId}'`)
             })
        })

    } catch (error){

    }
}