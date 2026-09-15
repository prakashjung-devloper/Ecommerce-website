import Link from "next/link";

export default function SuccessPage() {
  return (
    <main
      className="container py-5 text-center"
      style={{ marginTop: "120px" }}
    >
      <div
        className="card border-0 shadow-sm p-5 mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <div className="display-1 mb-3">✅</div>

        <h1 className="fw-bold mb-3">
          Order Placed Successfully!
        </h1>

        <p className="text-muted mb-4">
          Thank you for shopping with KCMart.
          Your order has been received successfully.
        </p>

        <div className="mb-4">
          <strong>Order Placed Successfully 🎉</strong>
        </div>

        <Link
          href="/"
          className="btn btn-success px-4 py-2 fw-bold"
        >
          Continue Shopping
        </Link>
      </div>
    </main>
  );
}