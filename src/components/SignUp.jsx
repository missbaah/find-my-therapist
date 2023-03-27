import { useState } from "react";
import { Step1, Step2, Successful } from "../components";
import "../assets/Forms.css";

const SignUp = ({ showSignUp }) => {
  const [stepNum, setStepNum] = useState(1);

  const handleNext = (e) => {
    e.preventDefault();
    setStepNum(stepNum + 1);
  };

  const FormBody = () => {
    if (stepNum == 1) {
      return <Step1 />;
    } else if (stepNum == 2) {
      return <Step2 />;
    }
  };

  return (
    <main className={`${showSignUp ? "active" : ""} blanket`}>
      <form>
        <h3>Sign Up as a MHP</h3>
        <p>Step {stepNum}</p>
        <div className="progressbar"></div>
        <section className="Body">{FormBody()}</section>
        <section>
          <section
            className="login-options"
            style={{ display: stepNum == 1 ? "block" : "none" }}
          >
            <button onClick={handleNext}>Next </button>
            <p className="social-text">OR use your Social</p>
            <button className="socials">Login with Google</button>
            <p className="redirect">
              Already have an account? <span>Login here</span>{" "}
            </p>
          </section>
          <section
            className="login-options"
            style={{ display: stepNum == 1 ? "none" : "block" }}
          >
            <button>Complete sign up</button>
            <button>Back</button>
            <p className="redirect">
              Already have an account? <span>Login here</span>{" "}
            </p>
          </section>
        </section>
      </form>
    </main>
  );
};

export default SignUp;
