const express = require("express");
const dotenv = require("dotenv");
const apiRoutes = require("./src/routes");

dotenv.config();

const port = process.env.APP_PORT || 3001;
const app = express();

app.use(express.json());
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log("Server has started");
});
