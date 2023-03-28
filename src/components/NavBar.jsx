import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/NavBar.css";
import { Login, SignUp } from "../components";

const NavBar = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {
    setShowLogin((showLogin) => !showLogin);
  };
  const handleSignUp = () => {
    setShowSignUp((showSignUp) => !showSignUp);
  };

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
      <section className="link-btns ">
        <button className="link3" onClick={handleSignUp}>
          Therapist SignUp
        </button>
        <button className="link3" onClick={handleLogin}>
          Therapist Login
        </button>
      </section>
      <Login showLogin={showLogin} />
      <SignUp showSignUp={showSignUp} />
    </nav>
  );
};

export default NavBar;
