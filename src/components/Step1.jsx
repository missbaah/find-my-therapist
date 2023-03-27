import React from "react";

const Step1 = () => {
  return (
    <section className="input-box">
      <div>
        <label>Name</label>
        <input type="email" placeholder="eg. Grace Ashley" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" placeholder="example@info.com" />
      </div>
      <div>
        <label>Password</label>
        <input type="email" placeholder="example@info.com" />
      </div>
      <div>
        <label>Confirm Password</label>
        <input type="email" placeholder="example@info.com" />
      </div>
    </section>
  );
};

export default Step1;
