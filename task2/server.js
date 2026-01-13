require('dotenv').config()
const express = require("express");

const connectDB = require("./config/database");
const router = require('./routes')


const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use(router);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Listening Port Running ${port}`);
  });
});
