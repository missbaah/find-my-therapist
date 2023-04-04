import React from "react";

const Setup2 = () => {
  return (
    <section className="setup2">
      <div className="item office-hrs">
        <label>Office Hours</label>
        <div>
          <input type="time" placeholder="8:00am" />
          <input type="time" placeholder="5:00am" />
        </div>
      </div>
      <div className="item address">
        <label>Work Address</label>
        <input type="text" placeholder="Amasamam, Staduim" />
      </div>
      <div className="item ">
        <label>Years of Experience</label>
        <select>
          <option value="0-1 years">0-1 years</option>
          <option value="0-1 years">1-2 years</option>
          <option value="0-1 years">3-5 years</option>
          <option value="0-1 years">5-10 years</option>
        </select>
      </div>
      <div className="item ">
        <label>Specialities</label>
        <select>
          <option value="0-1 years"></option>
          <option value="0-1 years">CBT</option>
          <option value="0-1 years">DBT</option>
          <option value="0-1 years">5-10 years</option>
        </select>
      </div>
      <div className="item ">
        <label>Interest Group(s)</label>
        <select>
          <option value="0-1 years">Everyone</option>
          <option value="0-1 years">Women</option>
          <option value="0-1 years">Men</option>
          <option value="0-1 years">Children and Teens</option>
          <option value="0-1 years">Couples</option>
          <option value="0-1 years">Queer People</option>
        </select>
      </div>
    </section>
  );
};

export default Setup2;
