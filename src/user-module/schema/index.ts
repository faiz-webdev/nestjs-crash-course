// import Joi from 'joi';
import * as Joi from 'joi';

export const createCatSchema = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().required(),
}).options({
  abortEarly: false,
});

export interface CreateCatDto {
  email: string;
  username: number;
}
