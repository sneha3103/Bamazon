CREATE DATABASE bamazon

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price FLOAT(6,2) NULL,
  stock_quantity INTEGER(45) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Boots", "Shoes", 24.99, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Earrings", "Jewelry", 12.99, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cookies", "Food", 3.49, 22);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shirt", "Clothing", 20.99, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jeans", "Clothing", 17.99, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Scooter", "Toys", 34.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Accent Chair", "Furniture", 149.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Camera", "Electronics", 275.49, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sandals", "Shoes", 17.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Necklace", "Jewelry", 14.99, 4);

