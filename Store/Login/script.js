document.addEventListener("DOMContentLoaded", () => {
    function forgotpass(event) {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page

        const emailInput = document.getElementById('email'); // Get the email input element
        const emailValue = emailInput.value; // Get the value of the input field
        const forgotmessage = "Email sent to: " + emailValue;

        const out1 = document.getElementById('out1'); // Ensure this is a valid element in your HTML
        out1.innerHTML = forgotmessage; // Update the innerHTML to show the message
    }

    const forgotForm = document.getElementById('forgotPasswordForm'); // Get the form
    forgotForm.addEventListener('submit', forgotpass); // Attach the submit event listener
});
