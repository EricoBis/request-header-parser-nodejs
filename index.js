// index.js

// init project
require("dotenv").config();
const express = require("express");
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.get("/api/", (req, res) => {});

// listen for requests
app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${port}`);
});
