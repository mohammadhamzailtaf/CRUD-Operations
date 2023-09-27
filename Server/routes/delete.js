const express = require('express');
const router = express.Router();
const userModel = require('../model/users');

router.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id;

  userModel
    .findByIdAndDelete(id)
    .then(() => res.json({ message: 'User deleted successfully' }))
    .catch((err) => res.json(err));
});

module.exports = router;