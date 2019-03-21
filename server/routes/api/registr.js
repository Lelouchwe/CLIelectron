const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

async function getAllUsers () {
    const client = await mongodb.MongoClient.connect 
    ( 'mongodb://<dbuser>:<dbpassword>@ds119996.mlab.com:19996/users',
        {
            useNewUrlParser: true
        }
    );
    return client.db('users').collection('users');

}