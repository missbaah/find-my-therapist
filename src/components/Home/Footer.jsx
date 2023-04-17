import "../../assets/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <section className="item-1">
        <div className="footer-text">
          <img src="" alt="" />
          <p>Together, we can overcome any obstacle.</p>
        </div>
        <div className="company-container">
          <p className="head-3">Company</p>
          <Link className="item1" to="/about">
            About us
          </Link>
          <Link className="item2" to="/professionals">
            Professionals
          </Link>
          <Link className="item3" to="/blog">
            Blog
          </Link>
          <Link className="item4" to="/faqs">
            FAQs
          </Link>
        </div>
        <div className="help-container">
          <p className="head-3">Help</p>
          <a>Support</a>
          <a>Terms & Condition</a>
          <a>Privacy Policy</a>
        </div>
        <div className="donate-container">
          <p className="head-3">Donate</p>
          <p>
            This project is generates no revenue, kindly consider donating to
            help the creators support hosting
          </p>
        </div>
      </section>
      <hr />
      <p className="copyright">© Copyright 2023, All Rights Reserved by MHP</p>
    </footer>
  );
};

export default Footer;
