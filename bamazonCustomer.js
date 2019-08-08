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
    connection.query("select * from products", function(err, res){
        if (err) throw err; 
        console.log("------------------------------------");
        console.log("         Welcome to Bamazon         ");
        console.log("------------------------------------");
        console.log("");
        console.log("Find Your Product Below");
        console.log("");
 
    var table = new Table({
        //my cli-table2 npm settings 
        head: ["Product Id", "Product Description", "Department","Cost"],
        colWidths: [12, 30, 20, 8],
        colAligns: ["center", "left", "left", "right"],
        style: {
            head: ["aqua"],
            compact: true 
        }
    });
    // for loop that uses length of result and pushes product name and price
    for (var i = 0; i < res.length; i++) {
        table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price]);
    }
    console.log(table.toString()); 
    console.log("");
});
};
display(); 
