function order() { 
    document.getElementById('out1').innerHTML = "Login successful, click Store Page!";
}

function res(event) {
    event.preventDefault(); // Prevents form submission refresh
    const email1 = document.getElementById('email').value;
    document.getElementById('out1').innerHTML = "Password reset, sent to " + email1;
}