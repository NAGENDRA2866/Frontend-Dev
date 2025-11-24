const PRODUCTS_API = "https://fakestoreapi.com/products";

async function fetchProducts() {
  try {
    const res = await fetch(PRODUCTS_API);
    const products = await res.json();
    products.forEach(p => {
      console.log("Product:", p.title);
      console.log("Price: $" + p.price);
      console.log("Image:", p.image);
      console.log("-----");
    });
  } catch {
    console.log("Failed to load products. Please try again.");
  }
}

fetchProducts();
