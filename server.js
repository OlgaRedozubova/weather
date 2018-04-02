
const express = require('express');
const server = express();
const fs = require('fs');
const weatherRouter = express.Router();

const rp = require('request-promise');
var cheerio = require('cheerio'); // Basically jQuery for node.js

/*
server.get('/', function (req, res) {
    res.send('Hello World!');
});*/

server.use(express.static(__dirname + "/public"));

weatherRouter.route("/")
    .get(function(req, res){
        const content = fs.readFileSync("weather.json", "utf8");
        const tasks = JSON.parse(content);
        res.send(tasks);
    });

server.use("/weather", weatherRouter);

const request = require('request');
const cyti = "Kiev";
const appid = "b6907d289e10d714a6e88b30761fae22";
request("http://samples.openweathermap.org/data/2.5/weather?q=" + cyti + "&appid=" + appid,//b6907d289e10d714a6e88b30761fae22',
    function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
    }).pipe(fs.createWriteStream('weather.json'));

server.listen(3000, function () {
    console.log('Приклад застосунку, який прослуховує 3000-ий порт!');
});


/*
var options = {
    method: 'GET',
    uri: 'http://samples.openweathermap.org/data/2.5/weather',//?q=Kiev&appid=b6907d289e10d714a6e88b30761fae22',
    json: true,
    headers: {
        'User-Agent': 'Request-Promise'
    },

    transform: function (body) {
        return cheerio.load(body);
    }
};

rp(options)
    .then(function (repos) {
        console.log(repos);
       // console.log('User has %d repos', repos.length);
    })
    .catch(function (err) {
        // Crawling failed...
        console.log('Crawling failed');
    });
*/



/*
rp(options)
    .then(function (repos) {
        console.log('User has %d repos', repos.length);
    })
    .catch(function (err) {
        // API call failed...
    });*/

