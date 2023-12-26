const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./model/users')

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/hsm');

app.post('/')

app.post('/', (req, res) => {
    UserModel.create(req.body)
      .then(users => res.json(users))
      .catch(err => res.json(err));
  });
  
  app.post("/login", (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
      .then(user => {
        if (user) {
          if (user.password === password) {
            res.json("Success");
          } else {
            res.json("Password is incorrect");
          }
        } else {
          res.json("Invalid email or password");
        }
      })
      .catch(err => res.json(err));
  });


app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
