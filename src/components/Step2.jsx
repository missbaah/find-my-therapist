import React from "react";

const Step2 = () => {
  return (
    <section>
      <section className="input-box">
        <div>
          <label>Lisensing Board</label>
          <input type="text" placeholder="eg. Ghana Psychological Counsel" />
        </div>
        <div>
          <label>Lisensing Number</label>
          <input type="text" placeholder="eg. GPC59329859" />
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
          <input type="tel" placeholder="eg. 05*******0" />
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
