"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabase";

export default function CheckoutPage() {
  const [cart, setCart] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [loading, setLoading] = useState(false);

  const USD_TO_NPR = 153.40;

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const totalItems = cart.reduce(
    (total, item) => total + item.qty,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const placeOrder = async () => {
    if (!name || !email || !phone || !address) {
      alert("Please fill in all customer information.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase
        .from("orders")
        .insert([
          {
            customer_name: name,
            email: email,
            phone: phone,
            address: address,
            payment_method: paymentMethod,
            total: totalPrice * USD_TO_NPR,
          },
        ]);

      if (error) {
        console.error(error);
        alert("Failed to place order.");
        return;
      }

      localStorage.removeItem("cart");

      window.location.href = "/success";
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="container py-5"
      style={{ marginTop: "100px" }}
    >
      <div className="mb-4">
        <h1 className="fw-bold">Checkout 🛒</h1>

        <p className="text-muted">
          Complete your information to place your order.
        </p>
      </div>

      <div className="row g-4">

        {/* Customer Information */}
        <div className="col-lg-7">

          <div className="card border-0 shadow-sm p-4">

            <h4 className="fw-bold mb-4">
              Customer Information
            </h4>

            {/* Name */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Full Name
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Email
              </label>

              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Phone */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Phone Number
              </label>

              <input
                type="tel"
                className="form-control"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* Address */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Delivery Address
              </label>

              <textarea
                className="form-control"
                rows="4"
                placeholder="Enter your delivery address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>

            {/* Payment */}
            <h5 className="fw-bold mt-4 mb-3">
              Payment Method
            </h5>

            {/* Cash on Delivery */}
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                id="cod"
                value="Cash on Delivery"
                checked={paymentMethod === "Cash on Delivery"}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />

              <label
                className="form-check-label"
                htmlFor="cod"
              >
                Cash on Delivery
              </label>
            </div>

            {/* eSewa */}
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                id="esewa"
                value="eSewa"
                checked={paymentMethod === "eSewa"}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />

              <label
                className="form-check-label"
                htmlFor="esewa"
              >
                eSewa
              </label>
            </div>

            {/* Khalti */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                id="khalti"
                value="Khalti"
                checked={paymentMethod === "Khalti"}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />

              <label
                className="form-check-label"
                htmlFor="khalti"
              >
                Khalti
              </label>
            </div>

            {/* Place Order */}
            <button
              className="btn btn-success w-100 fw-bold py-3"
              disabled={cart.length === 0 || loading}
              onClick={placeOrder}
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>

          </div>

        </div>

        {/* Order Summary */}
        <div className="col-lg-5">

          <div className="card border-0 shadow-sm p-4">

            <h4 className="fw-bold mb-4">
              Order Summary
            </h4>

            {cart.length === 0 ? (

              <div className="text-center py-4">

                <p className="text-muted">
                  Your cart is empty.
                </p>

                <Link
  href="/"
  className="btn btn-success"
>
  Continue Shopping
</Link>

              </div>

            ) : (

              <>

                {cart.map((item) => (

                  <div
                    key={item.id}
                    className="d-flex align-items-center justify-content-between border-bottom py-3"
                  >

                    <div className="d-flex align-items-center gap-3">

                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "contain",
                        }}
                      />

                      <div>

                        <h6 className="fw-bold mb-1">
                          {item.title}
                        </h6>

                        <small className="text-muted">
                          Qty: {item.qty}
                        </small>

                      </div>

                    </div>

                    <strong>
                      रु.{" "}
                      {(
                        item.price *
                        item.qty *
                        USD_TO_NPR
                      ).toFixed(0)}
                    </strong>

                  </div>

                ))}

                {/* Total Items */}
                <div className="d-flex justify-content-between mt-4">

                  <span>
                    Total Items
                  </span>

                  <strong>
                    {totalItems}
                  </strong>

                </div>

                {/* Total Price */}
                <div className="d-flex justify-content-between border-top pt-3 mt-3">

                  <span className="fw-bold">
                    Total
                  </span>

                  <strong className="text-success fs-4">
                    रु.{" "}
                    {(totalPrice * USD_TO_NPR).toFixed(0)}
                  </strong>

                </div>

              </>

            )}

          </div>

        </div>

      </div>
    </main>
  );
}