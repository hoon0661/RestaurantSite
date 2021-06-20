var form = document.forms["requestForm"];

function validate() {
  form.className = "needs-validation";
  if (!form.checkValidity()) {
    form.className = "was-validated";
    return false;
  }
  alert("Form was successfully submitted!");
  return false;
}

function reset() {
  form.className = "needs-validation";
}
