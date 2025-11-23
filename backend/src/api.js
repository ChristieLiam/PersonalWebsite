const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const cors = require("cors");


const projects = require("../json/projects.json");
const skills = require("../json/skills.json");

dotenv.config();
const app = express();
const router = express.Router();

app.use(cors());


router.get('/projects', (req, res) => {
    res.json(projects);
});

router.get('/skills', (req, res) => {
    res.json(skills)
})

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);