
const express = require('express');
const router = express.Router();
const userModel = require('../model/users');

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { name, email, age } = req.body;
  userModel.findByIdAndUpdate(id, { name, email, age })
    .then(() => {
      res.json({ message: 'User updated successfully' });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;