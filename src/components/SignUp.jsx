import { useState } from "react";
import { Step1, Step2, Successful, Login } from "../components";
import SignupContext from "../context/SignupContext";
import "../assets/Forms.css";

const SignUp = ({ showSignUp }) => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    licensingBoard: "",
    licenseNumber: "",
  });
  const [stepNum, setStepNum] = useState(1);

  const handleNext = (e) => {
    e.preventDefault();
    let requiredFields = [];
    const requiredFields1 = [
      "firstName",
      "lastName",
      "email",
      "password",
      "passwordConfirm",
    ];
    const requiredFields2 = ["licensingBoard", "licenseNumber", "checkbox"];
    if (stepNum == 1) {
      requiredFields = [...requiredFields1];
    } else if (stepNum == 2) {
      requiredFields = [...requiredFields2];
    }

    const isFilled = requiredFields.every((field) => person[field] !== "");

    if (isFilled) {
      setStepNum(stepNum + 1);
    } else {
      alert("Please fill in all required fields.");
    }
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
    return;
  };

  function handleSubmit() {
    // get form data and submit it to server
    // fetch("https://find-therapist-api.onrender.com/auth/signup", {
    //   method: "POST",
    //   body: JSON.stringify(person),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("API response:", data);
    //   })
    //   .catch((error) => {
    //     console.error("API error:", error);
    //   });

    // console.log(JSON.stringify(person));

    // redirect to profile page
    window.location.href = "/profilesetup";
  }

  return (
    <main className={`${showSignUp ? "active" : ""} blanket one`}>
      <SignupContext.Provider value={{ person, setPerson }}>
        <form
          action="https://find-therapist-api.onrender.com/auth/signup"
          onSubmit={handleSubmit}
          noValidate
          style={{ width: stepNum == 3 ? "550px" : "561px" }}
        >
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
            <button className="redirect">
              {" "}
              Already have an account? <span>Login here</span>
            </button>{" "}
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
            <button className="redirect">
              {" "}
              Already have an account? <span>Login here</span>
            </button>{" "}
          </section>
          <section style={{ display: stepNum == 3 ? "block" : "none" }}>
            <button type="submit">Set up Profile</button>
          </section>
        </form>
      </SignupContext.Provider>
    </main>
  );
};

export default SignUp;
