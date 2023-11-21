document.querySelector("form").addEventListener("submit", function (event) {
  let phoneNumber = document.querySelector('[name="phone_number"]').value;
  if (!isValidPhoneNumber(phoneNumber)) {
    alert("Invalid phone number format. Please use only digits.");
    event.preventDefault();
  }
});

function isValidPhoneNumber(phoneNumber) {
  return /^\d+$/.test(phoneNumber);
}
