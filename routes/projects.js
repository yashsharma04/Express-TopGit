var express = require('express');
var router = express.Router();
var path = require('path');
var url = require('url');
var fs=require('fs');
var lodash = require('lodash');

router.get('/getProjects',function(req,response){
	if(req.query.name!=null){
			var name = req.query.name ; 
			fs.readFile(path.resolve(__dirname + '/../data.json'),'utf8', function (err, data) {	
			if (err) 
				console.log(err);
			else{
				var items = JSON.parse(data).items;
				var len = items.length ; 
				var itemsByName = [];
				for(var i =0 ; i<len ; i++){
					if(lodash.includes(items[i].name,name)){
						itemsByName.push(items[i]);
					}
				}
				var itemsByPage =  [] ;
				var page = req.query.page ;
				var start = (page-1)*10 ;
				var end = start +10 ; 
				for(var i=start;i<end && i<itemsByName.length;i++){
						itemsByPage.push(itemsByName[i]);
				} 
				response.writeHead(200, {'Content-Type': 'text/plain'});
				response.write(JSON.stringify(itemsByPage));
				response.end();
			}	
		});
		}
		else {
			fs.readFile(__dirname + '/../data.json','utf8', function (err, data) {	
			if (err) 
				console.log(err);
			else{

				response.writeHead(200, {'Content-Type': 'text/plain'});
				response.write(data);
				response.end();
			}	
		});
	}
});
module.exports = router;