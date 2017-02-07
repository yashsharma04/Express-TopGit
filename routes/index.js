var express = require('express');
var router = express.Router();
var path = require('path');
var url = require('url');
/* GET home page. */
router.get('/', function(req, res, next) {  
	res.sendFile(path.resolve(__dirname + '/../index.html'));
});
module.exports = router;