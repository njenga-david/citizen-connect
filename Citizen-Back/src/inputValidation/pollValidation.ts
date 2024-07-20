import Joi from "joi";

export const PollSchema = Joi.object(

    {
        userId: Joi.string().required(),
        pollQuestion: Joi.string().required(),
        pollOption: Joi.string().required(),
        pollStatus: Joi.string().required()

    }

)