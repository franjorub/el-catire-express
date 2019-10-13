const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const hotdogRoutes = require('./server/hot-dog/hotdog.routes');
const salesRoutes = require('./server/sales/sales.routes');
const PORT = 4000;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/hotdog', hotdogRoutes);
app.use('/sales', salesRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/elcatire', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});