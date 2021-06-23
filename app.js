const express = require('express');
const fs = require('fs');
const morgan  = require('morgan');
const app = express();
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');


//  MIDDLEWARE
if(process.env.NODE_ENV === 'development')
{
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));


app.use((req, res, next)=>{
    console.log('middleware working');
    next(); 
});

app.use((req, res, next)=>{
    req.requestTime = new Date().toISOString();
    next(); 
});

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

// ROUTE HANDLER




// app.get('/api/v1/tours', getAllTours );
// app.post('/api/v1/tours', createTour);
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

// ROUTES





    
app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRouter);    

// START SERVER


module.exports = app;