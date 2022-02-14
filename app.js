const express = require("express");
const userRoute = require("./routes/userRoute")
const itemRoute = require("./routes/itemRoute")

const app = express();

app.use(express.json());

app.use("/pos/api/v1/user" ,userRoute)
app.use("/pos/api/v1/item" ,itemRoute)


module.exports = app;