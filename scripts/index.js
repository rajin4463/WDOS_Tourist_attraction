let submit = document.getElementById("submit");
let cart = document.getElementById("cart");
let show_cart = document.getElementById("show_cart");
let duration = document.getElementById("time");
let tot = document.getElementById("total");
let no_cart = document.getElementById("no_cart");
let food = document.getElementById("food_token");
let activity = document.getElementById("acdrop");
let num = document.getElementById('number-of-tick');
let temp = document.getElementById('temp');

let loyaltyPoints = 0;
let overallHead = 0;

//Init function
window.addEventListener("load", function(){
    document.getElementById('form').reset(); //reset form to default values (need for firefox)
    let total;
    let itemsincart;

    if(localStorage.getItem(`loyalty points`)>0) {
        //overallHead = parseInt(localStorage.getItem(`heads`));
    }
    else {
        //overallHead = 0;
        parseInt(localStorage.setItem(`loyalty points`, 0));
        //parseInt(localStorage.setItem(`heads`, 0));
    }
});

//total 
let total = 0;

//prices
let activityprice = 1000;
let Annual_Pass_Local = 4500;
let Annual_Pass_Foreign = 15000;
let Fadult = 5000;
let Fchild = 2500;
let Ladult = 1000;
let Lchild = 500;

//addtional charges
let Lhalf = 250;
let Fhalf = 500;
let Lfull = 500;
let Ffull = 1000;


//cart table (function to gernerate table to display cart information)
function carttable(total, ticket, time, price, activity, num){
    let table = document.getElementById("out");
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = `You Have Purchased a ${activity} ticket <br> for ${ticket} X ${num} (${time}).\n`;
    cell2.innerHTML = `${price * num}/=`;

    tot.innerHTML = `Rs.${total}/=`;
    cart.style.visibility = "visible";
}

function annualcarttable(total, ticket, price, num){
    let table = document.getElementById("out");
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = `You Have Purchased <br> ${ticket} X ${num} ticket(s).\n`;
    cell2.innerHTML = `${price * num}/=`;

    tot.innerHTML = `Rs.${total}/=`;
    cart.style.visibility = "visible";
}

//price calculation function
function pricecal(time, ticket, activity, food, num, table){   
    //display no cart item 
    if(itemsincart>=1){
        no_cart.style.display="none";
    }
   //calculate price & add to cart for ticket type.
   let price = 0;
    if(ticket==="Local-Child"){
        if(time === "12 hours"){
            foodTotal = food * 500;
            price = Lchild + activityprice + Lhalf + foodTotal;
            console.log(price);
            total += price * num;
            if(table == true){
                carttable(total, ticket, time, price, activity, num);
            }
            else{
                temp.innerHTML = `Total is Rs.${total}/=`;
                total = 0;
            }
        }
        else if(time === "24 hours"){
            foodTotal = food * 500;
            price = Lchild + activityprice + Lfull + foodTotal;
            total += price * num;
            if(table == true){
                carttable(total, ticket, time, price, activity, num);
            }
            else{
                temp.innerHTML = `Total is Rs.${total}/=`;
                total = 0;
            }
        }
        else if(time === "48 hours"){
            foodTotal = food * 500;
            price = Lchild + activityprice + (Lfull * 2) + foodTotal;
            total += price * num;
            if(table == true){
                carttable(total, ticket, time, price, activity, num);
            }
            else{
                temp.innerHTML = `Total is Rs.${total}/=`;
                total = 0;
            }
        }
        else{
            foodTotal = food * 500;
            price = Lchild + activityprice + foodTotal;
            total += price * num;
            if(table == true){
                carttable(total, ticket, time, price, activity, num);
            }
            else{
                temp.innerHTML = `Total is Rs.${total}/=`;
                total = 0;
            }
        }
    }
    else if(ticket==="Local-Adult"){
        if(time === "12 hours"){
            foodTotal = food * 500;
            price = Lchild + activityprice + Lhalf + foodTotal;
            total += price * num;
            if(table == true){
                carttable(total, ticket, time, price, activity, num);
            }
            else{
                temp.innerHTML = `Total is Rs.${total}/=`;
                total = 0;
            }
        }
        else if(time === "24 hours"){
            foodTotal = food * 500;
            price = Lchild + activityprice + Lfull + foodTotal;
            total += price * num;
            if(table == true){
                carttable(total, ticket, time, price, activity, num);
            }
            else{
                temp.innerHTML = `Total is Rs.${total}/=`;
                total = 0;
            }
        }
        else if(time === "48 hours"){
            price = Ladult + activityprice + (Lfull * 2) + foodTotal;
            foodTotal = food * 500;
            total += price * num;
            if(table == true){
                carttable(total, ticket, time, price, activity, num);
            }
            else{
                temp.innerHTML = `Total is Rs.${total}/=`;
                total = 0;
            }
        }
        else{
            foodTotal = food * 500;
            price = Lchild + activityprice + foodTotal;
            total += price * num;
            if(table == true){
                carttable(total, ticket, time, price, activity, num);
            }
            else{
                temp.innerHTML = `Total is Rs.${total}/=`;
                total = 0;
            }
        }
    }
    else if(ticket==="Foregin-Child"){
        if(time === "12 hours"){
            foodTotal = food * 500;
            price = Lchild + activityprice + Fhalf + foodTotal;
            total += price * num;
            if(table == true){
                carttable(total, ticket, time, price, activity, num);
            }
            else{
                temp.innerHTML = `Total is Rs.${total}/=`;
                total = 0;
            }
        }
        else if(time === "24 hours"){
            foodTotal = food * 500;
            price = Lchild + activityprice + Ffull + foodTotal;
            total += price * num;
            if(table == true){
                carttable(total, ticket, time, price, activity, num);
            }
            else{
                temp.innerHTML = `Total is Rs.${total}/=`;
                total = 0;
            }

        }
        else if(duration.value === "48 hours"){
            price = Fchild + activityprice + (Lfull * 2) + foodTotal;
            foodTotal = food * 500;
            total += price * num;
            if(table == true){
                carttable(total, ticket, time, price, activity, num);
            }
            else{
                temp.innerHTML = `Total is Rs.${total}/=`;
                total = 0;
            }
        }
        else{
            foodTotal = food * 500;
            price = Lchild + activityprice + foodTotal;
            total += price * num;
            if(table == true){
                carttable(total, ticket, time, price, activity, num);
            }
            else{
                temp.innerHTML = `Total is Rs.${total}/=`;
                total = 0;
            }
            
        }
    }
    else if(ticket==="Foregin-Adult"){
        if(time === "12 hours"){
            foodTotal = food * 500;
            price = Lchild + activityprice + Fhalf + foodTotal;
            total += price * num;
            if(table == true){
                carttable(total, ticket, time, price, activity, num);
            }
            else{
                temp.innerHTML = `Total is Rs.${total}/=`;
                total = 0;
            }
        }
        else if(time === "24 hours"){
            foodTotal = food * 500;
            price = Lchild + activityprice + Ffull + foodTotal;
            total += price * num;
            if(table == true){
                carttable(total, ticket, time, price, activity, num);
            }
            else{
                temp.innerHTML = `Total is Rs.${total}/=`;
                total = 0;
            }
        }
        else if(duration.value === "48 hours"){
            price = Fadult + activityprice + (Lfull * 2) + foodTotal;
            foodTotal = food * 500;
            total += price * num;
            if(table == true){
                carttable(total, ticket, time, price, activity, num);
            }
            else{
                temp.innerHTML = `Total is Rs.${total}/=`;
                total = 0;
            }
        }
        else{
            foodTotal = food * 500;
            price = Lchild + activityprice + foodTotal;
            total += price * num;
            if(table == true){
                carttable(total, ticket, time, price, activity, num);
            }
            else{
                temp.innerHTML = `Total is Rs.${total}/=`;
                total = 0;
            }
        }
    }
    else if(ticket==="Annual-Foreign"){
        foodTotal = food * 500;
        price += Annual_Pass_Foreign + foodTotal;
        total += price * num;
        if(table == true){
            annualcarttable(total, ticket, price, num);
        }
        else{
            temp.innerHTML = `Total is Rs.${total}/=`;
            total = 0;
        }
    }
    else if(ticket==="Annual-Local"){
        foodTotal = food * 500;
        price += Annual_Pass_Local + foodTotal;
        total += price * num;
        if(table == true){
            annualcarttable(total, ticket, price, num);
        }
        else{
            temp.innerHTML = `Total is Rs.${total}/=`;
            total = 0;
        }
    }
    else{
        alert("Pls select a vaild option");
    }
}

//Add item to cart
let itemsincart = 0;
submit.addEventListener("click",function(addtocart){
    itemsincart += 1;
    addtocart.preventDefault();

    let ticket = document.getElementById("ticket").value;
    let time = document.getElementById("time").value;
    if(num.value>=1){
        pricecal(time, ticket, activity.value, food.value, num.value, true);
        temp.innerHTML = '';
    } else {
        alert('Please select a amount(s)');
    } 

    if (num.value >= 3){
        if(localStorage.getItem(`loyalty points`)>0){
            let loyaltyPoints = parseInt(localStorage.getItem(`loyalty points`));
            loyaltyPoints += num.value * 20;
            localStorage.setItem(`loyalty points`, parseInt(loyaltyPoints));
        }
        else {
            loyaltyPoints = num.value * 20;
            localStorage.setItem(`loyalty points`, parseInt(loyaltyPoints));
        }
    }
    else{
        loyaltyPoints = 0;
    }

    getLoyalPoints = localStorage.getItem(`loyalty points`);

});

//disable duration & food token for annual pass
let ticket = document.getElementById("ticket");
ticket.addEventListener("change",function(){
    if(ticket.value === "Annual-Foreign" || ticket.value === "Annual-Local"){
        duration.disabled = true;
    }
    else{
        duration.disabled = false;
    }
    //food token disabling
    if(ticket.value === "Annual-Foreign" || ticket.value === "Annual-Local"){
        food_token.disabled = true;
    }
    else{
        food_token.disabled = false;
    }
});

//Remove item from cart 
remove.addEventListener("click", (form)=>{
    document.getElementById("no_cart").style.display="block";
    total = 0;
    itemsincart = 0;
    tot.innerHTML = `Rs.0/=`;
    out.innerHTML = '';
});

//close cart
let close = document.getElementById("close");
close.addEventListener('click', (form)=>{
    cart.style.visibility="hidden";

});

//show cart
show_cart.addEventListener('click', function(showcart){
    showcart.preventDefault();
    cart.style.visibility="visible";
    if(itemsincart>=1){
        no_cart.style.display="none";
    }
});

//checkout
checkout.addEventListener('click',function(){
    if(total>0){
        alert(`Thank you for purchasing. \r\nYour total is Rs.${total}/=`);
        tot.innerHTML = `Rs.0/=`;
        cart.style.visibility="hidden";
        document.getElementById("no_cart").style.display="block";
        total = 0;
        itemsincart = 0;
        out.innerHTML = '';
        location.reload();
    }
    else{
        alert("Please add item(s) to cart");
        cart.style.visibility="hidden";
    }
});

// add to favorite 
let fadd = document.getElementById('fav_add');
fadd.addEventListener('click', function(addtofavourite){
    addtofavourite.preventDefault();
    let store_num = localStorage.setItem(`tic-num`, num.value);
    let store_acc = localStorage.setItem(`activity`,activity.value);
    let store_type = localStorage.setItem(`ticket`, ticket.value);
    let store_time = localStorage.setItem(`duration`, time.value);
    let store_extra = localStorage.setItem(`extras`, food.value);
    alert("Your order has been added to favourites");
});


// order favoutite
let order_fav = document.getElementById('order_fav');
order_fav.addEventListener('click', function(orderfav){
    itemsincart += 1;
    let get_num = localStorage.getItem(`tic-num`);
    let get_acc = localStorage.getItem(`activity`);
    let get_type = localStorage.getItem(`ticket`);
    let get_time = localStorage.getItem(`duration`);
    let get_extra = localStorage.getItem(`extras`);
    pricecal(get_time, get_type, get_acc, get_extra, get_num, true);
    alert("Favourite Items added to cart");
});

//check for loyalty points 
let loyal = document.getElementById('loyal');

loyal.addEventListener('click', function(evt){
    alert(`Your loyalty points are ${getLoyalPoints}`);
});


//current order event listeners
num.addEventListener('change', (evt) =>{
    pricecal(duration.value, ticket.value, activity.value, food.value, num.value, false);
});

food.addEventListener('change', (evt)=>{
    pricecal(duration.value, ticket.value, activity.value, food.value, num.value, false);
});

duration.addEventListener('change', (evt)=>{
    pricecal(duration.value, ticket.value, activity.value, food.value, num.value, false);
});

ticket.addEventListener('change', (evt)=>{
    pricecal(duration.value, ticket.value, activity.value, food.value, num.value, false);
});