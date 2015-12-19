var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
//connect to database
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'adminbdiBZhL',
	password : 'GPxlh-FH-DPJ',
	database : 'busgoeverywhere'
});
// make a log
router.use(function timeLog(req, res, next) {
	console.log('Time: ',new Date().toISOString());
	next();
});

// define responce when recieve the request
router.get('/', function (req, res) {

   	// Prepare output in JSON format
	connection.query('SELECT * FROM test1', function(err, rows, fields) {
		if (err) 
			console.log(err);
		if(rows.length > 0 ){
			console.log(rows);
			res.json({id:rows[0].id,name:rows[0].name});
		}
		else
			console.log('row < 0');
	});

});

module.exports = router;