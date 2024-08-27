import React from "react";
import "./LandingPage.css";
import logo from "../src/assets/logo.png";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <nav className="top-bar-nav">
          <button
            onClick={() => {
              const element = document.getElementById("home");
              const yOffset = -50; // Adjust this value to match the height of the top bar
              window.scrollTo({ top: element + yOffset, behavior: "smooth" });
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              const element = document.getElementById("services");
              const yOffset = -50; // Adjust this value to match the height of the top bar
              //const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({
                top: element.offsetTop + yOffset,
                behavior: "smooth",
              });
            }}
          >
            Services
          </button>
          <button
            onClick={() => {
              const element = document.getElementById("testimonials");
              const yOffset = -50; // Adjust this value to match the height of the top bar
              window.scrollTo({
                top: element.offsetTop + yOffset,
                behavior: "smooth",
              });
            }}
          >
            Testimonials
          </button>
          <button
            onClick={() => {
              const element = document.getElementById("about");
              const yOffset = -50; // Adjust this value to match the height of the top bar
              window.scrollTo({
                top: element.offsetTop + yOffset,
                behavior: "smooth",
              });
            }}
          >
            About
          </button>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              const yOffset = -50; // Adjust this value to match the height of the top bar
              window.scrollTo({
                top: element.offsetTop + yOffset,
                behavior: "smooth",
              });
            }}
          >
            Contact
          </button>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="landing-page-hero">
        <nav>
          <h2>Stay Cool with Our Top-Quality Air Conditioning Services</h2>
          <p>Reliable, efficient, and affordable cooling solutions.</p>
          {/* <button>Get a Free Quote</button> */}
        </nav>
      </section>

      <section id="services" className="landing-page-section">
        <div className=" cloud-box-content ">
          <h3>Our Services</h3>
          <ol>
            <li>
              <b>Air Conditioning Installation:</b> We provide professional air
              conditioning installation services, ensuring optimal performance
              of the units.
            </li>
            <br />
            <li>
              <b>Regular Maintenance and Repair:</b> We believe in the
              importance of regular maintenance to maintain the efficiency of
              air conditioning units. Our specialized team performs the
              necessary maintenance to ensure the devices operate at their best.
            </li>
            <br />

            <li>
              <b>Air Conditioning Trading:</b> We offer a wide range of air
              conditioning units from the most famous brands, allowing our
              customers to choose what suits their needs and budget
            </li>
            <br />

            <li>
              <b>Commercial and residential services.</b>
            </li>
          </ol>
        </div>
        <div className="section-service-image cloud-box cloud-box-image"></div>
      </section>

      <section id="testimonials" className="landing-page-section">
        <div className="section-testimonials-image cloud-box cloud-box-image"></div>
        <div className="cloud-box-content ">
          <h3>What Our Clients Say</h3>
          <ul>
            <li>
              "CoolAir Solutions provided excellent service and the new unit
              works perfectly!"<b> - John Do.</b>
            </li>
            <br />
            <br />
            <li>
              "Their maintenance service saved us a lot of money in the long
              run."
              <b> - Sarah Ko. </b>
            </li>

            <br />
            <br />
            <li>
              "CoolAir Solutions provided excellent service and the new unit
              works perfectly!" <b>- John Do.</b>
            </li>
            <br />
            <br />

            <li>
              "Their maintenance service saved us a lot of money in the long
              run."
              <b> - Sarah Ko. </b>
            </li>

            <br />
            <br />
          </ul>
        </div>
      </section>

      <section id="about" className="landing-page-section">
        <div className="cloud-box-content ">
          <h3>About Us</h3>{" "}
          <p>We are a top-quality air conditioning service provider...</p>
        </div>
        <div className="section-about-image  cloud-box cloud-box-image"></div>
      </section>

      <section className="landing-page-section">
        <div className="section-timeline-image  cloud-box cloud-box-image"></div>
      </section>

      <section id="contact" className="landing-page-section">
        <div className="section-contact-image cloud-box cloud-box-image"></div>
        <div className="cloud-box-content">
          <div className="contact-section">
            <h3>Contact Us</h3>
            <ul className="phone-numbers-list">
              <li>Phone: (123) 456-7890</li>
              <li>Phone: (987) 654-3210</li>
              <li>Phone: (555) 123-4567</li>
            </ul>
          </div>

          <p>Email: info@coolairsolutions.com</p>
          <div className="social-media-icons">
            <p>Social Media:</p>
            <a
              href="https://www.facebook.com/profile.php?id=61563846054491&mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <FaFacebookF />
              </button>
            </a>
            <a
              href="https://www.instagram.com/alaqwa_?igsh=MWhrNjc3aWM3bWF1eQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <FaInstagram />
              </button>
            </a>
            <a
              href="https://www.tiktok.com/@alaqwa_1?_t=8p5yo1b5MkE&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <FaTiktok />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <div className="bottom-bar">
        <p>&copy; 2024 AL-AQWA Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default LandingPage;
