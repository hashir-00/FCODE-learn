const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const env = require("dotenv");
const { db } = require("./database/db");

const app = express();



app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
env.config();
const port = process.env.PORT || 8000;

app.use("/api", require("./router/route"));

db().then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}/`);
      });
    } catch (error) {}
  })
  .catch((error) => {
    console.log(error);
  });
