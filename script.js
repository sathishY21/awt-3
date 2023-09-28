// Get the form element
var form = document.querySelector("#cataloging-form");

// Add a submit event listener to the form
form.addEventListener("submit", function(event) {
  // Prevent the form from submitting if it is invalid
  event.preventDefault();

  // Validate the form data
  if (form.title.value === "") {
    alert("Please enter a title for the book.");
    return;
  }

  // If the form data is valid, submit the form
  form.submit();
});
