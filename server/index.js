const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

//Middleware

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 5000;


const mongoURL = 'mongodb://<dbuser>:<dbpassword>@ds119996.mlab.com:19996/users';

mongoose.connect(mongoURL, {useNewUrlParser: true})
    .then(() => console.log("mongoDB Connected"))
    .catch(err => console.log(err))

const Users = require("./routes/api/registr");

app.use("/users", Users)
app.listen (port, () => console.log(`Server startanul eba port ${port}`));