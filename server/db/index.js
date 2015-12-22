'use strict';
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import Q from 'q';
import _ from 'lodash';

let sequelize = new Sequelize('test', 'root', 'root', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

let db = {};

let nonJSFiles = (fileName) => {
  return !(/(\.js$)/i.test(path.extname(fileName)));
};

let importModel = (fileName) => {
  let model = sequelize['import'](path.join(__dirname, 'models', fileName));
  db[model.name] = model;
};

let associateModel = (model, modelName) =>{
  if ('associate' in db[modelName]) {
    return db[modelName].associate(db);
  }
};

Q.nfcall(fs.readdir, path.join(__dirname, 'models'))
  .then((files) => {
    _.remove(files, nonJSFiles);
    _.forEach(files, importModel);
    _.forEach(db, associateModel);
    return db;
  });
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
