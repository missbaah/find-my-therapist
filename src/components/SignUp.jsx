import { useState } from "react";
import { Step1, Step2, Successful, Login } from "../components";
import "../assets/Forms.css";

const SignUp = ({ showSignUp }) => {
  const [stepNum, setStepNum] = useState(1);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {
    setShowLogin((showLogin) => !showLogin);
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStepNum(stepNum + 1);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setStepNum(stepNum - 1);
  };

  const FormBody = () => {
    if (stepNum == 1) {
      return <Step1 />;
    } else if (stepNum == 2) {
      return <Step2 />;
    } else if (stepNum == 3) {
      return <Successful />;
    }
  };

  return (
    <main className={`${showSignUp ? "active" : ""} blanket one`}>
      <form style={{ background: stepNum == 3 ? "none" : "flex" }}>
        <div
          className="heading"
          style={{ display: stepNum == 3 ? "none" : "flex" }}
        >
          <h3>Sign Up as a MHP</h3>

          <p className="step">Step {stepNum}</p>
          <div className="progressbar">
            <div
              style={{ background: stepNum == 1 ? "#3d7d57" : "#3d7d57" }}
            ></div>
            <div
              style={{ background: stepNum == 1 ? "#D9D9D9" : "#3d7d57" }}
            ></div>
          </div>
        </div>
        <section className="Body">{FormBody()}</section>
        <section
          className="signup-options"
          style={{ display: stepNum == 1 ? "flex" : "none" }}
        >
          <button onClick={handleNext} className="login">
            Next{" "}
          </button>
          <p className="social-text">OR use your Social</p>
          <button className="socials">Sign up with Google</button>
          <p className="redirect">
            Already have an account? <span>Login here</span>{" "}
          </p>
        </section>
        <section
          className="signup-options"
          style={{ display: stepNum == 1 || stepNum == 3 ? "none" : "flex" }}
        >
          <button className="login" onClick={handleNext}>
            Complete sign up
          </button>
          <button onClick={handleBack} className="back-btn">
            Back
          </button>
          <button className="redirect" onClick={handleLogin}>
            {" "}
            Already have an account? <span>Login here</span>
          </button>{" "}
          <Login showLogin={showLogin} />
        </section>
      </form>
    </main>
  );
};

export default SignUp;
