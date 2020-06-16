const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const rental = require('./models/rental');
const FakeDb = require('./fake-db');
const rentalRoutes = require('./routes/rentals');

// mongoose.connect(config.DB_URI).then(() => {
//     const fakeDb = new FakeDb();
//     fakeDb.seedDb();
// });
const url = 'mongodb://127.0.0.1:27017/book-rental'
mongoose.connect(url, { useNewUrlParser: true }).then(() => {
        const fakeDb = new FakeDb();
        fakeDb.seedDb();
    });
const db = mongoose.connection
db.once('open', _ => {
    console.log('Database connected:', url)
})

db.on('error', err => {
    console.error('connection error:', err)
})

const app = express();
app.use('/api/v1/rentals', rentalRoutes);


const PORT = process.env.PORT || 3001;
app.listen(PORT, function(){
    console.log("abc");
});