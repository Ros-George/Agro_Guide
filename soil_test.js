// Check authentication state
firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
        // User is not logged in, redirect to login page
        window.location.href = "index.html";
    }
});

// Handle form submission
document.getElementById("soil_test-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    var ph = document.getElementById("ph").value;
    var sodium = document.getElementById("sodium").value;
    var potassium = document.getElementById("potassium").value;

    // Make a POST request to the Flask backend with the form data
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ph: ph, sodium: sodium, potassium: potassium})
    })

    .then(response => response.json())
    .then(data => {
        // Display suggested crops to the user
     //   document.getElementById('result').innerText = "Suggested Crop: " + data.suggested_crop;
        window.location.href = "/result";
    })
    .catch(error => console.error('Error:', error));
});
