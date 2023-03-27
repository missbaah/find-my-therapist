import React from "react";

const Step1 = () => {
  return (
    <section className="input-box">
      <div>
        <label>Name</label>
        <input type="text" placeholder="eg. Grace Ashley" autoComplete="name" />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="example@info.com"
          autoComplete="email"
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="##########"
          autoComplete="password"
        />
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="##########"
          autoComplete="password"
        />
      </div>
    </section>
  );
};

export default Step1;
