const firebaseConfig = {
    apiKey: "AIzaSyDu0X48WAXa4D22J0zFHZOlhvOUjWArICI",
    authDomain: "trial3-92e1a.firebaseapp.com",
    databaseURL: "https://trial3-92e1a-default-rtdb.firebaseio.com",
    projectId: "trial3-92e1a",
    storageBucket: "trial3-92e1a.appspot.com",
    messagingSenderId: "961698019135",
    appId: "1:961698019135:web:ff5487ad1d3cb7d9e0458a"
  };

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

function submitForm(event) {
  event.preventDefault(); // Prevent default form submission

    // Access the form element
    var form = document.getElementById('MyForm');

    // Get the values from the form fields
    var likes = getSelectedCheckboxValues('likes');
    var dislikes = getSelectedCheckboxValues('dislikes');
    var ageGroup = getSelectedRadioValue('age-g');
    var location = document.getElementById('location').value;
    var soloOrGroup = getSelectedRadioValue('solo');
    var category = getSelectedRadioValue('category');
    var whatsappGroup = document.getElementById('yes').checked;
    var teamSize = document.getElementById('figure').value;
    var budget = getSelectedRadioValue('budget');

    // Create an object with the form data
    var formData = {
        likes: likes,
        dislikes: dislikes,
        ageGroup: ageGroup,
        location: location,
        soloOrGroup: soloOrGroup,
        category: category,
        whatsappGroup: whatsappGroup,
        teamSize: teamSize,
        budget: budget
    };

    // Store the form data in Firestore or perform other actions
    // ... Code to store data in Firestore or perform other actions ...

    // Reset the form
    form.reset();
}

// Helper function to get the selected values of checkboxes
function getSelectedCheckboxValues(name) {
    var checkboxes = document.querySelectorAll('input[name="' + name + '"]:checked');
    var values = [];
    checkboxes.forEach(function (checkbox) {
        values.push(checkbox.value);
    });
    return values;
}

// Helper function to get the value of the selected radio button
function getSelectedRadioValue(name) {
    var radios = document.querySelectorAll('input[name="' + name + '"]:checked');
    if (radios.length > 0) {
        return radios[0].value;
    }
    return null;
}