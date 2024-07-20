import {Request, Response, RequestHandler} from 'express'
import {v4 as uid} from 'uuid' 
import { sqlConfig } from '../config'
import mssql from 'mssql'
import { error } from 'console'
import { DbHelper } from '../DatabaseHelpers'
import { PollSchema } from '../inputValidation/pollValidation'
import { PollRequest, Polls } from '../Models/pollModel'

const dbInstance = new DbHelper()

export const addPoll = async(req:PollRequest, res:Response)=>{
    try{
        const id = uid()
        
        console.log(req.body);

        //input validation
        const {error} = PollSchema.validate(req.body)
        if (error){
            return res.status(500).json("Poll Input Validation Failed!")
        }
            
        const {userId, pollQuestion, pollOption, pollStatus} = req.body

        if (!userId || !pollQuestion || !pollOption || !pollStatus) {
            return res.status(400).json({message: "All fields are required"});
        }

        await dbInstance.exec("addPoll",{
            userId:id, 
            pollQuestion:pollQuestion,
            pollOption: pollOption,
            pollStatus: pollStatus
        })

        return res.status(201).json({mesage: "Poll Created"})

    }catch (error){

        return res.status(500).json(error)

    }   
}

export const getPoll = async(req:Request<{id:string}>,res:Response) =>{
    try{
        const poll = (await dbInstance.exec('getPoll', {pollId:req.params.id})).recordset[0] as Polls

        res.status(200).json(poll)

    }catch (error){
        res.status(500).json(error)
    }
}


export const getPolls:RequestHandler = async(req,res) =>{
    try{

        const polls = (await dbInstance.exec('getPolls',{})).recordset as Polls[]
        console.log(polls)

       return res.status(200).json(polls)

    }catch (error){
       return res.status(500).json(error)
    }
  
}



export const updatePoll = async (req: PollRequest, res: Response) => {
    try {

        const poll = (await dbInstance.exec('updatePoll', {pollId:req.params.id})).recordset[0] as Polls

        //input validation
        const {error} =PollSchema.validate(req.body)
        if (error){
            return res.status(500).json("Poll Input Validation Failed!")
        }

        if (poll && poll.pollsId) {
            
            const { userId, pollQuestion, pollOption, pollStatus} = req.body;

            if (poll && poll.pollsId) {
                await dbInstance.exec('updatePoll',{
                    pollId:req.params.id,
                    userId:userId,
                    pollQuestion:pollQuestion,
                    pollOption: pollOption,
                    pollStatus: pollStatus
                })
                return res.status(200).json({ message: "Poll Updated" });          
        }
    }

        res.status(404).json({ message: "Poll not Found" });

    } catch (error) {
        res.status(500).json(error);
    }
};

export const deletePoll = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const poll = (await dbInstance.exec('getPoll', {pollsId:req.params.id})).recordset[0] as Polls

        if (poll && poll.pollsId) {
            
            await dbInstance.exec('getPoll',{pollsId:req.params.id})

            return res.status(200).json({ message: "Poll Deleted" })
        }

        res.status(404).json({ message: "Poll not Found" });

    } catch (error) {
        res.status(500).json(error);
        // console.log(error)
    }
};