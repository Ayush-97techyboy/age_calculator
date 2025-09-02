document.getElementById('calculateBtn').addEventListener('click', function() {
    // Get input values
    const day = document.getElementById('dayIn').value;
    const month = document.getElementById('monthIn').value;
    const year = document.getElementById('yearIn').value;

    // Validation logic
    if (!day || !month || !year) {
        alert("This field is required");
        return;
    }
    if (month < 1 || month > 12) {
        alert("Must be a valid month");
        return;
    }
    if (day < 1 || day > 31) {
        alert("Must be a valid day");
        return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    if (birthDate > today) {
        alert("Must be in past");
        return;
    }

    // Calculate age
    let ageInMilliseconds = today - birthDate;
    let ageDate = new Date(ageInMilliseconds);
    let years = ageDate.getUTCFullYear() - 1970;
    let months = ageDate.getUTCMonth();
    let days = ageDate.getUTCDate() - 1;

    // Update output
    document.getElementById('yearOut').innerText = years + " years";
    document.getElementById('monthOut').innerText = months + " months";
    document.getElementById('dayOut').innerText = days + " days";

    // Add calculated class to results to hide hyphens
    document.querySelector('.results').classList.add('calculated');
});
