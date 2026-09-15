"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar"; 
import Footer from "./Footer";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

useEffect(() => {
  async function fetchProducts() {
    try {
      setLoading(true);

      const res = await fetch("https://dummyjson.com/products?limit=0");

      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await res.json();

      setProducts(data.products);
      setFilteredProducts(data.products);

    } catch (err) {
      console.error(
        "Failed to load store inventory stream:",
        err
      );
    } finally {
      setLoading(false);
    }
  }

  fetchProducts();
}, []);

  useEffect(() => {
  let result = products;

  if (activeCategory === "shoes") {
  result = result.filter(
    p => p.category === "mens-shoes" || p.category === "womens-shoes"
  );
} else if (activeCategory !== "all") {
  result = result.filter(p => p.category === activeCategory);
}

  if (searchQuery.trim() !== "") {
    result = result.filter(
      p =>
        p.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  setFilteredProducts(result);
}, [activeCategory, searchQuery, products]);
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id == product.id);
    if (exist) {
      setCart(cart.map((item) => item.id == product.id ? { ...exist, qty: exist.qty + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const exist = cart.find((item) => item.id == id);
    if (!exist) return;
    if (exist.qty == 1) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(cart.map((item) => item.id == id ? { ...exist, qty: exist.qty - 1 } : item));
    }
  };

  const totalItems = cart.reduce((total, item) => total + item.qty, 0);
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.qty), 0);

  return (
    <>
    <main className="min-vh-100 bg-light">
      <Navbar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
        totalItems={totalItems} 
      />

      <div className="container" style={{ paddingTop: "160px" }}>
        
       <div className="hero-banner p-4 p-md-5 mb-5 shadow-sm mt-3">
  <h1 className="display-6 fw-bold text-dark">
    Welcome to KCMart
  </h1>

  <p className="lead text-muted mb-0">
    Everything you need, all in one place.
    Explore technology, fashion, beauty and everyday essentials.
  </p>
</div>
        {loading ? (
          <div className="text-center py-5 my-5">
            <div className="spinner-border text-info" role="status" style={{ width: "3rem", height: "3rem" }}></div>
            <p className="text-muted mt-3 fw-semibold">Streaming verified vendor items catalog...</p>
          </div>
        ) : (
          <div className="row g-4 mb-5">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="col-12 col-md-6 col-lg-3">
                  <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden bg-white product-card d-flex flex-column justify-content-between p-3 border">
                    
                    <div className="text-center p-3 rounded bg-light mb-3 position-relative d-flex align-items-center justify-content-center" style={{ height: "200px" }}>
                      <span className="badge bg-dark bg-opacity-70 position-absolute top-0 start-0 m-2 rounded-pill px-2 py-1 small tracking-wider text-uppercase text-white" style={{ fontSize: "0.65rem" }}>
                        {product.category}
                      </span>
<img
  src={product.thumbnail}
  alt={product.title}
  style={{
    maxHeight: "160px",
    maxWidth: "100%",
    objectFit: "contain"
  }}
/>                    </div>

                    <div className="d-flex flex-column flex-grow-1 justify-content-between px-1">
                      <div>
                        <h3 className="h6 text-dark fw-bold mb-2" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", minHeight: "38px" }}>
                          {product.title}
                        </h3>
                        <p className="h5 text-info fw-black mb-3">${product.price.toFixed(2)}</p>
                      </div>
                      <button onClick={() => addToCart(product)} className="btn btn-info text-dark w-100 fw-bold py-2 rounded-3 d-flex align-items-center justify-content-center gap-2 shadow-sm" style={{ fontSize: "0.85rem" }}>
                        <i className="bi bi-cart-plus-fill"></i> Add To Cart
                      </button>
                    </div>

                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <h4 className="text-muted">No catalog inventory records matched.</h4>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="modal fade" id="cartModal" tabIndex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content rounded-4 border-0 shadow">
            <div className="modal-header bg-dark text-white border-0 py-3 px-4">
              <h5 className="modal-title fw-bold text-info" id="cartModalLabel">
                <i className="bi bi-cart-check-fill me-2"></i>Shopping Basket Cart
              </h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4" style={{ maxHeight: "450px", overflowY: "auto" }}>
              {cart.length === 0 ? (
                <div className="text-center py-4 text-muted">
                  <i className="bi bi-bag-x fs-1 opacity-50"></i>
                  <p className="mt-2 fw-medium">Your basket is empty. Start exploring the store items!</p>
                </div>
              ) : (
                <div className="d-flex flex-column gap-3">
                  {cart.map((item) => (
                    <div key={item.id} className="d-flex align-items-center justify-content-between p-3 bg-light rounded-3 border">
                      <div className="d-flex align-items-center gap-3">
                        <img src={item.image} alt={item.title} style={{ width: "50px", height: "50px", objectFit: "contain" }} className="bg-white p-1 rounded border" />
                        <div>
                          <h6 className="fw-bold text-dark text-truncate mb-1" style={{ maxWidth: "250px" }}>{item.title}</h6>
                          <small className="text-muted">${item.price.toFixed(2)} x {item.qty}</small>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <button onClick={() => removeFromCart(item.id)} className="btn btn-sm btn-outline-danger px-2 fw-bold">-</button>
                        <span className="fw-bold text-dark px-2">{item.qty}</span>
                        <button onClick={() => addToCart(item)} className="btn btn-sm btn-outline-success px-2 fw-bold">+</button>
                      </div>
                    </div>
                  ))}
                  <div className="border-top pt-3 mt-2 d-flex justify-content-between align-items-center">
                    <h5 className="fw-bold text-dark m-0">Grand Estimated Total:</h5>
                    <h4 className="fw-black text-info m-0">${totalPrice.toFixed(2)}</h4>
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer bg-light border-0 py-3 px-4">
              <button
                className="btn btn-success fw-bold w-100 py-2.5 rounded-3 shadow-sm text-uppercase"
                disabled={cart.length === 0}
                onClick={() => alert("Connecting sandbox nodes to safe Nepali Payment Gateways (eSewa / Khalti) controllers...")}
              >
                Proceed To Checkout →
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
   
    <Footer/>
     </>
  );
}
