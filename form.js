// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];





//Nom Input
const lastName = document.querySelector("#nom")

//Prenom Input
const firstName = document.querySelector("#prenom")

//Telephone Input
const telephone = document.querySelector("#telephone")

//Address Input
const email = document.querySelector("#email")

//Message Input
const message = document.querySelector("#message")

//Actual Form
const form = document.querySelector("#contact")


//Regex

const validEmail = /^[A-Za-z0-9\._\-]+@[A-Za-z]+[A-Za-z0-9\-]+[A-Za-z]+(\.[A-Za-z0-9\-]+)+$/i;
const validName = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 \.'\-]+$/;

form.setAttribute = ("novalidate", true);

form.onsubmit = submitForm;

function submitForm(e){
  e.preventDefault();
  // modal.style.display = "block";

  // let test = validName.test(lastName.value);
  // console.log(test);

  console.log("hello");
  // console.log(inputValidator(validName, firstName)); console.log(inputValidator(validName, lastName));
  // console.log(inputValidator(validEmail, email));
  

  
}

function inputValidator(regex, input){
  return regex.test(input.value);
}




// Get pop up button id to close the modal
// var popUpClose = document.querySelector(#popUpClose);

// When the user clicks the button, open the modal 
btn.onclick = function(e) {
  e.preventDefault();
  modal.style.display = "block";



  // document.body.style.overflow = "hidden"; // ADD THIS LINE
// //   document.body.style.height = "100%"; // ADD THIS LINE
  
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks on popUpClose, close the modal
popUpClose.onclick = function() {
  modal.style.display = "none";

  // document.body.style.overflow = "scroll"; // ADD THIS LINE
  // document.body.style.height = "auto"; // ADD THIS LINE
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";

    // document.body.style.overflow = "scroll"; // ADD THIS LINE
    // document.body.style.height = "auto"; // ADD THIS LINE
  }
}