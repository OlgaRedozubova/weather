
const express = require('express');
const app = express();
const rp = require('request-promise');
const weatherRouter = express.Router();


app.get('/', function (req, res) {
    res.send('Hello World!');
});

weatherRouter.route("/")
    .get(function(req, res){
        const content = fs.readFileSync("tasks.json", "utf8");
        const tasks = JSON.parse(content);
        res.send(tasks);
    });

app.use("/weather", weatherRouter);


rp(options)
    .then(function (repos) {
        console.log('User has %d repos', repos.length);
    })
    .catch(function (err) {
        // API call failed...
    });

app.listen(3000, function () {
    console.log('Приклад застосунку, який прослуховує 3000-ий порт!');
});
