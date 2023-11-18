require("dotenv").config();
const port = process.env.PORT;
const express = require("express");
const app = express();
const cors = require("cors")
const indexRoute = require("./routes/indexRoute")

app.use(cors())
app.use(express.json()) 
app.use(express.urlencoded({extended: true}))

const connectDB = require("./config/db")
connectDB(); 

app.use("/", indexRoute)

app.listen(port, () => {
  console.log("listening on port", port);
});
