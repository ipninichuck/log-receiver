//required Dependencies
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
//Use json data from request
router.use(bodyParser.json());

//GET Request set to write file of message body
router.get('/', (req, res, next) => {
  let log = JSON.stringify(req.body);
  fs.writeFileSync('log.json', log);
  res.send('log written')
  })










//exposes the router method for the entire application
module.exports = router;
