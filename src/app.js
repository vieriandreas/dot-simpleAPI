const express = require('express');
const app = express();

//import Repository
const UserRepository = require('./repository/user');

//import Service
const UserService = require('./service/user');

//import Handler
const UserHandler = require('./handler/user');

// import middleware
const Auth = require('./middleware/auth')

app.use(express.json());

const userRepository = new UserRepository();

const router = express.Router();

// Import router
const authRouter = require('./router/auth');

// Use router
router.use('/auth', authRouter)

app.use('/api', router)

const userService = new UserService(userRepository)
const userHandler = new UserHandler(userService);

// User
//app.get('/users', Auth.authenticate, UserHandler.getAll)

app.use((req, res, next) => {
    res.status(404).send({
      status: "fail",
      message: "not found"
    })
  });
  
  module.exports = app;