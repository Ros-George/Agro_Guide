function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("User logged in:", user.email);
        window.location.href = "soil_test.html"; // Redirect to soil test page after successful login
    })
    .catch((error) => {
        var errorMessage = error.message;
        document.getElementById('error-message').innerText = errorMessage;
    });
}

function register() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Registration successful
        var user = userCredential.user;
        window.location.href = "index.html"; // Redirect to index page after successful registration
    })
    .catch((error) => {
        var errorMessage = error.message;
        document.getElementById('error-message').innerText = errorMessage;
    });
}
