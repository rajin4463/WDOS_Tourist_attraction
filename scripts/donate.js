const form = document.getElementById('form');
const fname = document.getElementById('full-name');
const email = document.getElementById('email');
const Cnum = document.getElementById('card-num');
const cvc = document.getElementById('cvc-num');
const amount = document.getElementById('amount');
const promt = document.getElementById('promt');
const radio = document.getElementById('card-type');
const radioControle = document.getElementsByClassName('radio-control');
const close = document.getElementById('close');



form.addEventListener('submit', (evt) =>{
    evt.preventDefault();
    checkInputs();
    if(vaild == true) {
        promt.style.display = 'block';
    }
    else {
        promt.style.display = 'none';
    }

    console.log(radio)
});

function checkInputs(){
    //get the inputs from the form
   const name_value = fname.value.trim();
   const email_value = email.value.trim();
   const Cnum_value = Cnum.value.trim();
   const cvc_value = cvc.value.trim();

   if(name_value === '') {
    setErrorFor(fname, 'Full name can not be blank');
    vaild = false;
   } else {
    setSuccessFor(fname);
    vaild = true;
   }

   if(email_value === '') {
    setErrorFor(email, 'Email can not be blank');
    vaild = false;
   } 
   else if(!isEmail(email_value)) {
    setErrorFor(email, 'Email is not valid') ;
    vaild = false;
   }
   else {
    setSuccessFor(email);
    vaild = true;
   }

   if(Cnum_value === '') {
    setErrorFor(Cnum, 'Card number can not be blank');
    vaild = false;
   } else {
    setSuccessFor(Cnum);
    vaild = true;
   }

   if(cvc_value === '') {
    setErrorFor(cvc, 'CVC number can not be blank');
    vaild = false;
   } else {
    setSuccessFor(cvc);
    vaild = true;
   }

   if(radio.checked == true) {
    radioSucessFor(radio);
   }
   else {
    radioErrorFor(radio, 'Select vaild card type');
   }
}

function setErrorFor(input, message) {
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');

    //add error message
    small.innerText = message;

    //add error class
    formcontrol.className = 'form-control error';
}

function setSuccessFor(input) {
    const formcontrol = input.parentElement;

    //add success class
    formcontrol.className = 'form-control success';
}

function radioSucessFor(input){
    const radiocontrol = input.parentElement;

    radiocontrol.className = 'radio-control success';
}

function radioErrorFor(input, message) {
    const radioElement = input.parentElement;
    const small = radioElement.querySelector('small');

    //add error message
    small.innerText = message;

    //add error class
    radioElement.className = 'radio-control error';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

close.addEventListener('click', (evt) =>{
    promt.style.display = 'none';
    location.reload();
});