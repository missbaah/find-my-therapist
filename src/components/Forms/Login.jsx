import { useState } from "react";
import "../../assets/Forms.css";
import Successful from "../Signup components/Successful.jsx";

const Login = ({ showLogin }) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleLoginEmail = (e) => {
    e.preventDefault();
    setLogin({ ...login, email: e.target.value });
  };

  const handleLoginPassword = (e) => {
    e.preventDefault();
    setLogin({ ...login, password: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("https://find-therapist-api.onrender.com/auth/login", {
      method: "POST",
      body: JSON.stringify(login),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API response:", data);
        if (data.status == "success") {
          window.location.href = "/profiledashboard";
        }
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };

  return (
    <main className={`${showLogin ? "active" : ""} blanket`}>
      <form onSubmit={handleLogin}>
        <section className="input-box">
          <h3>Login as a MHP</h3>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="example@info.com"
              onChange={handleLoginEmail}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="###########"
              onChange={handleLoginPassword}
            />
          </div>
          <button className="login" type="submit">
            Login
          </button>
        </section>
        <section className="login-options">
          <p className="social-text">OR use your Social</p>
          <button className="socials">Login with Google</button>
          <button className="redirect">
            {" "}
            Don't have an account <span>Sign here</span>
          </button>{" "}
        </section>
        <button
          className="dismiss-btn"
          onClick={() => (window.location.href = "/")}
        >
          Dismiss
        </button>
      </form>
    </main>
  );
};

export default Login;
