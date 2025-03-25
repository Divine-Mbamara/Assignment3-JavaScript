//variables for text output
var studentNum = document.querySelector("#studentNum");
var orderSummary = document.querySelector("#order-summary");
var orderName = document.querySelector("#order-name");
var orderPhone = document.querySelector("#order-phone");
var orderSize = document.querySelector("#order-size");
var orderCrust = document.querySelector("#order-crust");
var orderToppings = document.querySelector("#order-toppings");
var orderQuantity = document.querySelector("#order-quantity");
var orderAddress = document.querySelector("#order-address");
//variable for Order summary css styling
var orderStyling = document.querySelector(".order-styling");
//variable for submit button
var submitButton = document.querySelector("#submit-button");



//event listener for the submit button
submitButton.addEventListener("click", function(event){
    event.preventDefault();
    
    //declare form variables for form values
    let size = document.getElementById("size").value;
    let crust = document.getElementById("crust").value;
    let toppingsList = [];
    if(document.getElementById("pepperoni").checked){
        toppingsList.push("Pepperoni");
    }
    if(document.getElementById("mushrooms").checked){
        toppingsList.push("Mushrooms");
    }
    if(document.getElementById("onions").checked){
        toppingsList.push("Onions");
    }
    if(document.getElementById("olives").checked){
        toppingsList.push("Olives");
    }
    if(document.getElementById("extra_cheese").checked){
        toppingsList.push("Extra Cheese");
    }

    let quantity = document.getElementById("quantity").value;

    let phone = document.getElementById("phone").value;
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;

    //confirm complete form submission
    if(name === "" || phone === "" || size === "" || crust === "" || quantity === "" || address === "" ){
        alert("Please fill out all fields");
        return;
    }

    //create a pizza object
    let pizzaOrder = new Pizza(name, phone, size, crust, toppingsList, quantity, address);

    //call the outputOrderSummary function on the object
    pizzaOrder.outputOrderSummary();
});


//class for the pizza object
class Pizza {
    constructor(name, phone, size, crust, toppingsList, quantity, address) {
        this.name = name;
        this.phone = phone;
        this.size = size;
        this.crust = crust;
        this.toppings = toppingsList;
        this.quantity = quantity;
        this.address = address;
    }

    //method for the order summary
    outputOrderSummary(){
        //display the order summary styling
        orderStyling.style.display = "block";

        studentNum.textContent = "Name: Divine Lotanna Mbamara | Student Number: 200594413";
        orderSummary.textContent = "Order Summary"
        orderName.textContent = "Name: " + this.name;
        orderPhone.textContent = "Phone Number: " + this.phone;
        orderSize.textContent = "Size: " + this.size;
        orderCrust.textContent = "Crust: " + this.crust;
        orderToppings.textContent = this.toppings.length > 0 ? "Toppings: " + this.toppings.join(", ") : "";
        orderQuantity.textContent = "Quantity: " + this.quantity;
        orderAddress.textContent = "Address: " + this.address;
    }
}
