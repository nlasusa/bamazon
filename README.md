# bamazon

In this activity, I created an Amazon-like storefront with the MySQL skills and node.js I learned this unit. The app will take in product ID's and orders from customers and deplete stock from the store's inventory. 

## Technologies Used
- Node.js
- Inquire NPM package
- MYSQL NPM package
- Cli-table2 NPM package

## Prerequisites 
- Node.js - Download the latest version of Node https://nodejs.org/en/
- Create a MYSQL database called 'Bamazon', reference schema.sql

## What bamazonCustomer.js does
- Prints the products, id's, department and stock quantity in the store
- Prompts the customer which product they would like to purchase by ID number
- Asks for the quantity 
        - if there is a sufficient amount of the product in stock, the purchase will go through and the customer will recieve a log of the item they bought, quantity and the total cost. Then it will update the stock quantity to reflect the amount purchase.
        - if there is not enough of the product in stock, it will tell the user that there isn't enough of that product and the amount we do have.





