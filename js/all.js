$(document).ready(function(){
   $(function(){
  $("#header").load("../includes/header.html");
   });


document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.querySelector("main"); // This holds all the images
    const detailsContainer = document.getElementById("detailsContainer"); // The section where item details are shown
    const selectedImage = document.getElementById("selectedImage");
    const itemName = document.getElementById("itemName");
    const itemPrice = document.getElementById("itemPrice");
    const itemTax = document.getElementById("itemTax");
    const itemTotal = document.getElementById("itemTotal");

    // Define prices for each item based on their alt text
    const prices = {
        Aluminum: 1000.00,
        Copper: 1000.00,
        Bronze: 2000.00,
        Silver: 3500.00,
        Gold: 10000.00,
        Royalarmor: 15000.34,
        Combat: 13000.00,
        Econ: 2000.00,
        Dragon: 30000.00,
        "Wooden Wagon": 9670.00,
        "Red Wagon": 11566.00,
        "Green Wagon": 9175.00,
        "Carriage": 9676.00,
        "Purple Wagon": 11676.00,
        "Econ saddle": 1000.00,
        "Travel saddle": 3000.00,
        "Warrior saddle": 5000.00,
        "Gold saddle": 10000.00,
        "dragon saddle": 30000.00,
    };

    const tax = 500.00; // Flat tax value for simplicity

    // Listen for clicks inside the image container
    imageContainer.addEventListener("click", (event) => {
        // Check if the clicked element is an image
        if (event.target.tagName === "IMG") {
            const clickedImage = event.target;
            const name = clickedImage.alt; // Get the item's name from the alt attribute
            const price = prices[name]; // Look up the price using the name
            if (price === undefined) {
                console.error(`Price not found for item: ${name}`);
                return;
            }
            const total = price + tax; // Calculate total price (item + tax)

            // Update the details section
            selectedImage.src = clickedImage.src; // Show the selected image
            itemName.textContent = name; // Set the item's name
            itemPrice.textContent = `$${price.toFixed(2)}`; // Set the item's price
            itemTax.textContent = `$${tax.toFixed(2)}`; // Show the fixed tax
            itemTotal.textContent = `$${total.toFixed(2)}`; // Show the total

            // Hide the images and show the details
            imageContainer.style.display = "none";
            detailsContainer.style.display = "block";
        }
    });

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

// JavaScript to hide and show the header on scroll
let lastScrollTop = 0; // Keep track of the last scroll position
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down - hide the header
    header.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up - show the header
    header.style.transform = 'translateY(0)';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative values
});

});