export default function AboutPage() {
  return (
    <main className="about-page container py-5">
      <div className="about-intro text-center mb-5">
        <h1 className="fw-bold">About KCMART</h1>
        <p className="text-muted mt-3">
         KCMART is a modern online shopping platform designed to make
          everyday shopping simple, convenient, and accessible.
        </p>
      </div>

      <div className=" about-card row g-4">
        <div className="col-md-6">
          <div className="p-4 bg-white rounded-4 shadow-sm h-100">
            <h3 className="fw-bold">Our Mission</h3>
            <p className="text-muted">
              Our mission is to bring useful products from different categories
              into one simple and convenient online marketplace.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="p-4 bg-white rounded-4 shadow-sm h-100">
            <h3 className="fw-bold">Why KCMart?</h3>
            <p className="text-muted">
              We aim to provide a simple shopping experience where customers
              can easily discover products, add them to their cart, and prepare
              for a smooth checkout experience.
            </p>
          </div>
        </div>
      </div>

      <div className="abou-brand text-center mt-5">
        <p className="text-muted mb-1">Developed by Prakash Jung Kc</p>
        <p className="fw-bold">KCMART</p>
      </div>
    </main>
  );
}