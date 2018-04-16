var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

//Created the connection and displayed all of the products with their id and prices.
connection.connect(function(err){
    if(err) throw(err);
    console.log(`connected as id ${connection.threadId}`);

    displayProducts();
});

//Querying database, and displaying products on the screen and then run the prompt customer function
function displayProducts () {
     connection.query("SELECT * FROM products", function (err, res) {
        if (err) console.log(err);

        for(var i =0; i< res.length; i++){
            console.log(res[i].item_id + "|" + res[i].product_name + " |" + res[i].price);
        }
        promptCustomer(res);
    })
}

//Created a function to prompt the customer to select the ID of their choice and how many units they would like to buy
function promptCustomer(res) {
    
        inquirer.prompt([{
                type: "input",
                message: "Input the ID of the item you are interested in!",
                name: "itemID",
            },
            {
                type: "input",
                message: "How many units of the product would you like to buy?",
                name: "quantity",
            },
        ]).then(function (answers) {
            var selectedProduct;

            for (var i = 0; i < res.length; i += 1) {
                if (res[i].item_id === parseInt(answers.itemID)) {
                    selectedProduct = res[i];
                    console.log(res[i]);
                }
            };
            // console.log(typeof selectedProduct.stock_quantity);
            // console.log(typeof answers.quantity);
            var userQuantity = parseInt(answers.quantity);
           
            if(selectedProduct.stock_quantity < userQuantity) {
                console.log("Insufficient Quantity");
            } else {
                //selectedProduct.price is coming from the database
                var cost = userQuantity * selectedProduct.price 
                //.toFixed limits decimal value to 2 spots.
                console.log("Your total cost is: $ " + cost.toFixed(2));

                //To update database
                connection.query("UPDATE products SET ? WHERE ?", [{"stock_quantity": selectedProduct.stock_quantity - userQuantity} , {"item_id": answers.itemID}] ,function (err, res) {
                    if(err) {
                        console.log("There was an error. Purchase not made.");
                        throw err;
                    } 
                        console.log("Thanks for your purchase!");
                        
                })
            }
        });
    };
