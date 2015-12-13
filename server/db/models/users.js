'use strict';

export default (sequelize, DataTypes) => {
  
  let schema = {
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  };

  let methods = {
    tableName: 'users',
    timestamps: false
  };

  return sequelize.define('user', schema, methods);
};
