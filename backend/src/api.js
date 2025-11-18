const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const fetch = require("node-fetch");

dotenv.config();
const app = express();
const router = express.Router();

app.use(cors());

router.get('/', (req, res) => {
    res.json({
        message: "Hello World sdfghjklkijuhygfdsdfghj!"
    });
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
