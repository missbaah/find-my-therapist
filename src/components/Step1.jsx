import React from "react";
import { useContext } from "react";
import SignupContext from "../context/SignupContext";

const Step1 = () => {
  const { person, setPerson } = useContext(SignupContext);

  const handleFirstName = (e) => {
    setPerson({ ...person, firstName: e.target.value });
  };

  const handleLastName = (e) => {
    setPerson({ ...person, lastName: e.target.value });
  };

  const handleEmail = (e) => {
    setPerson({ ...person, email: e.target.value });
  };

  const handlePassword = (e) => {
    setPerson({ ...person, password: e.target.value });
  };

  const handleConfirmPassword = (e) => {
    setPerson({ ...person, confirmPassword: e.target.value });
  };

  // const validatePasswords = () => {
  //   if (person.password !== person.confirmPassword) {
  //     alert("Passwords do not match");
  //     return;
  //   }
  // };

  return (
    <section className="input-box">
      <div>
        <label>First Name</label>
        <input
          type="text"
          placeholder="eg. Grace "
          autoComplete="First Name"
          onChange={handleFirstName}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          placeholder="eg. Doe"
          autoComplete="Last Name"
          onChange={handleLastName}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="example@info.com"
          autoComplete="email"
          onChange={handleEmail}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="##########"
          autoComplete="password"
          onChange={handlePassword}
        />
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="##########"
          autoComplete="password"
          onChange={handleConfirmPassword}
        />
      </div>
    </section>
  );
};

export default Step1;
