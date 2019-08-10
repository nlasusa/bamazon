DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon; 

CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

select * from products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES  (181, 'Nexxus Shampoo', 'Cosmetics', 8.75, 208),
		(182, 'Nexuss Conditioner', 'Cosmetics', 7.65, 267),
        (431, 'Beneful Wet Dog Food', 'Pet', 11.48, 171), 
        (817, 'Motrin', 'Pharmacy', 9.25, 318), 
        (603, 'Huggies Baby Diapers', 'Children', 7.84, 301), 
        (417, 'Purina Cat Chow', 'Pet', 11.65, 195), 
        (839, 'Adult Multi Vitamins', 'Pharmacy', 10.24, 299), 
        (510, 'Phillies T-Shirt', 'Sports', 19.99, 89), 
        (573, 'Baseball Glove', 'Sports', 32.99, 46), 
        (112, 'EOS Lip Balm', 'Cosmetics', 4.02, 100), 
        (898, 'Halls Cough Drops', 'Pharmacy', 5.47, 200), 
        (990, 'Charmin Toilet Paper', 'Grocery', 3.99, 418), 
        (983, 'Bounty Paper Towel', 'Grocery', 3.16, 392), 
        (900, 'Coffee Mate Creamer', 'Grocery', 5.83, 216), 
        (919, 'Ritz Crackers', 'Grocery', 2.85, 310),
        (937, 'Halo Top Ice Cream', 'Grocery', 5.25, 501);