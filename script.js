document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document
        .getElementById("username")
        .value
        .trim()
        .toUpperCase();

    const password = document
        .getElementById("password")
        .value
        .trim();

    const message = document.getElementById("message");

    const validUsername = "SEASALTLATTE";

    const validPasswords = [
        "April 03, 2026",
        "04/03/26"
    ];

    if (!username || !password) {
        message.textContent = "Please write the correct answer.";
        message.className = "message error";
        return;
    }

    if (
        username === validUsername &&
        validPasswords.includes(password)
    ) {
        message.textContent = "Login successful! 💖";
        message.className = "message success";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);

    } else {
        message.textContent = "Invalid answer. Try again!";
        message.className = "message error";
    }
    
});

