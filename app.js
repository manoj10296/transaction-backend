require("dotenv").config();
const express = require('express')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const transactionRoutes = require('./routes/transaction')


const app = express();

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(() => console.log("Error in connecting to MONGODB"));


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json()); // parse application/json
app.use(cors());

app.use('/api', transactionRoutes)

//launching the application on the port
const port = process.env.PORT || 2000;
app.listen(port, () => console.log(`Server is started at PORT: ${port}`));