
const express = require('express');
const server = express();
const fs = require('fs');
//const weatherRouter = require('./routes/weather');
const router = express.Router();

const rp = require('request-promise');
var cheerio = require('cheerio'); // Basically jQuery for node.js



/*
server.get('/', function (req, res) {
    res.send('Hello World!');
});*/

server.use(express.static(__dirname + "/public"));


router.route("/weather")
    .get(function(req, res){
        const request = require('request');
        const city = "Kiev";
        const appid = "b6907d289e10d714a6e88b30761fae22";
        // request("http://samples.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + appid,//b6907d289e10d714a6e88b30761fae22',
        //     function (error, response, body) {
        //         let weatherData = JSON.parse(body);
        //         console.log(weatherData, typeof weatherData);
        //         if(!error){
        //             return res.status(200).json(weatherData); // res.end, res.send, res.status(200), res.json, res.sendFile
        //         } else {
        //             return res.json(error);
        //         }
        //     });

        rp({
            uri: "http://samples.openweathermap.org/data/2.5/weather", //?q=Kiev&appid=b6907d289e10d714a6e88b30761fae22", // + city + "&appid=" + appid,
            qs: {
                q: 'Kiev', // -> uri + '?access_token=xxxxx%20xxxxx'
                appid: appid//'b6907d289e10d714a6e88b30761fae22'
            },
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true,

        })
            .then(function(responseData){
                return res.json(responseData);
            })
            .catch(function(err){
                return res.json(err);
            });

    });

server.use('/', router);



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

