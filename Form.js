function validateForm(){
	var firstName=document.getElementById('fn').value;
	var lastName=document.getElementById('ln').value;
	var emailId=document.getElementById('em').value;
	var mobileNumber=document.getElementById('mn').value;
	var password=document.getElementById('pw').value;
	var confirmPassword=document.getElementById('cpw').value;


	if (firstName.trim()==="") {
		alert("First Name must be filled out");
		return false;
	}

	if (lastName.trim()==="") {
		alert("Last Name must be filled out");
		return false;
	}
	if (emailId.trim()==="") {
		alert("Email ID must be filled out");
		return false;
	}
	var eamilRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!eamilRegex.test(emailId)) {
		alert("Enter a valid Email ID");
		return false;
	}
	if (mobileNumber.trim()===""|| isNaN(mobileNumber)|| mobileNumber.length!==10) {
		alert("Enter a valid Mobile Number");
		return false;
	}
	if (password==="password") {
		alert("Password cannot be password")
	}
	if (password.length<8 || confirmPassword.length<8) {
		alert("Enter the password with minimum 8 Characters");
	}
	if (password.trim()==="") {
		alert("password must be filled out");
		return false;
	}
	if (confirmPassword.trim()==="") {
		alert("Confirm password must be filled out");
		return false;
	}
	if (password!==confirmPassword) {
		alert("Password and Confirm Password does not match");
		return false;
	}
	return true;
}