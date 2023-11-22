if (window.jQuery) {
  // jQuery is loaded
  $(document).ready(function () {
    $("#registrationForm").on("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission
      if (validateForm()) {
        // If validation passes
        alert("Form has been submitted successfully!");
      }
    });
  });
} else {
  // jQuery is not loaded
  console.error("jQuery is not loaded.");
}
function validateForm() {
  var username = $("#username").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var password = $("#password").val();
  var confirmPassword = $("#confirmPassword").val();

  // Regular expressions for validation
  var usernameRegex = /^[a-zA-Z0-9]+$/;
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var phoneRegex = /^[0-9]{10}$/;
  var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$#&]).{7,}$/;

  // Validation
  if (!usernameRegex.test(username)) {
    alert("Username must contain only letters and numbers");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert(
      "Invalid email address. Please use a valid email format (e.g., user@example.com)"
    );
    return false;
  }

  if (!phoneRegex.test(phone)) {
    alert("Phone number must be 10 digits and contain only numeric values");
    return false;
  }

  if (!passwordRegex.test(password)) {
    alert(
      "Password must be at least 7 characters and contain at least one capital letter, one digit, and one special character from the set (&,$,#@)"
    );
    return false;
  }

  if (password !== confirmPassword) {
    alert("Password and Confirm Password do not match");
    return false;
  }

  // If all validations pass, you can submit the form
  return true;
}
