const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');
const rentals = [{
    title: "Nice view on ocean",
    city: "San Francisco",
    street: "Main street",
    category: "condo",
    image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
    bedrooms: 4,
    shared: true,
    description: "Very nice apartment in center of the city.",
    dailyRate: 43
},
{
    title: "Modern apartment in center",
    city: "New York",
    street: "Time Square",
    category: "apartment",
    image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
    bedrooms: 1,
    shared: false,
    description: "Very nice apartment in center of the city.",
    dailyRate: 11
},
{
    title: "Old house in nature",
    city: "Spisska Nova Ves",
    street: "Banicka 1",
    category: "house",
    image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
    bedrooms: 5,
    shared: true,
    description: "Very nice apartment in center of the city.",
    dailyRate: 23
}];
router.get('', function(req, res){
    Rental.find({}, function(err, foundRentals){
        res.json(foundRentals);
    });
});

router.get("/initialize", (req, res) => {
    rentals.forEach(rentalItem => {
        let rentalData = new Rental(rentalItem);
        rentalData.save()
    });
    res.send("rental saved to database")
});

router.get("/drop", (req, res) => {
    Rental.remove({}, function (err) {
        console.log('collection removed')
        res.send("database cleaned")
    })
});

router.get('/:id', function(req,res){
const rentalId = req.params.id;
Rental.findById(rentalId, function(err, foundRentals){
    if(err){
        res.status(422).send({errors: [{title: 'RentalError', detail: 'Could not find rental'}]});
    }
    res.json(foundRentals);
});
});

module.exports = router;