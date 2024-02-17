// index.js

// init project
require("dotenv").config();
const express = require("express");
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.get("/api/whoami", (req, res) => {
  let ipaddress =
    req.headers["x-forwarded-for"] ||
    req.socket.remoteAddress;

  // Converts the IPv6 address to IPv4, if applicable  
  if (ipaddress.substr(0, 7) === "::ffff:") {
    ipaddress = ipaddress.substr(7);
  }

  const language = req.headers["accept-language"];
  const software = req.headers["user-agent"];
  res.json({ ipaddress, language, software });
});

// listen for requests
app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${process.env.PORT || 3000}`);
});
