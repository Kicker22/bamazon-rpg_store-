// require mysql
var mysql = require("mysql");
// Load the NPM Package inquirer
var inquirer = require("inquirer");


// global variables for storing item id and quantity for later checks
var dbItem;
var dbQuantity;
var userItem;
var userQuantity;



var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "rpg_classes_DB"

});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    querryItems();

})

function querryItems() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | $" + res[i].price + " | " + res[i].stock_quantity + " remaining");
        }
        console.log("-----------------------------------");
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Which item do you chose?",
                    name: "id"
                },
                {
                    type:"input",
                    message: "how many would you like to purchase",
                    name: 'quantity'
                },
                {
                    type: "confirm",
                    message: "Are youo sure you want to purchase these items",
                    name: "confirm",
                    default: true
                }
            ])

            .then(function (inquirerResponse) {
                if (inquirerResponse.confirm) {
                    item = inquirerResponse.id
                    quantity = inquirerResponse.quantity
                    console.log("\n you've chosen item number " + inquirerResponse.id);
                    console.log(" Chosen quantity " + inquirerResponse.quantity);
                }
                connection.query("SELECT * FROM products")




            })
    })
}





