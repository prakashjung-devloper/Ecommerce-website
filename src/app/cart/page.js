"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  const USD_TO_NPR = 153.40;

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <main className="container py-5" style={{ marginTop: "120px" }}>
      <div className="mb-4">
        <h1 className="fw-bold">Shopping Cart 🛒</h1>
        <p className="text-muted">
          Review the products you added to your cart.
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-5">
          <h4 className="fw-bold">Your cart is empty</h4>
          <p className="text-muted">
            Add some products before checking out.
          </p>

          <Link href="/" className="btn btn-success px-4">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="row g-4">
            <div className="col-lg-8">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="card border-0 shadow-sm mb-3 p-3"
                >
                  <div className="row align-items-center">

                    <div className="col-4 col-md-2 text-center">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="img-fluid"
                        style={{
                          height: "90px",
                          objectFit: "contain",
                        }}
                      />
                    </div>

                    <div className="col-8 col-md-6">
                      <h6 className="fw-bold mb-2">
                        {item.title}
                      </h6>

                      <p className="text-info fw-bold mb-1">
                        रु. {(item.price * USD_TO_NPR).toFixed(0)}
                      </p>

                      <small className="text-muted">
                        Quantity: {item.qty}
                      </small>
                    </div>

                    <div className="col-12 col-md-4 text-md-end mt-3 mt-md-0">
                      <strong>
                        रु.{" "}
                        {(item.price * item.qty * USD_TO_NPR).toFixed(0)}
                      </strong>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-sm p-4">
                <h5 className="fw-bold mb-4">Order Summary</h5>

                <div className="d-flex justify-content-between mb-3">
                  <span>Total Items</span>
                  <strong>
                    {cart.reduce(
                      (total, item) => total + item.qty,
                      0
                    )}
                  </strong>
                </div>

                <div className="d-flex justify-content-between border-top pt-3">
                  <span className="fw-bold">Total</span>

                  <strong className="text-success fs-5">
                    रु. {(totalPrice * USD_TO_NPR).toFixed(0)}
                  </strong>
                </div>

                <Link
                  href="/checkout"
                  className="btn btn-success w-100 mt-4 fw-bold"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}