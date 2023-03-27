import { useState } from "react";
import { Step1, Step2, Successful } from "../components";
import "../assets/Forms.css";

const SignUp = ({ showSignUp }) => {
  const [stepNum, setStepNum] = useState(1);

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
    }
  };

  return (
    <main className={`${showSignUp ? "active" : ""} blanket one`}>
      <form>
        <div className="heading">
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
          className="login-options"
          style={{ display: stepNum == 1 ? "none" : "block" }}
        >
          <button>Complete sign up</button>
          <button onClick={handleBack}>Back</button>
          <p className="redirect">
            Already have an account? <span>Login here</span>{" "}
          </p>
        </section>
      </form>
    </main>
  );
};

export default SignUp;
