const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const messageEl = document.querySelector("#message");

let isValid = false;
const users = [];
let passwordsMatch = false;

// Store data
function storeData() {
  let user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  users.push(user);

  form.reset();
}

// Function to check if passwords match and are valid
function validateForm() {
  // Constraint API
  isValid = form.checkValidity();
  if (!isValid) {
    // Change massage for a error message
    messageEl.textContent = "Please fill out all fields.";
    console.log(isValid);
    messageContainer.style.borderColor = "rgb(184, 0, 0)";
    return;
  }

  // Check if passwords match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderBottom = "rgb(0, 119, 0)";
    password2El.style.borderBottom = "rgb(0, 119, 0)";
  } else {
    passwordsMatch = false;
    password1El.style.borderBottom = "rgb(184, 0, 0)";
    password2El.style.borderBottom = "rgb(184, 0, 0)";
    messageContainer.style.borderColor = "rgb(184, 0, 0)";
    messageEl.textContent = "Please Make sure passwords match.";
    return;
  }

  // if passwords match and form is valid
  if (passwordsMatch && isValid) {
    messageEl.textContent = "Successfully register";
    messageContainer.style.borderColor = "rgb(0, 119, 0)";
  }
}

function processFormData(event) {
  event.preventDefault(); // prevent the default submit behavior
  // validate form
  validateForm();

  if (isValid && passwordsMatch) {
    storeData();
  }
}

// Event listener
form.addEventListener("submit", processFormData);
