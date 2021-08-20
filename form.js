// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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
span.onclick = function() {
  modal.style.display = "none";
}

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