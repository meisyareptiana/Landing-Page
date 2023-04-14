// Soal no 6
function handleGetFormData() {
  // Mendapatkan nilai dari input
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;
  // mengembalikan nilai sebuah objek
  const formData = {
    name: name,
    email: email,
    city: city,
    zipCode: zipCode,
    status: status,
  };
  return formData;
}
// Soal no 7
function isNumber(input) {
  return !isNaN(input) && !isNaN(parseFloat(input));
}
// Soal no 8
function checkboxIsChecked() {
  const statusCheckbox = document.getElementById("status");
  return statusCheckbox.checked;
}
// Soal no 9
function validateFormData(formData) {
  if (!formData) {
    return false;
  }
  if (isNaN(formData.zipCode)) {
    return false;
  }
  if (!checkboxIsChecked()) {
    return false;
  }
  return true;
}
document
  .getElementById("submit-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    submit();
  });
function submit() {
  const formData = handleGetFormData();
  if (validateFormData(formData) == false) {
    document.getElementById("warning").innerHTML =
      "Periksa form anda sekali lagi";
  } else {
    document.getElementById("warning").innerHTML = "";
  }
}
