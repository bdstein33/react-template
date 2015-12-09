'use strict';

/* Wraps input submitted to API into payload object and returns output from promisified controller function */
export default (controllerName) => {

  return (req, res) => {
    let payload = Object.keys(req.query).length ? req.query : req.body;

    require('../resources/' + controllerName)(payload)
      .then((output) => {
        res.json(output);
      }).catch((error) => {
        res.status(500).json({error: error});
      });
  };
};
