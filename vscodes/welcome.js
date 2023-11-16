document.getElementById("login-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting
 
        // Get the username and password values
        var username = document.getElementById("Username").value;
        var password = document.getElementById("password").value;
 
        // Check if the login credentials are correct
        if (username === "rosik" && password === "karnati") {
            // Redirect to rosik.html
            window.location.href = "rosik.html";
        } else {
            // Display an error message (you can customize this part)
            alert("Invalid username or password. Please try again.");
        }
    });