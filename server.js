// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express     = require('express');        // call express
var app         = express();                 // define our app using express
var bodyParser  = require('body-parser');
var dt          = require('./dt.js');
var underscore  = require('underscore');

var customers ={} ;
customers['jack']={};
customers['jack'].total=100;

customers['susan']={};
customers['susan'].total=100;

customers['jim']={};
customers['jim'].total=100;

// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8081;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    console.log("---------------------------------------------");
    console.log("New request is received.");
    res.write('Welcome to ING IP&FT (InstantPayment and Future Teller)!!!\n');
    res.write('/api/offer/ - returns offer for the customer. CustomerId - have to be specified\n');
    res.write('/api/pay/ - processes the payment. CustomerId, total, products - have to specified\n');
    res.end();   
});

router.post('/customer/pay', function(req, res) {
    console.log("New request is received. Processing."); 
    var customer_id = req.body.customer;
    var cust_products = req.body.products;
    console.log(req.body);
    if (!customers[customer_id])
    {
        console.log("Error: no such customer"); 
        res.json({ status: "404", message: "No such customer! "});        
        return;
    }
    if (!cust_products){
        console.log("Error: basket is empty. Nothing to process");
        res.json({ status: "404", message: "Empty basket! Go back shopping!!! "});
        return;                   
    }
    if (req.body.total>customers[customer_id].total) {
        res.json({message: "Insufficient funds! Please refer to team ABC for overdraft protection or become IT specialist. They are the richest people in the world!", status: "Insufficient funds."});
        console.log("Error: insufficient funds.");
        return;  
    } else {
        res.json({status:200,message: "Payment processed successfully"});
        console.log("Payment processed successfully");  
    } 
});



router.post('/customer/offer', function(req, res) {
    console.log("New request is received. Processing.");

    var customer_id = req.body.customer;
    
    if (customers[customer_id] )
    {   
        var offering = dt.get_offer(customer_id);
        res.json({'offering' : offering});
        console.log("Getting data from external resources");
        console.log("Getting historical data of the customer"); 
        console.log("Offer is ready. Model suggest: " + offering);
    }
    else
    {
        res.json({ error: "404", message: "No such customer! "});
        console.log("No such customer!");
    }
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('################################################################');
console.log('ING intelligent instant payment gateway is started on port: ' + port);
console.log('################################################################');
