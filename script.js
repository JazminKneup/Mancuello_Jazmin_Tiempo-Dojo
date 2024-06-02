// Function to show an alert when a city is clicked
function messageAlert(city) {
    alert(`You clicked on ${city}`);
}

// Function to remove the cookie message
function removeButton() {
    document.querySelector('.bodyContainerMessage').style.display = 'none';
}

// Function to convert temperatures
function convert(selectElement) {
    const unit = selectElement.value;
    const temperatures = document.querySelectorAll('.conteinerimgtemperature p');
    
    temperatures.forEach(temp => {
        let value = parseInt(temp.textContent);
        if (unit === 'f') {
            value = Math.round((value * 9/5) + 32);
            temp.textContent = `${value}°`;
        } else {
            value = Math.round((value - 32) * 5/9);
            temp.textContent = `${value}°`;
        }
    });
}
