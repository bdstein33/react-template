'use strict';

import Q from 'q';
import Joi from 'joi';
import validateInput from '../../utils/validateInput';
import db from '../../db';
import bcrypt from 'bcrypt';
import _ from 'lodash';

export default (payload) => {
  return validateInput(payload, {
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
  })
    .then(data => {
      return db.sequelize.transaction(t => {
        return db.user.findOne({where: {email: data.email}}, {transaction: t})
          .then(user => {
            if (user) {
              return Q.reject('Vendor with email ' + data.email + ' already exists');
            } else {
              let hashPassword = _.partialRight(bcrypt.hashSync, bcrypt.genSaltSync());
              data.password = hashPassword(data.password);
              return db.user.create(data, {transaction: t})
                .then(newUser => {
                  return Q.resolve(newUser);
                });
            }
          });
      });
    })
      .catch(error => {
        return Q.reject(error);
      });
};
