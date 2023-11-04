function redirectCallback() {
    window.location.href = "mainPage.html"; // Replace with the actual URL of the main page
}

// Modified validateForm function with a callback
function validateForm(callback) {
    var inputUserName4 = document.getElementById('inputUserName4');
    var inputPassword4 = document.getElementById('inputPassword4');

    if (inputUserName4.value !== 'admin' || inputPassword4.value !== '12345') {
        alert("Invalid username or password!");
        return false;
    } else {
        // Call the callback function to redirect
        callback();
        return true; // You can also prevent the form submission here if needed
    }
}