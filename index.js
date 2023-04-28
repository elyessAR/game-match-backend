const express = require("express");
const bodyParser = require("body-parser");
const gamesRouter = require("./routes/games.js");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.use(cors());

app.use("/games", gamesRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
