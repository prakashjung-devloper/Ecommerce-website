export default function ContactPage() {
  return (
    <main className="contact-page">
      <div className="container">

        <div className="contact-intro text-center">
          <h1 className="fw-bold">Contact Us</h1>
          <p>
            Have a question or need help? We would love to hear from you.
          </p>
        </div>

        <div className="row g-4 justify-content-center">

          <div className="col-md-5">
            <div className="contact-info">
              <h3>Get In Touch</h3>

              <p>
                📧 <strong>Email</strong><br />
                jungprakash426@gmail.com
              </p>

              <p>
                📍 <strong>Location</strong><br />
               Kathmandu,Nepal
              </p>

              <p>
                🛒 <strong>KCMart</strong><br />
                Your simple online shopping destination.
              </p>
            </div>
          </div>

          <div className="col-md-7">
            <div className="contact-form">

              <h3>Send Us a Message</h3>

              <form>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />

                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />

                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>

                <button type="submit" className="btn btn-success w-100">
                  Send Message
                </button>
              </form>

            </div>
          </div>

        </div>

        <div className="contact-brand text-center">
          <p>Developed by Prakash Jung Kc</p>
          <b>KCMart</b>
        </div>

      </div>
    </main>
  );
}