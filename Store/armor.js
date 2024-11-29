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
        Royalarmor: 15000.34,
        Combat: 13000.00,
        Econ: 2000.00,
        Dragon: 30000.00,
    };

    const tax = 500.00; // Flat tax value for simplicity

    // Listen for clicks inside the image container
    imageContainer.addEventListener("click", (event) => {
        // Check if the clicked element is an image
        if (event.target.tagName === "IMG") {
            const clickedImage = event.target;
            const name = clickedImage.alt; // Get the item's name from the alt attribute
            const price = prices[name]; // Look up the price using the name
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
});
