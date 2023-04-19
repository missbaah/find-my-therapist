import React from "react";
import { useContext } from "react";
import SignupContext from "../../context/SignupContext";

const Step2 = () => {
  const { person, setPerson } = useContext(SignupContext);

  // const requiredFields2 = ["licensingBoard", "licenseNumber"];
  // const isFilled2 = requiredFields2.every((field) => person[field] !== "");

  const handleLisensing = (e) => {
    setPerson({ ...person, licensingBoard: e.target.value });
  };
  const handleLisenseNum = (e) => {
    setPerson({ ...person, licenseNumber: e.target.value });
  };

  const handleWorkNum = (e) => {
    setPerson({ ...person, workNumber: e.target.value });
  };
  const handleTelNum = (e) => {
    setPerson({ ...person, telephoneNumber: e.target.value });
  };
  const handleTerms = (e) => {
    setPerson({ ...person, termsAgreement: true });
  };

  return (
    <section>
      <section className="input-box">
        <div>
          <label>Lisensing Board</label>
          <input
            type="text"
            placeholder="eg. Ghana Psychology Council"
            name={person.licensingBoard}
            onChange={handleLisensing}
            required
          />
        </div>
        <div>
          <label>Lisense Number</label>
          <input
            type="text"
            placeholder="eg. GPC59329859"
            name={person.licenseNumber}
            onChange={handleLisenseNum}
            required
          />
        </div>
        <div>
          <label>Personal Telephone Number</label>
          <input
            type="tel"
            placeholder="eg. 05*******0"
            autoComplete="telephone"
            name={person.telephoneNumber}
            onChange={handleTelNum}
          />
        </div>
        <div>
          <label>Work Telephone Number</label>
          <input
            type="tel"
            placeholder="eg. 05*******0"
            name={person.workNumber}
            onChange={handleWorkNum}
          />
        </div>
      </section>
      <div className="privacy-checkbox">
        <input
          type="checkbox"
          className="checkbox"
          name="termsAgreement"
          onChange={handleTerms}
          required
        />
        <span>I agree to MHP's friendly privacy policy.</span>
      </div>
    </section>
  );
};

export default Step2;
