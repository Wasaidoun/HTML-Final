$(document).ready(function () {
  // Load header
  $("#header").load("../includes/header.html", function () {
      console.log("Header loaded.");
  });
  $("footer").load("../includes/footer.html", function(){
  });

  const imageContainer = document.querySelector("main"); // Holds all the images
  const detailsContainer = document.getElementById("detailsContainer"); // Details section
  const selectedImage = document.getElementById("selectedImage");
  const itemName = document.getElementById("itemName");
  const itemPrice = document.getElementById("itemPrice");
  const itemTax = document.getElementById("itemTax");
  const itemTotal = document.getElementById("itemTotal");

  const prices = {
      Aluminum: 1000.0,
      Copper: 1000.0,
      Bronze: 2000.0,
      Silver: 3500.0,
      Gold: 10000.0,
      Royalarmor: 15000.34,
      Combat: 13000.0,
      Econ: 2000.0,
      Dragon: 30000.0,
      "Wooden Wagon": 9670.0,
      "Red Wagon": 11566.0,
      "Green Wagon": 9175.0,
      Carriage: 9676.0,
      "Purple Wagon": 11676.0,
      "Econ saddle": 1000.0,
      "Travel saddle": 3000.0,
      "Warrior saddle": 5000.0,
      "Gold saddle": 10000.0,
      "dragon saddle": 30000.0,
  };

  const tax = 500.0; // Flat tax value for simplicity

  // Handle image clicks
  imageContainer.addEventListener("click", (event) => {
      if (event.target.tagName === "IMG") {
          const clickedImage = event.target;
          const name = clickedImage.alt;
          const price = prices[name];

          if (price === undefined) {
              console.error(`Price not found for item: ${name}`);
              return;
          }

          const total = price + tax;

          selectedImage.src = clickedImage.src;
          itemName.textContent = name;
          itemPrice.textContent = `$${price.toFixed(2)}`;
          itemTax.textContent = `$${tax.toFixed(2)}`;
          itemTotal.textContent = `$${total.toFixed(2)}`;

          imageContainer.style.display = "none";
          detailsContainer.style.display = "block";
      }
  });

  // Forgot password form
  const forgotForm = document.getElementById("forgotPasswordForm");
  if (forgotForm) {
      forgotForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const emailInput = document.getElementById("email");
          const emailValue = emailInput.value;

          const forgotMessage = "Email sent to: " + emailValue;
          const out1 = document.getElementById("out1");
          if (out1) {
              out1.innerHTML = forgotMessage;
          }
      });
  }

  // Scroll behavior for header
  let lastScrollTop = 0;
  $(window).on("scroll", function () {
      const currentScroll = $(this).scrollTop();
      const header = $(".header");

      if (currentScroll > lastScrollTop) {
          header.css("transform", "translateY(-100%)");
      } else {
          header.css("transform", "translateY(0)");
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
});
