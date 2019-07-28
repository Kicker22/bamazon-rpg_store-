DROP DATABASE IF EXISTS rpg_classes_DB;
CREATE DATABASE rpg_classes_DB;

USE rpg_classes_DB;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (100),
    department_name VARCHAR (100),
    price DECIMAL (10, 2),
    stock_quantity INTEGER (100),
    PRIMARY KEY(item_id)
);


INSERT INTO products(product_name,department_name,price,stock_quantity)
 VALUES("Great Sword","Weapons",25.5,10);

INSERT INTO products(product_name,department_name,price,stock_quantity)
 VALUES("Longbow","Weapons",10.0,10);

INSERT INTO products(product_name,department_name,price,stock_quantity)
 VALUES("Wizards Staff","Weapons",60.8,10);

INSERT INTO products(product_name,department_name,price,stock_quantity)
 VALUES("Plated Armor","Armor",100,10);

INSERT INTO products(product_name,department_name,price,stock_quantity)
 VALUES("Sturdy Shield","Armor",47.6,10);

INSERT INTO products(product_name,department_name,price,stock_quantity)
 VALUES("Boots of Levitation","Armor",1000,1);

INSERT INTO products(product_name,department_name,price,stock_quantity)
 VALUES("Health Potion","potions",5,100);

INSERT INTO products(product_name,department_name,price,stock_quantity)
 VALUES("Mana Potion","Potions",5,100);

INSERT INTO products(product_name,department_name,price,stock_quantity)
 VALUES("Stamina Potion","Potions",5,100);


