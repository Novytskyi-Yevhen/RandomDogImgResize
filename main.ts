import express = require('express');
import mongoose = require('mongoose');
require('dotenv').config({path: './.env'});

const app = express();

async function start() {
    try {
        await mongoose.connect(process.env.LINK_TO_DB!, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        })
        app.listen(process.env.PORT, ()=> console.log('Server is started'));
    } catch (error) {
        console.log(error);
        
    }
}

start();

