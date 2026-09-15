"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  totalItems,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    { id: "all", name: "🎒 All Products" },
    { id: "smartphones", name: "Smartphones" },
    { id: "laptops", name: "Laptops" },
    { id: "fragrances", name: "Perfumes" },
    { id: "groceries", name: "Groceries" },
    { id: "shoes", name: "Shoes" },
    { id: "sunglasses", name: "Sunglasses" },
  ];

  const handleCategoryClick = (id) => {
    setActiveCategory(id);
    setMenuOpen(false);
  };

  return (
    <header className="fixed-top bg-white border-bottom shadow-sm">

      <div className="py-3 text-white navbar-top">

        <div className="container d-flex justify-content-between align-items-center">

          {/* LOGO */}
          <div className="d-flex align-items-center gap-2">
            <div
              className="bg-danger text-white fw-black rounded-3 px-3 py-1 shadow-sm d-inline-block text-uppercase navbar-logo-badge"
              style={{
                fontSize: "1.2rem",
                letterSpacing: "1px",
              }}
            >
              K<span className="text-warning">C</span>
            </div>

            <span
              className="h4 fw-bold tracking-tight m-0 text-uppercase navbar-brand-text"
              style={{
                color: "#8FD19E",
                cursor: "pointer",
              }}
            >
              KC<span className="text-white fw-light">Mart</span>
            </span>
          </div>


          {/* SEARCH - DESKTOP */}
          <div className="w-50 d-none d-md-block">
            <div className="input-group rounded-pill overflow-hidden border border-secondary border-opacity-25 bg-white navbar-search-wrapper">

              <span className="input-group-text bg-white border-0 text-muted ps-3">
                🔍
              </span>

              <input
                type="text"
                className="form-control border-0 p-2"
                placeholder="Search over thousands of verified products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  outline: "none",
                  boxShadow: "none",
                  fontSize: "0.95rem",
                }}
              />

            </div>
          </div>


          {/* RIGHT SIDE */}
          <div className="d-flex align-items-center gap-2">

            <button
              className="btn hamburger-btn d-lg-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              <i
                className={`bi ${
                  menuOpen ? "bi-x-lg" : "bi-list"
                }`}
              ></i>
            </button>


            {/* CART */}
           <Link
  href="/cart"
  className="btn rounded-pill px-4 py-2 d-flex align-items-center gap-2 fw-bold cart-btn"
  style={{
    border: "1.5px solid #8FD19E",
    color: "#8FD19E",
    background: "transparent",
  }}
>
  <i className="bi bi-cart3 fs-5"></i>
  <span className="badge bg-danger rounded-pill px-2 py-1 cart-badge">
    {totalItems}
  </span>
</Link>

          </div>

        </div>
      </div>


      <nav className="navbar navbar-expand-lg navbar-light py-1 nav-category-bar d-none d-lg-block">

        <div className="container">

          <div className="navbar-nav gap-2 flex-wrap">

            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`btn border-0 text-uppercase fw-bold btn-sm tracking-wide px-3 py-2 rounded-3 nav-cat-btn ${
                  activeCategory === cat.id ? "active" : ""
                }`}
                style={{
                  fontSize: "0.8rem",
                  color:
                    activeCategory === cat.id
                      ? "#D1E7DD"
                      : "#FFFFFF",
                }}
              >
                {cat.name}
              </button>
            ))}

          </div>

        </div>

      </nav>


      {menuOpen && (
        <div className="mobile-menu">

          <div className="mobile-menu-inner">

            {/* MOBILE SEARCH */}
            <div className="mobile-search mb-3">

              <div className="input-group rounded-pill overflow-hidden bg-white">

                <span className="input-group-text bg-white border-0">
                  🔍
                </span>

                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />

              </div>

            </div>


            {/* CATEGORY TITLE */}
            <div className="mobile-menu-title">
              SHOP BY CATEGORY
            </div>


            {/* CATEGORIES */}
            <div className="mobile-category-list">

              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`mobile-category-btn ${
                    activeCategory === cat.id ? "active" : ""
                  }`}
                >
                  {cat.name}
                </button>
              ))}

            </div>

          </div>

        </div>
      )}

    </header>
  );
}