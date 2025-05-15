document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Perform validation here (e.g., check credentials)

        if (username === "Aditya" && password ==="12345") {
            // Redirect to a successful login page or perform any desired action
            alert("Login successful!");
        } else {
            errorMessage.textContent = "Invalid username or password. Please try again.";
        }
    });
});
