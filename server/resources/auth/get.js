'use strict';

import Q from 'q';
import Joi from 'joi';
import validateInput from '../../utils/validateInput';
import models from '../../db';

export default (payload) => {
  return validateInput(payload, {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
  })
    .then(data => {
      return models.user.findAll({raw: true})
        .then((users) => {
          console.log(users);
          return Q.resolve(users[0]);
        });
    })
    .catch(error => {
      return Q.reject(error);
    });
};
