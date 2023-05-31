var express = require('express');
var router = express.Router();
const db = require("../model/helper.js"); // Import the function to interact with the database
const app = express();
const port = 5000;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

// GET paintings route
router.get('/paintings', function(req, res, next) {
  // code to fetch paintings from the database
  db("SELECT * FROM paintings")
    .then(results => {
      res.send(results.data);
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
});



module.exports = router;