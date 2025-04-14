import dotenv from 'dotenv';
import path from 'path';
import Joi from 'joi';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid('production', 'development', 'test')

      .default('development'),
    PORT: Joi.number().default(3000),
    JWT_SECRET: Joi.string().description('JWT secret key').default('jwtsecretkey'),
    JWT_ACCESS_EXPIRATION_MINUTES: Joi.number()
      .default(30)
      .description('minutes after which access tokens expire'),
    JWT_REFRESH_EXPIRATION_DAYS: Joi.number()
      .default(30)
      .description('days after which refresh tokens expire'),
    APP_URL: Joi.string().description('App url'),
    FRONTEND_URL: Joi.string().description('Frontend url'),
    JWT_ACTIVATION_EXPIRATION_MINUTES: Joi.number()
      .default(20)
      .description('minutes after which refresh tokens expire'),
    ADMIN_EMAIL: Joi.string().description('Admin email').default('kevinrukundo1@gmail.com'),
    ADMIN_EMAIL_TOKEN: Joi.string().description('Admin email token').default('sd'),
    SEED_PASSWORD: Joi.string().description('Seed password')
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export default {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  jwt: {
    secret: envVars.JWT_SECRET,
    accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
    activationExpirationMinutes: envVars.JWT_ACTIVATION_EXPIRATION_MINUTES
  },
  email: {
    adminEmail: envVars.ADMIN_EMAIL,
    adminEmailToken: envVars.ADMIN_EMAIL_TOKEN
  },
  appUrl: envVars.APP_URL,
  frontendUrl: envVars.FRONTEND_URL,
  seedPassword: envVars.SEED_PASSWORD
};
