import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white-50 py-4 mt-5 border-top border-light">
      <div className="container">

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">

          <div className="text-center text-md-start">
            <div className="fw-bold text-info text-uppercase">
             KCMART
            </div>

            <div className="small">
              © {new Date().getFullYear()} All Rights Reserved.
            </div>
          </div>

          <div className="text-center text-md-end small">
            <div>
              Developed by:{" "}
              <strong className="text-light">
                Prakash Jung KC
              </strong>
            </div>

            <a
              href="mailto:jungprakash426@gmail.com"
              className="text-info text-decoration-none"
            >
              <i className="bi bi-envelope-fill me-1"></i>
              jungprakash426@gmail.com
            </a>
          </div>

        </div>

        <div className="footer-links d-flex justify-content-center align-items-center flex-wrap gap-3 mt-3 pt-3 border-top border-secondary ">

          <Link href="/">Home</Link>

          <Link href="/about">About</Link>

          <Link href="/contact">Contact</Link>

          <Link href="/privacy">Privacy Policy</Link>

          <Link href="/terms">Terms & Conditions</Link>

        </div>

      </div>
    </footer>
  );
}