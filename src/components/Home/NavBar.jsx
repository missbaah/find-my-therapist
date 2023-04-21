import { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/NavBar.css";
import { Login, SignUp } from "..";

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
        <a className="item" href="#about">
          About us
        </a>
        <a className="item" href="#professionals">
          Professionals
        </a>
        <a className="item" href="#blogspace">
          Blog
        </a>
        <a className="item" href="#faqs">
          FAQs
        </a>
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
