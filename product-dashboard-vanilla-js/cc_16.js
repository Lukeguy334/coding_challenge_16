// Task 2: Fetch Products with .then()
function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")
      .then(response => response.json()) // Convert response to JSON
      .then(products => {
        console.log("Fetched with .then():", products); // Debugging
        displayProducts(products); // Pass products to display function
      })
      .catch(error => handleError(error)); // Handle errors
  }
  
  // Task 3: Fetch Products with async/await
  async function fetchProductsAsync() {
    try {
      const response = await fetch("https://www.course-api.com/javascript-store-products");
      const products = await response.json();
      console.log("Fetched with async/await:", products); // Debugging
      displayProducts(products); // Pass products to display function
    } catch (error) {
      handleError(error); // Handle errors
    }
  }
  
  // Task 4: Display the Products in the DOM
  function displayProducts(products) {
    const container = document.getElementById("product-container");
    container.innerHTML = ""; // Clear previous content
  
    products.slice(0, 5).forEach(product => {
      // Create product card container
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
  
      // Extract product data from fields
      const productImage = document.createElement("img");
      productImage.src = product.fields.image[0].url;
      productImage.alt = product.fields.name;
  
      const productName = document.createElement("h3");
      productName.textContent = product.fields.name;
  
      const productPrice = document.createElement("p");
      productPrice.textContent = `$${product.fields.price}`;
  
      // Append elements to the product card
      productCard.appendChild(productImage);
      productCard.appendChild(productName);
      productCard.appendChild(productPrice);
  
      // Append product card to the container
      container.appendChild(productCard);
    });
  }
  
  // Task 5: Reusable Error Handler
  function handleError(error) {
    console.error("An error occurred:", error.message);
  }
  
  // Task 6: Call Fetch Functions at Script Load
  fetchProductsThen();
  fetchProductsAsync();
  