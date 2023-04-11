window.onload = function(){

const btn_createAccount = document.getElementById("btn_createAccount");

btn_createAccount.addEventListener("click",function(e){
	console.log("button clicked!");
});




const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");

btn_createAccount.addEventListener("click", function(e) {
  if (password.value !== confirm_password.value) {
    e.preventDefault(); // prevent form submission
    const error_message = document.createElement("p");
    error_message.innerText = "Passwords do not match";
    error_message.style.color = "red";
    const form = document.querySelector("form");
    form.insertBefore(error_message, btn_createAccount);
  }
});


}