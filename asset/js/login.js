document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const username = form.username.value;
        const password = form.password.value;
        
        if (username.trim() === "" || password.trim() === "") {
            alert("Username dan password tidak boleh kosong!");
        } else {
            alert("Login berhasil!");
            window.location.href = "contact.html";
        }
    });
});