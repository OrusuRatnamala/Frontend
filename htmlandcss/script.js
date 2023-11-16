function validateLogin() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const submitButton = document.getElementById("submitButton");
			
       if (username === password) {
        alert("Login successful!");
        window.location.href = "home.html"; 
    } else {
        alert("Wrong credentials. Please try again.");
    }

	
	
}
 
function signup() {
    alert("Signup successful! Now, you can login.");
    window.location.href = "login.html";
}

