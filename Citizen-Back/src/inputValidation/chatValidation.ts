import Joi from "joi";

export const ChatSchema = Joi.object(

    {
        userId: Joi.string().required(),
        chatMessage: Joi.string().required()
    }

)