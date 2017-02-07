var express = require('express');
var index = require('./routes/index');
var projects = require('./routes/projects');
var app = express();

app.use('/', index);
app.get('/getProjects',projects);
app.use(express.static('public'))

app.listen(3000, function () {
  console.log('Example app listening on Port 3000!')
})
// module.exports = app;