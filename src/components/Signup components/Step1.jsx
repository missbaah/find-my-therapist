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
    setPerson({ ...person, passwordConfirm: e.target.value });
  };

  return (
    <section className="input-box">
      <div>
        <label>First Name</label>
        <input
          type="text"
          placeholder="eg. Grace "
          autoComplete="First Name"
          name={person.firstName}
          onChange={handleFirstName}
          required
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name={person.lastName}
          placeholder="eg. Doe"
          autoComplete="Last Name"
          onChange={handleLastName}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name={person.email}
          placeholder="example@info.com"
          autoComplete="email"
          onChange={handleEmail}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="##########"
          autoComplete="password"
          name={person.password}
          onChange={handlePassword}
          required
        />
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="##########"
          autoComplete="password"
          name={person.passwordConfirm}
          onChange={handleConfirmPassword}
          required
        />
      </div>
    </section>
  );
};

export default Step1;
