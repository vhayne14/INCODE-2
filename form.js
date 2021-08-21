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
const valNumber = /^[0-9]{10,10}$/;   // number should consist of 10 digits e.g. 0412345678
const validMsg = /^.{0,200}$/; // message is optional and can handle any character with a limit of 200 characters

form.setAttribute = ("novalidate", true);

form.onsubmit = submitForm;


function submitForm(e){
  
  e.preventDefault();
  // modal.style.display = "block";
  // console.log("hello");
  // let test = validName.test(lastName.value);
  // console.log(test);


  
    if (
      inputValidator(validName, firstName)==true &&
      inputValidator(validName, lastName)==true &&
      inputValidator(valNumber, telephone)==true &&
      inputValidator(validEmail, email)==true &&
      inputValidator(validMsg, message)==true

    ) {
      modal.style.display = "block";
      console.log("FirstName: "+inputValidator(validName, firstName)); 
      console.log("LastName: "+inputValidator(validName, lastName));
      console.log("Telephone: ")+inputValidator(valNumber, telephone);
      console.log("Email: "+inputValidator(validEmail, email));
      console.log("Message: "+inputValidator(validMsg, message));
      
    } 
    else if(
      inputValidator(validName, firstName)==true &&
      inputValidator(validName, lastName)==true &&
      inputValidator(valNumber, telephone)==false &&
      inputValidator(validEmail, email)==true &&
      inputValidator(validMsg, message)==true
    ){
      console.log("Please double check your telephone number. It must consist of only numbers with a length of 10\ne.g. 0412345678");
    }
    else if(
      inputValidator(validName, firstName)==false ||
      inputValidator(validName, lastName)==false &&
      inputValidator(validEmail, email)==true &&
      inputValidator(validMsg, message)==true
    ){
      console.log("Please check your Nom or Prenom.\nPlease don't include special characters");
    }
    else if(
      inputValidator(validName, firstName)==true &&
      inputValidator(validName, lastName)==true &&
      inputValidator(validEmail, email)==false&&
      inputValidator(validMsg, message)==true
    ){
      console.log("Please check your email address and try again");
    }
    else if(
      inputValidator(validName, firstName)==false &&
      inputValidator(validName, lastName)==true &&
      inputValidator(validEmail, email)==false&&
      inputValidator(validMsg, message)==true
    ){
      console.log("Please check your nom. Please don't include special characters");
      console.log("Please check your email address and try again");
    }
    else if(
      inputValidator(validName, firstName)==true &&
      inputValidator(validName, lastName)==false &&
      inputValidator(validEmail, email)==false &&
      inputValidator(validMsg, message)==true
    ){
      console.log("Please check your prenom. Please don't include special characters");
      console.log("Please check your email address and try again");
    }
    else if(
      inputValidator(validName, firstName)==true &&
      inputValidator(validName, lastName)==true &&
      inputValidator(validEmail, email)==true &&
      inputValidator(validMsg, message)==false
    ){

      console.log("Your message should not exceed 200 characters. Please try again");
    }
    else{
      console.log("An error has occured. Please double check your inputs and try again");
    }
      
    }

function inputValidator(regex, input){
  return regex.test(input.value);
}




// Get pop up button id to close the modal
// var popUpClose = document.querySelector(#popUpClose);

// When the user clicks the button, open the modal 
// btn.onclick = function(e) {
// //   console.log("hello");
//   e.preventDefault();
//   modal.style.display = "block";

// // document.body.style.overflow = "hidden"; // ADD THIS LINE
// //   document.body.style.height = "100%"; // ADD THIS LINE
  
// }

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