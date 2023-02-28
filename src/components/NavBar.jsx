import { Link } from "react-router-dom";
import "../assets/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link className="link1 logo" to="/">
        LOGO
      </Link>
      <section className="link2">
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
      </section>

      <button className="link3 login">Therapist Login</button>
    </nav>
  );
};

export default NavBar;
