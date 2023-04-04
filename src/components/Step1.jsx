import React from "react";

const Step1 = () => {
  return (
    <section className="input-box">
      <div>
        <label>First Name</label>
        <input
          type="text"
          placeholder="eg. Grace "
          autoComplete="name"
          required
        />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" placeholder="eg. Doe" autoComplete="name" required />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="example@info.com"
          autoComplete="email"
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="##########"
          autoComplete="password"
          required
        />
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="##########"
          autoComplete="password"
          required
        />
      </div>
    </section>
  );
};

export default Step1;
