function mukesh() {
    const num1 = document.getElementById('email').value;
    const num2 = document.getElementById('password').value;

    const email = "admin@admin.com";
    const password = "123456";

    if (num1 === email && num2 === password) {
      alert("Login Successfully to an ShopiFY Account");
    } else {
      alert("Incorrect Id or password Please Check again");
    }
  }





