function ftn1() {
    var rdbtn1 = document.getElementById("rdbtn1");
    var rdbtn2 = document.getElementById("rdbtn2");

    if (rdbtn1.checked == true) {
      alert("The channel selected is " + rdbtn1.value);
      return true;
    } else if (rdbtn2.checked == true) {
      alert("The channel selected is " + rdbtn2.value);
      return true;
    } else {
      alert("No channel selected");
      return false;
    }
  }
  function validate() {
    var name = document.getElementById("name");
    var mail = document.getElementById("mail");
    var password = document.getElementById("pass");
    var address = document.getElementById("address");

    if (name.value.trim() == "") {
      alert("Name cannot be blank");
      return false;
    } else if (mail.value.trim() == "") {
      alert("Mail cannot be blank");
      return false;
    } else if (password.value.trim().length < 5) {
      alert("Password is too short");
      return false;
    } else if (address.value == "") {
      alert("Address is required");
      return false;
    } else {
      return true;
    }
  }

  let navBtn = document.getElementById("click");
  const navBar = document.getElementById("navlinks");

  navBtn.addEventListener("click", () => {
    navBar.classList.toggle("display")
  });
