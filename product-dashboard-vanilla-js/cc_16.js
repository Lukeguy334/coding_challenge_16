// Task 2: Fetch Products with .then()

function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")
      .then(response => response.json()) // Convert response to JSON
      .then(products => {
        // Log each product's name
        products.forEach(product => {
          console.log(product.name);
        });
      })
      .catch(error => handleError(error)); // Handle errors
  }
  
  // Trigger the fetch function to test
  fetchProductsThen();
  
  // Task 3: Fetch Products with async/await

async function fetchProductsAsync() {
    try {
      const response = await fetch("https://www.course-api.com/javascript-store-products");
      const products = await response.json();
      displayProducts(products); // Display products on success
    } catch (error) {
      handleError(error); // Handle errors using helper function
    }
  }
  
  // Trigger the fetch function to test
  fetchProductsAsync();
  
  // Task 4: Display the Products

function displayProducts(products) {
    const container = document.getElementById("product-container");
  
    // Loop through the first 5 products
    products.slice(0, 5).forEach(product => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
  
      const productImage = document.createElement("img");
      productImage.src = product.image;
      productCard.appendChild(productImage);
  
      const productName = document.createElement("h3");
      productName.textContent = product.name;
      productCard.appendChild(productName);
  
      const productPrice = document.createElement("p");
      productPrice.textContent = `$${product.price}`;
      productCard.appendChild(productPrice);
  
      container.appendChild(productCard); // Append the product card to the container
    });
  }
  
  // Task 5: Reusable Error Handler

function handleError(error) {
    console.error("An error occurred: " + error.message);
  }
  