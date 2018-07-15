const router = require('express').Router();
const collection = require('./clubs.db.service');

router.route('/clubs')
  .get((req, res) => {
    collection.all((data) => {
      res.json(data);
    });
  });

router.route('/clubs/:code')
  .get((req, res) => {
    const code = req.params.code;
    collection.findByCode(code, (data) => {
      res.json(data);
    });
  });

module.exports = router;