import React from "react";
import { useContext } from "react";
import SignupContext from "../context/SignupContext";

const Step2 = () => {
  const { person, setPerson } = useContext(SignupContext);

  const handleLisensing = (e) => {
    setPerson({ ...person, lisensingBoard: e.target.value });
  };
  const handleLisenseNum = (e) => {
    setPerson({ ...person, lisenceNumber: e.target.value });
  };

  // const handleWorkNum = (e) => {
  //   setPerson({ ...person, workNumber: e.target.value });
  // };

  return (
    <section>
      <section className="input-box">
        <div>
          <label>Lisensing Board</label>
          <input
            type="text"
            placeholder="eg. Ghana Psychology Council"
            onChange={handleLisensing}
          />
        </div>
        <div>
          <label>Lisense Number</label>
          <input
            type="text"
            placeholder="eg. GPC59329859"
            onChange={handleLisenseNum}
          />
        </div>
        <div>
          <label>Personal Telephone Number</label>
          <input
            type="tel"
            placeholder="eg. 05*******0"
            autoComplete="telephone"
          />
        </div>
        <div>
          <label>Work Telephone Number</label>
          <input
            type="tel"
            placeholder="eg. 05*******0"
            // onChange={handleWorkNum}
          />
        </div>
      </section>
      <div className="privacy-checkbox">
        <input type="checkbox" className="checkbox" />
        <span>I agree to MHP's friendly privacy policy.</span>
      </div>
    </section>
  );
};

export default Step2;
