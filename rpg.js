// require mysql
var mysql = require("mysql");
// Load the NPM Package inquirer
var inquirer = require("inquirer");


// global variables for storing item id and quantity for later checks
var userItem;
var userQuantity;
var stockQuantity;
var dbQuantity;



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
                    type: "number",
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
                    userItem = inquirerResponse.id
                    userQuantity = inquirerResponse.quantity
                    mathThatIsh()
                    console.log(userQuantity)
                    console.log(userItem)
                    console.log("\n you've chosen item number " + userItem);
                    console.log(" Chosen quantity " + userQuantity);
                } else {
                    console.log("tansaction aborted")
                }


            })
    })
}

function mathThatIsh (){
    connection.query("SELECT stock_quantity FROM products WHERE item_id =" + userItem ,function(err,res){
            dbQuantity = res
            for(i = 0; i < dbQuantity.length; i++){
                console.log(stockQuantity = dbQuantity[i].stock_quantity - userQuantity);
            }
        

    })
    connection.query("UPDATE products SET ? WHERE ?")(
        [
            {
                stock_quantity:dbQuantity
            },
            {
                item_id: userItem
            }
        ]
    )

};













