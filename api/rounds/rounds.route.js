const router = require('express').Router();
const collection = require('./rounds.db.service');

router.route('/rounds')
  .get((req, res) => {
    collection.all((data) => {
      res.json(data);
    });
  });

router.route('/rounds/:mday')
  .get((req, res) => {
    const mday = req.params.mday;
    collection.findByMatchday(mday, (data) => {
      res.json(data);
    });
  });

module.exports = router;