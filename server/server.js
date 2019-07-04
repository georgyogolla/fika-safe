import sourceMapSupport from 'source-map-support'
// import queryString from 'query-String'
import { MongoClient } from 'mongodb';
import mongoose from "mongoose";
import { Schema } from "mongoose";
<<<<<<< HEAD
require('babel-polyfill')
=======
require('babel-polyfill');
>>>>>>> 9a4b41cf95b2dea9339a13b3338b614e0166fe29



// UNIQUE VALIDATOR
const mongooseUniqueValidator = require('mongoose-unique-validator');


const ObjectId = require('mongodb').ObjectID;

sourceMapSupport.install()

const express = require('express');
const bodyParser = require('body-parser');

// an instance of express
const app = express();

// mounting other middlewares into our server.js
app.use(express.static('static'));


var qpm = require('query-params-mongo');
var mongodb = require('mongodb');

var processQuery = qpm({
    autoDetect: [{ fieldPattern: /_id$/, dataType: 'objectId' }],
    converters: { objectId: mongodb.ObjectID }
});




app.use(bodyParser.json());

// mongoose models
import { Sacco, Rider } from './db.models.js'
// OUR SERVER CODE WILL GO HEREa

app.get("/api/sacco", (req, res) => {
    db.collection("sacco")
      .find()
      .then(sacco => {
        res.json({ sacco });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error: ${error}` });
      });
  });

app.get('/', (req, res) => {
    res.json(`this is our first server page`);
})


let db = null;

mongoose.connect('mongodb://127.0.0.1:27017/fika-safe', { useNewUrlParser: true })
    .then(async () => {
        app.listen(3000, () => {
            console.log("Listening on port 3000")
        });
    });

