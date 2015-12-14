'use strict';

import Q from 'q';
import Joi from 'joi';
import validateInput from '../../utils/validateInput';
import db from '../../db';
import bcrypt from 'bcrypt';

export default (payload) => {
  return validateInput(payload, {
    email: Joi.string().required(),
    password: Joi.string().required()
  })
    .then(data => {
      return db.sequelize.transaction(t => {
        return db.user.findOne({where: {email: data.email}}, {transaction: t})
          .then(user => {
            if (user) {
              console.log(data.password, user.password);
              return Q.nfcall(bcrypt.compare, data.password, user.password)
                .then((valid) => {
                  if (valid) {
                    return Q.resolve(user);
                  }

                  return Q.reject('Invalid password');
                });
            }
            
            return Q.reject('User does not exist for provided email');
          });
      });
    })
      .catch(error => {
        return Q.reject(error);
      });
};
