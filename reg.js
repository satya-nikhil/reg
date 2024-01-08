function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (name === "" || email === "" || password === "") {
      alert("Please fill out all fields");
  } else {
      alert("Registration successful!\nName: " + name + "\nEmail: " + email);
      // You can add code here to submit the form data to the server.
  }
}