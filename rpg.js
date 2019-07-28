var mysql = require("mysql");

// Load the NPM Package inquirer
var inquirer = require("inquirer");

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
    querryClasses();

})

function querryClasses() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | $" + res[i].price + " | " + res[i].stock_quantity + " remaining");
        }
        console.log("-----------------------------------");
    })
}

inquirer
    .prompt([
        {
            type: "input",
            message: "To select item, Enter the items Id Number",
            name: "id"
        },
        {
            type: "input",
            message: "How many would you like to purchase?",
            name: "quantity"
        },
        {
            type: "confirm",
            message: "Are you sure:",
            name: "confirm",
            default: true 
        }
    ])

.then(function(inquirerResponse){
    if (inquirerResponse.confirm){
        console.log("\n you've chosen item number " + inquirerResponse.id);
        console.log(" Chosen quantity " + inquirerResponse.quantity);
    }
})



