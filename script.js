function validate() {
  var mail = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  if (mail == "a@gmail.com" && pass == "1234") {
    window.location.reload("email.html");
    return false;
  } else {
    alert("enter right credentials");
  }
}
