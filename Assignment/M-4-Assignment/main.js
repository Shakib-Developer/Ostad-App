import products from "./products.js";


    const productListElement = document.getElementById("product-list");
    const shoppingCartElement = document.getElementById("shopping-cart");
    const totalAmountElement = document.getElementById("total-amount");
    const clearCartButton = document.getElementById("clear-cart");
    const cartItems = []; // Array to store the added items in the cart

    // Function to add a product to the shopping cart
    const addToCart = (productId) => {
      const selectedProduct = products.find(product => product.id === productId);

      if (selectedProduct) {
        const existingCartItem = cartItems.find(item => item.id === selectedProduct.id);
        if (existingCartItem) {
          existingCartItem.quantity++;
        } else {
          cartItems.push({
            id: selectedProduct.id,
            name: selectedProduct.name,
            price: selectedProduct.price,
            quantity: 1
          });
        }
        renderCart();
      } else {
        console.log("Product not found");
      }
    };

    // Function to calculate the total amount for an item
    const calculateItemTotal = (item) => {
      return item.quantity * item.price;
    };

    // Function to calculate the overall total amount for all items in the cart
    const calculateTotalAmount = () => {
      let totalAmount = 0;
      cartItems.forEach(item => {
        totalAmount += calculateItemTotal(item);
      });
      return totalAmount;
    };

    // Function to display the added items in the shopping cart
    const renderCart = () => {
      shoppingCartElement.innerHTML = ""; // Clear the cart before rendering

      cartItems.forEach(item => {
        const cartItemElement = document.createElement("div");
        const itemTotal = calculateItemTotal(item);

        const imageElement = document.createElement("img");
        imageElement.src = item.image;
        imageElement.alt = item.name;
        imageElement.style.width = "100px";
        imageElement.style.height = "100px";

        cartItemElement.appendChild(imageElement);
        cartItemElement.innerHTML += `
          <p>${item.name}</p>
          <p>Quantity: ${item.quantity}</p>
          <p>Price: $${item.price}</p>
          <p>Total: $${itemTotal}</p>
        `;
        shoppingCartElement.appendChild(cartItemElement);
      });

      const totalAmount = calculateTotalAmount();
      totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;
    };

    // Function to clear the shopping cart
    const clearCart = () => {
      cartItems.length = 0;
      renderCart();
    };

    products.forEach(product => {
      const productElement = document.createElement("div");
      const addButton = document.createElement("button");
      addButton.textContent = "Add to Cart";
      addButton.addEventListener("click", () => {
        addToCart(product.id);
      });

      const imageElement = document.createElement("img");
      imageElement.src = product.image;
      imageElement.alt = product.name;
      imageElement.style.width = "100px";
      imageElement.style.height = "100px";

      productElement.appendChild(imageElement);
      productElement.innerHTML += `
        <p>${product.name}</p>
        <p>Price: $${product.price}</p>
      `;
      productElement.appendChild(addButton);
      productListElement.appendChild(productElement);
    });

    clearCartButton.addEventListener("click", clearCart);
  