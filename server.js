// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

var mongoose   = require('mongoose');
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'); // connect to our database



var customers;
customers['ivan'].total = 100;
customers['yijia'].total = 100;
customers['ivan'].total = 100;

var orders;

var products;
products[1].name = "milk";
products[1].price = "1"

products[1].name = "milk2";
products[1].price = "2"

products[1].name = "milk";
products[1].price = "3"
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'welcome to ING IP&P (InstantPayment and Prediction)!!!' });   
});


router.get('/customer/:customer_id/order/new', function(req, res) {
    customer_id = req.params.customer_id;

    if (customers[customer_id])
    {   
        var new_order = process.hrtime();
        res.json({ order: new_order});
    }
    else 
    {
        res.json({ error: "404", message: "No such customer! ");
    } 
});


router.get('/customer/:customer_id/pay', function(req, res) {
    customer_id = req.params.customer_id;

    if (customers[customer_id] && orders[order_id])
    {
        if (customers[customer_id].total > orders[order_id])
        {
            var balance = customers[customer_id].total - orders[order_id];
            concole.log("New Transaction is processed. Total is " + orders[order_id].total + "Status: Paid. Remaining balance is " + balance + ".");
            req.json({message: "Order is successfully paid!"});
        }
        else
        {
            concole.log("Insufficient funds!!! Total is " + orders[order_id].total + ". Status: Paid. Balance is " + balance + ".");
            req.json({message: "Insufficient funds! Please refer to team ABC for overdraft protection!", error: "Insufficient rights."});   
        }
    }
    else 
    {
        res.json({ error: "404", message: "No such customer! ");
    } 
});

router.get('/customer/:customer_id/order/:order_id/cancel', function(req, res) {
    customer_id = req.params.customer_id;
    order_id = req.params.order_id;

    if (customers[customer_id] && orders[order_id])
    {
      delete orders[order_id];      
    }
    else 
    {
        res.json({ error: "404", message: "No data available! ");
    } 
    res.json({ message: 'Your order is canceled!' });   
});
        






router.get('/order/id/cancel', function(req, res) {
      res.json({ message: 'Order ID is cleaned up!' });
});




// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
