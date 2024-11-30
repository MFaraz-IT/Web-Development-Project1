document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('deliveryForm').addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const city = document.getElementById('city').value;
        const street = document.getElementById('street').value;
        const postal = document.getElementById('postal').value;
        const product = document.getElementById('product detail').value;

        // Constraints
        if (name.length === 0 || name.length > 20) {
            alert('Name must be between 1 and 20 characters.');
        } else if (phone.length === 0) {
            alert('Phone number is mandatory.');
        } else if (city.length === 0) {
            alert('City is mandatory.');
        } else if (street.length === 0) {
            alert('Street is mandatory.');
        } else if (postal.length === 0) {
            alert('Postal code is mandatory.');
        } else if(product.length>200){ 
            alert("write details within 200 characters")
        } else {
            // Show a popup confirmation
            alert("Thank you! Your order will be delivered in 3 to 4 days.");
            this.reset(); // Optionally reset the form
        }
    });
});