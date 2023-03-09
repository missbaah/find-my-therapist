import { Link } from "react-router-dom";
import "../assets/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link className="link1 logo" to="/">
        LOGO
      </Link>
      <section className="link2">
        <Link className="item" to="/about">
          About us
        </Link>
        <Link className="item" to="/professionals">
          Professionals
        </Link>
        <Link className="item" to="/blog">
          Blog
        </Link>
        <Link className="item" to="/faqs">
          FAQs
        </Link>
      </section>

      <button className="link3 login">Therapist Login</button>
    </nav>
  );
};

export default NavBar;
