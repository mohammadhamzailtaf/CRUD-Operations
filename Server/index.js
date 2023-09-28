const express = require('express');
const cors = require('cors');
const userModel = require('./model/users');
const db = require('./db/connection');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  userModel
    .find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get('/getuser/:id', (req, res) => {
  const id = req.params.id;

  userModel
    .findById(id)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

// Create Operation 
const createRouter = require('./routes/create');
app.use('/create', createRouter);

//Update Operation
const updateRouter = require('./routes/update');
app.use('/update', updateRouter);




app.listen(3000, () => {
  console.log('Server is running on Port 3000');
});