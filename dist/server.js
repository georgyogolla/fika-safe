"use strict";

var _sourceMapSupport = _interopRequireDefault(require("source-map-support"));

var _mongodb = require("mongodb");

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _dbModels = require("./db.models.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require('babel-polyfill'); // UNIQUE VALIDATOR


var mongooseUniqueValidator = require('mongoose-unique-validator');

var ObjectId = require('mongodb').ObjectID;

_sourceMapSupport["default"].install();

var express = require('express');

var bodyParser = require('body-parser'); // an instance of express


var app = express(); // mounting other middlewares into our server.js

app.use(express["static"]('static'));

var qpm = require('query-params-mongo');

var mongodb = require('mongodb');

var processQuery = qpm({
  autoDetect: [{
    fieldPattern: /_id$/,
    dataType: 'objectId'
  }],
  converters: {
    objectId: mongodb.ObjectID
  }
});
app.use(bodyParser.json()); // mongoose models

// OUR SERVER CODE WILL GO HEREa
<<<<<<< HEAD
app.get("/api/sacco", function (req, res) {
  db.collection("sacco").find().then(function (sacco) {
    res.json({
      sacco: sacco
    });
  })["catch"](function (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error: ".concat(error)
    });
  });
});
=======
>>>>>>> 9a4b41cf95b2dea9339a13b3338b614e0166fe29
app.get('/', function (req, res) {
  res.json("this is our first server page");
});
var db = null;

_mongoose["default"].connect('mongodb://127.0.0.1:27017/fika-safe', {
  useNewUrlParser: true
}).then(
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          app.listen(3000, function () {
            console.log("Listening on port 3000");
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
//# sourceMappingURL=server.js.map