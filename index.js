const d = new Date();
const curDate = d.getFullYear();

document.querySelector(".curyear").innerText = curDate;

document.querySelector(".menu").addEventListener('click', () => {
    document.querySelector(".nav_items").classList.add("clicked");
});
document.querySelector("#cross").addEventListener('click', () => {
    document.querySelector(".nav_items").classList.remove("clicked");
});

//   NAVBAR REMOVE CLASS ON CLICK IN EACH ITEM
  for(i=0;i<document.querySelectorAll(".item").length;i++) {
  document.querySelectorAll(".item")[i].addEventListener('click',() => {
    document.querySelector(".nav_items").classList.remove("clicked");
  });
}


//    form validaton

const forms = document.querySelector(".form");
const btn = document.querySelector(".btn-success");

const username = document.getElementById("iform1");
const email = document.getElementById("iform2");
const phone = document.getElementById("iform3");
const message = document.getElementById("iform4");


btn.addEventListener('click', (e) => {
    e.preventDefault();
    validate();
});


function sendData() {
    const inpBox =  document.querySelectorAll(".inpBox");
   const inpCount = inpBox.length;
   var count = 0;
  for(var i=0;i<inpCount;i++) {
      if(inpBox[i].className === "inpBox success") {
      count++;
      }
  }
if (count === inpCount) {
    swal("Thank You!", "Your message has been succesfully sent!", "success");
}

}


function validate() {
  
    const nameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const messageVal = message.value.trim();
    
    


    const errorMessage = (input,errormsg) => {
       const formControl = input.parentElement;
        formControl.className = "inpBox error";
        formControl.querySelector("small").innerText = errormsg;
    }

    const successMessage = (inp) => {
        const formControl = inp.parentElement;
        formControl.className = "inpBox success";
    }

//   Name Validation
    if(nameVal === "") {
        errorMessage(username,"Name can't be blank");
 }
  else if(nameVal.length < 3) {
     errorMessage(username,"Invalid Name");
 }
 else {
     successMessage(username);
 }
//    Email Validation
if(emailVal === "") {
    errorMessage(email,"Email can't be blank");
}
else if(emailVal.lastIndexOf('.') <= emailVal.indexOf('@') + 3) {
    errorMessage(email,"Invalid Email");
}
else if(emailVal.lastIndexOf('.') === emailVal.length - 1) {
    errorMessage(email,"Invalid Email");
}
else {
    successMessage(email);
}
// Phone Validaton
if(phoneVal === "") {
    errorMessage(phone,"Phone number can't be blank");
}
else if(phoneVal.length != 10) {
    errorMessage(phone,"Invalid phone number");
}
else {
    successMessage(phone);
}

//    Message Validation
  if(messageVal === "") {
      errorMessage(message,"Message can't be blank");
  }
  else if(messageVal.length < 7) {
      errorMessage(message,"Too short message");
  }
  else {
    successMessage(message);
}


sendData();

}


