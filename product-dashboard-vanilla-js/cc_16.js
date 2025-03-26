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
  