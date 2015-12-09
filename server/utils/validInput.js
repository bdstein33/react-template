'use strict';

import Q from 'q';
import Joi from 'joi';

/* Validates data submitted to API */
export default (input, joiSchema) => {
  return Q.nfcall(Joi.validate, Joi.object().keys(joiSchema));
};
