'use strict';

const Joi = require('joi');

const main = {
  userName: Joi.string().trim().min(1),
  password: Joi.string().trim().min(8),
  name: Joi.string().trim().min(1),
  id:Joi.string().trim().min(1)
};

exports.loginRequestSchema = Joi.object().keys({
  userName:main.userName.required(),
  password:main.password.required(),
  id:Joi.string().trim().min(1),
})
exports.profileRequestSchema = Joi.object().keys({
  userName:main.userName.required(),
})

exports.profileResponseSchema = Joi.object().keys({ 
  name:main.name.required(),
  image: main.name,
  jobRole:main.name,
  companyId:main.id.required(),
  Company: {
    name:main.name.required(),
  }
})