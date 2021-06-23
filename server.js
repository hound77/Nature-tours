const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

dotenv.config({path: './config.env'});


const port= process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`app running ${port}`)
});

