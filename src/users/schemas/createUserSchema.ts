// eslint-disable-next-line @typescript-eslint/no-var-requires
const Joi = require('joi');

const schema = Joi.object({
  user_first_name: Joi.string().min(3).max(30).required(),
  user_last_name: Joi.string().min(3).max(30).required(),
  user_email: Joi.string().email().min(3).max(30).required(),
  user_password: Joi.string().min(3).max(30).required(),
  user_address: Joi.string(),
  user_phone_no: Joi.string(),
  faculty_id: Joi.number(),
  user_role: Joi.string().valid('Student', 'Teacher'),
});
export default schema;
