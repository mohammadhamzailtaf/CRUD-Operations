const express = require('express');
const userModel = require('../model/users');
const router = express.Router();

router.post('/', (req, res) => {
    userModel.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.json(err));
  });

  module.exports = router;