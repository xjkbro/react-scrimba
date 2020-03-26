const express = require('express');
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config();

const middlewares = require('./middlewares')
const logs = require('./api/logs')

const app = express();

mongoose
    .connect(process.env.MONGO_URI , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to Mongo!');
    })
    .catch((err) => {
    console.error('Error connecting to Mongo', err);
});

app.use(morgan('common'));      // Morgan shows requests in console for dev purposes and debugging
app.use(helmet())               // Helmet takes care of response headers. Primarily focus eliminating breaching.
app.use(cors({
    origin: process.env.CORS_ORIGIN
}))

app.get('/', (req,res) => {
    res.json({
        message: "Hello World",                                     //Sends a JSON object with a Hello World message when someone makes a GET request on the / route
    })
})

app.use('/api/logs', logs);

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})