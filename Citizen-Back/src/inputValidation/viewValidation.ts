import Joi from 'joi'


export const ViewSchema = Joi.object({
    
    userId: Joi.string().required(),
    viewContent: Joi.string().required()

})