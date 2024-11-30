document.getElementById('feedbackForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const purpose = document.getElementById('purpose').value;
    const message = document.getElementById('message').value;

    // Constraint: Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !purpose || !message) {
        alert('All fields are mandatory. Please fill in the form completely.');
    } else if (name.length<5 || name.length > 20) {
        alert('Name must between 5 to 20 characters.');
    } else if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
    } else if (message.length > 500) {
        alert('Message must be less than 500 characters.');
    } else {
        alert('Thank you for your feedback!');
        this.reset(); // Optionally reset the form
    }
});