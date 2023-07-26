const functions = require("firebase-functions");
const cors = require("cors");
const express = require("express");
const bodyParser = require('body-parser');
const compression = require("compression");

// Express app config
const tasksApp = express();
tasksApp.use(compression());
tasksApp.use(bodyParser.json());
tasksApp.use(bodyParser.urlencoded({ extended: false }));
tasksApp.use(cors({ origin: true }));

// A simple api to get all tasks
tasksApp.get("/", (request, response) => {
    response.status(200).send([{
        id: '123',
        name: 'Task 1',
        isComplete: false
    },
    {
        id: '456',
        name: 'Task 2',
        isComplete: true
    }]);
});
// tasks will be the name of the function as well as API
//in which we will pass our express app
exports.tasks = functions.https.onRequest(tasksApp);
