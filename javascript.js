// Function to check eligibility
function checkEligibility() {
  let ageInput = document.getElementById("age");
  let membershipCheckbox = document.getElementById("membership");
  let resultElement = document.getElementById("result");

  // Retrieving the values from the input elements
  let age = parseInt(ageInput.value);
  let isMember = membershipCheckbox.checked;

  // Initialize an empty string to store the result message
  let result = "";

  // Checking eligibility based on age and the users membership status
  if (age >= 65) {
    result = "Congratulations!! You are eligible for the Senior Discount.";
  } else if (age >= 18 && isMember) {
    result = "Congratulations!! You are eligible for the Member Discount.";
  } else {
    result = "Sorry, you are not eligible for any discounts.";
  }
  // Display the result in the output element
  resultElement.textContent = result;
}
