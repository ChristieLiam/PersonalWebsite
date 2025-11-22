const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
const router = express.Router();

app.use(cors());

router.get('/', (req, res) => {
    res.json({
        message: "Hello World!"
    });
});

router.get('/projects', (req, res) => {
    res.json({
        message: "My Projects"
    });
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
