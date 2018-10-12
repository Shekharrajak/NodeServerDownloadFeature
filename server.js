var express = require('express');
var app = express();
var port = process.env.PORT || 1729;
const path = require('path');

app.listen(port, function () {
    console.log('Server has started at port ' + port + ' !!');
});

app.use('/resources', express.static(path.join(__dirname, './data')));

app.get('/', function (req, res) {
    res.send('Hello! I am up and running :D ...');
});


app.get('/createFile', (req, res) => {
    var fs = require("fs");

    var writeStream = fs.createWriteStream("./data/dynamic_file.txt");
    writeStream.write("Hi,  Users. I am generated after the /createFile get request. ");
    writeStream.write("Thank You.");
    writeStream.end();

    res.send('File is generated. Click <a href="/resources/dynamic_file.txt"> here </a> to download the file.');
});