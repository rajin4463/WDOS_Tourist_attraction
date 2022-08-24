let submit = document.getElementById("submit");
let cart = document.getElementById("cart");
let show_cart = document.getElementById("show_cart");
let duration = document.getElementById("time");
let tot = document.getElementById("total");
let no_cart = document.getElementById("no_cart");
let food = document.getElementById("food_token");
let activity = document.getElementById("acdrop");
let num = document.getElementById('number-of-tick');

//Init function
window.addEventListener("load", function(){
    document.getElementById('form').reset(); //reset form to default values (need for firefox)
    let total;
    let itemsincart;
});

//total 
let total = 0;
let token = 0;

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
function carttable(total, ticket, time, price, activity){
    let table = document.getElementById("out");
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = `You Have Purchased a ${activity} ticket <br> for ${ticket} X ${num.value} (${time}).\n`;
    cell2.innerHTML = `${price * num.value}/=`;

    tot.innerHTML = `Rs.${total}/=`;
    cart.style.visibility = "visible";
}

function annualcarttable(total, ticket, price){
    let table = document.getElementById("out");
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = `You Have Purchased <br> ${ticket} X ${num.value} ticket(s).\n`;
    cell2.innerHTML = `${price * num.value}/=`;

    tot.innerHTML = `Rs.${total}/=`;
    cart.style.visibility = "visible";
}

//price calculation function
function pricecal(time, ticket, activity, food){   
    //display no cart item 
    if(itemsincart>=1){
        no_cart.style.display="none";
    }
    //food token
    if(food == true){
        token = 500;
    }
    else{
        token = 0;
    }
   //calculate price & add to cart for ticket type.
   let price = 0;
   if(num.value>=1) {
        if(ticket==="Local-Child"){
            if(time === "12 hours"){
                price = Lchild + activityprice + Lhalf + token;
                console.log(price);
                total += price * num.value;
                carttable(total, ticket, time, price, activity);
                cart.style.visibility = "visible";
            }
            else if(time === "24 hours"){
                price = Lchild + activityprice + Lfull + token;
                total += price * num.value;
                carttable(total, ticket, time, price, activity);
                cart.style.visibility = "visible";
            }
            else{
                price = Lchild + activityprice + token;
                total += price * num.value;
                carttable(total, ticket, time, price, activity);
                cart.style.visibility = "visible";
            }
        }
        else if(ticket==="Local-Adult"){
            if(time === "12 hours"){
                price = Ladult + activityprice + Lhalf + token;
                total += price * num.value;
                carttable(total, ticket, time, price, activity);
                cart.style.visibility = "visible";
            }
            else if(time === "24 hours"){
                price = Ladult + activityprice + Lfull + token;
                total += price * num.value;
                carttable(total, ticket, time, price, activity);
                cart.style.visibility = "visible";
            }
            else{
                price += Ladult + activityprice + token;
                total += price * num.value;
                carttable(total, ticket, time, price, activity);
                cart.style.visibility = "visible";
            }
        }
        else if(ticket==="Foregin-Child"){
            if(time === "12 hours"){
                price = Fchild + activityprice + Fhalf + token;
                total += price * num.value;
                carttable(total, ticket, time, price, activity);
                cart.style.visibility = "visible";
            }
            else if(time === "24 hours"){
                price = Fchild + activityprice + Ffull + token;
                total += price * num.value;
                carttable(total, ticket, time, price, activity);
                cart.style.visibility = "visible";
            }
            else{
                price += Fchild + activityprice + token;
                total += price * num.value;
                carttable(total, ticket, time, price, activity);
                cart.style.visibility = "visible";
            }
        }
        else if(ticket==="Foregin-Adult"){
            if(time === "12 hours"){
                price = Fadult + activityprice + Fhalf + token;
                total += price * num.value;
                carttable(total, ticket, time, price, activity);
            }
            else if(time === "24 hours"){
                price = Fadult + activityprice + Ffull + token;
                total += price * num.value;
                carttable(total, ticket, time, price, activity);
            }
            else{
                price += Fadult + activityprice + token;
                total += price * num.value;
                carttable(total, ticket, time, price, activity);
            }
        }
        else if(ticket==="Annual-Foreign"){
            price += Annual_Pass_Foreign;
            total += price * num.value;
            annualcarttable(total, ticket, price);
        }
        else if(ticket==="Annual-Local"){
            price += Annual_Pass_Local;
            total += price * num.value;
            annualcarttable(total, ticket, price);
        }
        else{
            alert("Pls select a vaild option");
        }
   } else {
    alert('Please select a amount');
   }
}

//Add item to cart
let itemsincart = 0;
submit.addEventListener("click",function(addtocart){
    itemsincart += 1;
    addtocart.preventDefault();

    let ticket = document.getElementById("ticket").value;
    let time = document.getElementById("time").value;
    pricecal(time, ticket, activity.value, food.checked);

    //calculate loyalty points 
    if(itemsincart>3){
        let loyaltiy = localStorage.setItem(`loyalty points`, itemsincart*20);
    }
    else{
        let loyaltiy = localStorage.setItem(`loyalty points`, 0);
    }
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
    let store_acc = localStorage.setItem(`activity`,activity.value);
    let store_type = localStorage.setItem(`ticket`, ticket.value);
    let store_time = localStorage.setItem(`duration`, time.value);
    let store_extra = localStorage.setItem(`extras`, food.checked);
    alert("Your order has been added to favourites");
});


// order favoutite
let order_fav = document.getElementById('order_fav');
order_fav.addEventListener('click', function(orderfav){
    itemsincart += 1;
    let get_acc = localStorage.getItem(`activity`);
    let get_type = localStorage.getItem(`ticket`);
    let get_time = localStorage.getItem(`duration`);
    let get_extra = localStorage.getItem(`extras`);
    pricecal(get_time, get_type, get_acc, get_extra);
    alert("Favourite Items added to cart");
});

//check for loyalty points 
let loyal = document.getElementById('loyal');

loyal.addEventListener('click', function(evt){
    let points = localStorage.getItem('loyalty points');
    alert(`Your loyaltiy points are ${points}`);
});
