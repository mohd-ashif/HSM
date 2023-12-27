const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./model/users');
const DepartmentModel = require('./model/deparment');
const HeadsModel = require('./model/heads');
const EmployeeModel = require('./model/employee');
require('dotenv').config();
const multer = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/upload', express.static('upload'));


// DB
try {
  mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
} catch (error) {
  console.error('Error connecting to the database:', error.message);
}

// Image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './upload');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage }); 

// Add department into DB
app.post('/add_departments', upload.single('image'), (req, res) => {
  const { name, year, description} = req.body;
  const imagePath = req.file.filename;

  DepartmentModel.create({ name, year, description, image: req.file.filename })
    .then((department) => res.json(department))
    .catch((err) => res.json(err));
});

// Departments
app.get('/departments', (req, res) => {
  DepartmentModel.find({})
    .then((department) => res.json(department))
    .catch((err) => res.json(err));
});

// login & signup

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

