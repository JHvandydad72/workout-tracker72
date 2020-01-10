/* eslint-disable no-undef */
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
mongoose.connect(process.env.MONGODB_URI || "mongodb://ou4msir674uow674:c2nz1dtrhhpjc6vp@vhw3t8e71xdz9k14.cbetxkdyhwsb.us-east-1.rds.amazonaws.com", { useNewUrlParser: true , useUnifiedTopology: true });
app.use(require('./routes/api-routes.js'));
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});