import React from "react";
import "./Footer.css"; // Import your CSS file

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            {/* Event Venue Section */}
            <div className="footer-contact">
              <h4>Event Venue</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.7244575770533!2d73.82481957470836!3d18.541349768540133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf6995555555%3A0xead9399e14762578!2sModern%20College%20of%20Arts%2C%20Science%20%26%20Commerce!5e0!3m2!1sen!2sin!4v1698731300870!5m2!1sen!2sin"
                title="Event Location"
                aria-label="Google Map showing Event Venue"
                style={{ border: 0, width: "100%", height: "250px" }}
                allowFullScreen
              ></iframe>
            </div>

            {/* Useful Links Section */}
            <div className="footer-links">
              <h4>Useful Links</h4>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-angle-right"></i> <a href="/">Home</a>
                </li>
                <li>
                  <i className="fa fa-angle-right"></i>{" "}
                  <a href="/About">About Us</a>
                </li>
                <li>
                  <i className="fa fa-angle-right"></i>{" "}
                  <a href="/terms_and_conditions">Terms & Conditions</a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="col-md-6 col-lg-3 footer-contact">
              <h4>Contact Us</h4>
              <address>
                Opposite Savitribai Phule Pune University <br />
                PES's Modern College of Arts, Science, and Commerce (Autonomous)
                <br />
                Ganeshkhind, Pune-16 <br />
                <strong>Phone:</strong>{" "}
                <a href="tel:+918888956190">+91 88889 56190</a>
                <br />
                <strong>Phone:</strong>{" "}
                <a href="tel:+917387158497">+91 73871 58497</a>
                <br />
                <strong>Email:</strong>{" "}
                <a href="mailto:info@example.com">info@example.com</a>
              </address>

              {/* Social Media Links */}
              <div className="social-links mt-3">
                <a
                  href="https://www.youtube.com/@Interaction2024"
                  className="youtube"
                  target="_blank"
                  aria-label="Visit our YouTube channel"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-youtube"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100090129678882&mibextid=ZbWKwL"
                  className="facebook"
                  target="_blank"
                  aria-label="Visit our Facebook page"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/interaction_mcgk/?igsh=MzNlNGNkZWQ4Mg%3D%3D"
                  className="instagram"
                  target="_blank"
                  aria-label="Visit our Instagram profile"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container text-center mt-4">
        <div className="copyright">
          &copy; {new Date().getFullYear()} <strong>Interaction 2024</strong>.
          All Rights Reserved
        </div>
        <div className="credits">Designed by Interactors</div>
      </div>
    </footer>
  );
};

export default Footer;
