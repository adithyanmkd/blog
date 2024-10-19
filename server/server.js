const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

//local file importing
const connectDB = require("./config/db");
const apiRoutes = require("./routes/api");

//load env variables from .env
dotenv.config();

//connect database
connectDB();

const app = express();

//middlewares
app.use(bodyParser.json());

//page routes
app.use("/api/posts", apiRoutes);

//start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server runnig on ${PORT} port`);
});
