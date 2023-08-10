const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const app = express();
const port = process.env.PORT;

//todo ---------All settings

app.set('view engine', "ejs");
app.use(express.static('Public'));
app.use(express.urlencoded({ extended: false }));


// mongoose connectivity
mongoose.connect(process.env.MONGOURL).then(() => {
    console.log("Database is connect successfully...")
}).catch((err) => {
    console.log(err)
});
const homeRoute = require('./Router/home')
app.use(homeRoute)

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})
