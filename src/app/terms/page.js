"use client";

import React, { useState } from "react";

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = {
    introduction: {
      title: "Introduction",
      content: (
        <>
          <p>
            Welcome to HimalayanMart. These Terms & Conditions explain the
            rules and guidelines for using our online shopping platform.
          </p>

          <p>
            By using HimalayanMart, you agree to follow these terms. If you
            do not agree with any part of these terms, please do not use
            the website.
          </p>
        </>
      ),
    },

    using: {
      title: "Using HimalayanMart",
      content: (
        <>
          <p>
            HimalayanMart is designed to provide a simple and convenient
            online shopping experience.
          </p>

          <p>
            Users are expected to provide accurate information and use the
            website responsibly.
          </p>
        </>
      ),
    },

    products: {
      title: "Products & Prices",
      content: (
        <>
          <p>
            Product names, images, descriptions, prices, and availability
            may change from time to time.
          </p>

          <p>
            We try to display accurate product information, but some
            information may be provided by third-party services.
          </p>
        </>
      ),
    },

    orders: {
      title: "Orders",
      content: (
        <>
          <p>
            Placing an order does not always guarantee that the product will
            be available.
          </p>

          <p>
            Orders may be cancelled if a product is unavailable or if
            incorrect information is displayed.
          </p>
        </>
      ),
    },

    payments: {
      title: "Payments",
      content: (
        <>
          <p>
            Available payment methods and payment instructions will be
            displayed during the checkout process.
          </p>

          <p>
            Payment services may be provided by third-party payment
            providers and their own terms may apply.
          </p>
        </>
      ),
    },

    returns: {
      title: "Returns & Refunds",
      content: (
        <>
          <p>
            Return and refund conditions may depend on the product and
            applicable store policies.
          </p>

          <p>
            Detailed return information should be provided before completing
            a purchase.
          </p>
        </>
      ),
    },

    privacy: {
      title: "Privacy",
      content: (
        <>
          <p>
            Your privacy is important to us. Information provided through
            HimalayanMart will be handled according to our Privacy Policy.
          </p>

          <p>
            Please read our Privacy Policy to understand how information
            may be collected and used.
          </p>
        </>
      ),
    },

    changes: {
      title: "Changes to These Terms",
      content: (
        <>
          <p>
            HimalayanMart may update these Terms & Conditions when
            necessary.
          </p>

          <p>
            Updated terms will be published on this page with the latest
            revision date.
          </p>
        </>
      ),
    },

    contact: {
      title: "Contact Us",
      content: (
        <>
          <p>
            If you have any questions about these Terms & Conditions,
            please contact us.
          </p>

          <a href="mailto:jungprakash426@gmail.com">
            jungprakash426@gmail.com
          </a>
        </>
      ),
    },
  };

  return (
    
    <main className="terms-help-page">
      <div className="container">

        {/* Header */}
        <div className="terms-help-header">
          <p className="terms-label">HIMALAYANMART HELP</p>

          <h1>Terms & Conditions</h1>

          <p>
            Learn about the rules and guidelines for using HimalayanMart.
          </p>

          <small>Last updated: September 15, 2026</small>
        </div>

        <div className="row g-4">

          {/* Sidebar */}
          <div className="col-lg-3">
            <div className="terms-sidebar">

              <h6>TERMS & CONDITIONS</h6>

              <button
                className={activeSection === "introduction" ? "active" : ""}
                onClick={() => setActiveSection("introduction")}
              >
                Introduction
              </button>

              <button
                className={activeSection === "using" ? "active" : ""}
                onClick={() => setActiveSection("using")}
              >
                Using HimalayanMart
              </button>

              <h6 className="mt-4">SHOPPING</h6>

              <button
                className={activeSection === "products" ? "active" : ""}
                onClick={() => setActiveSection("products")}
              >
                Products & Prices
              </button>

              <button
                className={activeSection === "orders" ? "active" : ""}
                onClick={() => setActiveSection("orders")}
              >
                Orders
              </button>

              <button
                className={activeSection === "payments" ? "active" : ""}
                onClick={() => setActiveSection("payments")}
              >
                Payments
              </button>

              <button
                className={activeSection === "returns" ? "active" : ""}
                onClick={() => setActiveSection("returns")}
              >
                Returns & Refunds
              </button>

              <h6 className="mt-4">ACCOUNT & LEGAL</h6>

              <button
                className={activeSection === "privacy" ? "active" : ""}
                onClick={() => setActiveSection("privacy")}
              >
                Privacy
              </button>

              <button
                className={activeSection === "changes" ? "active" : ""}
                onClick={() => setActiveSection("changes")}
              >
                Changes to These Terms
              </button>

              <button
                className={activeSection === "contact" ? "active" : ""}
                onClick={() => setActiveSection("contact")}
              >
                Contact Us
              </button>

            </div>
          </div>

          {/* Content */}
          <div className="col-lg-9">
            <div className="terms-help-content">

              <h2>{sections[activeSection].title}</h2>

              <div className="terms-text">
                {sections[activeSection].content}
              </div>

            </div>
          </div>

        </div>

        <div className="terms-help-brand text-center">
          <p>A Brand by Prakash Jung KC</p>
          <strong> KCMart</strong>
        </div>

      </div>
    </main>
   
  );
}