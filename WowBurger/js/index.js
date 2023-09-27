var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");

var quan = document.getElementById("quantity");
var price = document.getElementById("price");
var subBtn = docment.getElementById("subBtn");

subBtn = document.addEventListener("click", submitFunc)

function submitFunc(){

    price = document.getElementById("subBtn");
    if(b1){
        price = b1 * quan;
        return alert("The total will be" + price + "euro");
    }
    else if(b2){
        price = b2 * quan;
        return alert("The total will be" + price + "euro");
    }
    else if(b3){
        price = b3 * quan;
        return alert("The total will be" + price + "euro");
    }
}



