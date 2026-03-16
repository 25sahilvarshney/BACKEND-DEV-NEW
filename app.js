const express = require("express");
const joi = require("joi");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const port = 8000;
