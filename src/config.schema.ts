import * as Joi from '@hapi/joi';

export const configValidationSchema = Joi.object({
  NODE_ENV: Joi.string().required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(5432).required(),
  DB_USER: Joi.string().required(),
  DB_DBNAME: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
});
