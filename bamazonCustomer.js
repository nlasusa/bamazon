// Pull in my required tendencies 
var mysql = require ("mysql"); 
var inquirer = require ("inquirer"); 
var Table = require("cli-table2"); 

// Define the MySQL connection parameters
var connection = mysql.createConnection({
    host: 'localhost', 
    user: "root", 
    password: "classy43",
    database: "bamazon",
    port: 3306 
}); 
connection.connect(); 

var display = function() {
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err; 
        console.log("");
        console.log("-----------------------------------------------");
        console.log("               Welcome to Bamazon              ");
        console.log("-----------------------------------------------");
        console.log("");
        console.log("Find Your Product Below!");
        console.log("");

    var table = new Table({
        // my cli-table2 npm settings 
        chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
        , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
        , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
        , 'right': '║' , 'right-mid': '╢' , 'middle': '│' },
        head: ["Product Id", "Product Description", "Department", "Price ($)", "In Stock"],
        colWidths: [12, 35, 15, 13, 10],
        colAligns: ["center", "left", "left", "right", "center"],
        style: {
            head: ["blue"],
            compact: true
        }
    });
    // for loop that uses length of result and pushes product name and price
    for (var i = 0; i < res.length; i++) {
        table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
    }
    console.log(table.toString()); 
    console.log("");
    shopping();
    });
};

// prompts customer to select a product ID from table 
var shopping = function() {
    inquirer.
    prompt({
        name: "productToBuy",
        type: "input", 
        message: "Please enter the Product Id of the item you wish to purchase!"
    })
    .then(function(answer1) {
        var selection = answer1.productToBuy; 
        connection.query("SELECT * FROM products WHERE item_id=?", selection, function( 
        err, 
        res
        ) {
            if (err) throw err; 
            if (res.length === 0) {
                console.log(
                    "That product doesn't exist, please enter a Product Id from the list above"
                ); 
    // responds to customer if item exists, how many would you like to buy?
      shopping();
        } else {
          inquirer
            .prompt({
              name: "quantity",
              type: "input",
              message: "How many items would you like to purchase?"
            }) // if quantity is over the available amount, prompts customer how many we do have 
            .then(function(answer2) {
              var quantity = answer2.quantity;
              if (quantity > res[0].stock_quantity) {
                console.log(
                  "We are very sorry but we only have " +
                    res[0].stock_quantity +
                    " items of the product selected"
                );
            shopping();
              } else {
                console.log("");
                console.log("- - - - - - - - - - - - - - - - - - - - ");
                console.log(res[0].product_name + " purchased");
                console.log(quantity + " qty @ $" + res[0].price);
                console.log("Total Amount = $" + quantity * res[0].price)
                console.log("- - - - - - - - - - - - - - - - - - - - ");
// updates with new quantity once customer makes a purchase 
                var newQuantity = res[0].stock_quantity - quantity;
                connection.query(
                  "UPDATE products SET stock_quantity = " +
                    newQuantity +
                    " WHERE item_id = " +
                    res[0].item_id,
                  function(err, resUpdate) {
                    if (err) throw err;
                    console.log("");
                    console.log("Your Order has been recieved and is being processed");
                    console.log("Thank you for Shopping with us! Check your email for a 10% off coupon!");
                    console.log("");
                    console.log("New Stock for " + res[0].product_name + " is " + newQuantity); 
                    console.log("");
                    connection.end();
                  }
                );
              }
            });
        }
      });
    });
};


display();
