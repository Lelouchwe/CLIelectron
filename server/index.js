module.exports = () => {

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
// const path = require('path');
//Middleware

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))

const port = process.env.PORT || 5000;

// const port = process.env.WEBPACK_DEV_SERVER_URL

const mongoURL = 'mongodb://admin:admin123@ds119996.mlab.com:19996/users'

mongoose.connect(mongoURL, {useNewUrlParser: true})
    .then(() => console.log("mongoDB Connected"))
    .catch(err => console.log(err))

const Users = require("./routes/Users");


  // Setup Globally Included Directories
//   app.use(express.static(path.join(__dirname, '/../bower_components/')));
//   app.use(express.static(path.join( '../node_modules/')));
//   app.use(express.static(path.join(__dirname, '/../controllers/')));
//   app.use(express.static(path.join(__dirname, '/../public/')));

  // Load Available Modules For Dependancy Injection Into Models & Routes
//   modules = {
//     app: app,
//     bodyParser: bodyParser,
//     express: express,
//     Users: Users,
//     cors: cors,
//     mongoose: mongoose
// };


app.use("/users", Users)
app.listen (port, () => console.log(`Server startanul eba port ${port}`));

} 

